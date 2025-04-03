
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileUp,
  File,
  X,
  Check,
  Loader2,
  AlertCircle,
  FileText
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createBlockchainRecord } from "@/lib/blockchain";

const DocumentUpload = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // If it's an image, create a preview
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      
      // If it's an image, create a preview
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
      return;
    }

    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please provide a title for your document.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Simulate file upload process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate blockchain record creation
      await createBlockchainRecord(
        { title, description, fileName: selectedFile.name },
        'document'
      );

      toast({
        title: "Document uploaded successfully",
        description: "Your document has been uploaded and recorded on the blockchain.",
        variant: "default",
      });

      // Reset form
      setTitle("");
      setDescription("");
      setSelectedFile(null);
      setFilePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your document. Please try again.",
        variant: "destructive",
      });
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Document</CardTitle>
        <CardDescription>
          Upload property documents to be verified and securely recorded on the blockchain
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="e.g., Land Deed, Property Tax Receipt"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <Input
            id="description"
            placeholder="Brief description of the document"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Document</Label>
          <div
            className={`border-2 border-dashed rounded-lg p-6 ${
              selectedFile ? 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20' : 'border-gray-300 dark:border-gray-600'
            }`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {selectedFile ? (
              <div className="flex flex-col items-center">
                <div className="mb-4 relative">
                  {filePreview ? (
                    <div className="relative w-32 h-32">
                      <img
                        src={filePreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                      <button
                        onClick={clearSelectedFile}
                        className="absolute -top-2 -right-2 p-1 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
                      >
                        <X className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  ) : (
                    <div className="relative w-32 h-32 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
                      <FileText className="h-12 w-12 text-gray-400" />
                      <button
                        onClick={clearSelectedFile}
                        className="absolute -top-2 -right-2 p-1 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
                      >
                        <X className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-green-600 dark:text-green-400 font-medium">File selected</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{selectedFile.name}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <FileUp className="h-12 w-12 text-gray-400 mb-3" />
                <p className="text-center text-sm mb-4">
                  <span className="font-medium">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
                  Supported formats: PDF, JPG, PNG, TIFF
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Max file size: 10MB
                </p>
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png,.tiff"
              onChange={handleFileChange}
            />
            
            <div className="mt-4 flex justify-center">
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
              >
                <File className="h-4 w-4 mr-2" />
                {selectedFile ? "Replace file" : "Select file"}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md border border-amber-200 dark:border-amber-800">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0" />
            <div className="text-sm text-amber-800 dark:text-amber-300">
              <p className="font-medium">Important Note</p>
              <p className="mt-1">Uploaded documents will be verified by government officials before being recorded on the blockchain. False documentation may lead to legal consequences.</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleUpload}
          className="button-gradient w-full"
          disabled={isUploading || !selectedFile}
        >
          {isUploading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Uploading & Recording...
            </>
          ) : (
            <>
              <FileUp className="h-4 w-4 mr-2" />
              Upload & Record on Blockchain
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentUpload;
