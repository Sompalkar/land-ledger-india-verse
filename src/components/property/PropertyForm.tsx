
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createBlockchainRecord } from "@/lib/blockchain";
import { Building, MapPin, Upload, Loader2, Check } from "lucide-react";

// Form validation schema
const propertyFormSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters" }),
  street: z.string().min(5, { message: "Street address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  district: z.string().min(2, { message: "District is required" }),
  state: z.string().min(2, { message: "State is required" }),
  pincode: z.string().length(6, { message: "Pincode must be 6 digits" }),
  surveyNumber: z.string().min(3, { message: "Survey number is required" }),
  area: z.number().min(1, { message: "Area must be greater than 0" })
});

type PropertyFormValues = z.infer<typeof propertyFormSchema>;

const PropertyForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  
  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: {
      title: "",
      description: "",
      street: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
      surveyNumber: "",
      area: 0
    }
  });
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
      
      // Simulate upload progress
      newFiles.forEach(file => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 5;
          setUploadProgress(prev => ({ ...prev, [file.name]: progress }));
          
          if (progress >= 100) {
            clearInterval(interval);
          }
        }, 200);
      });
    }
  };
  
  const onSubmit = async (data: PropertyFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare property data
      const propertyData = {
        ...data,
        images: uploadedFiles.map(file => URL.createObjectURL(file)),
        coordinates: [
          { latitude: 12.9716, longitude: 77.5946 }, // Placeholder coordinates
          { latitude: 12.9720, longitude: 77.5950 },
          { latitude: 12.9715, longitude: 77.5955 },
          { latitude: 12.9711, longitude: 77.5951 }
        ]
      };
      
      // Create blockchain record
      const record = await createBlockchainRecord(propertyData, 'property');
      
      toast({
        title: "Property added successfully",
        description: `Transaction hash: ${record.transactionHash.slice(0, 10)}...`,
      });
      
      // Redirect to the property details page
      setTimeout(() => {
        navigate(`/properties/${record.id}`);
      }, 1500);
    } catch (error) {
      console.error("Property submission error:", error);
      toast({
        title: "Error adding property",
        description: "Failed to create property record. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Card className="border-gray-200 dark:border-gray-700 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">Add New Property</CardTitle>
          <CardDescription>
            Enter your property details to register it on the blockchain
          </CardDescription>
        </CardHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                  <Building className="mr-2 h-5 w-5 text-land-500" />
                  Property Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Residential Plot in Bangalore" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="surveyNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Survey Number</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. SRV123456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide a detailed description of your property"
                          className="resize-none min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area (in sq. ft.)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="e.g. 1200"
                          {...field}
                          onChange={e => field.onChange(Number(e.target.value))} 
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the total area of the property in square feet
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-land-500" />
                  Property Address
                </h3>
                
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 123 Main Street" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Bangalore" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>District</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Bangalore Urban" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Karnataka" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 560001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                  <Upload className="mr-2 h-5 w-5 text-land-500" />
                  Property Documents
                </h3>
                
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="file-upload"
                    className="sr-only"
                    onChange={handleFileUpload}
                    multiple
                    accept="image/*,.pdf"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Files
                  </label>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Upload property images, title deeds, and other relevant documents
                  </p>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2 mt-4">
                    <p className="text-sm font-medium">Uploaded Files ({uploadedFiles.length})</p>
                    <ul className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <li key={index} className="text-sm flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                          <span className="truncate max-w-[200px]">{file.name}</span>
                          <div className="flex items-center gap-2">
                            {uploadProgress[file.name] < 100 ? (
                              <>
                                <span className="text-xs">{uploadProgress[file.name]}%</span>
                                <div className="h-1.5 w-20 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-land-500 rounded-full" 
                                    style={{ width: `${uploadProgress[file.name]}%` }}
                                  />
                                </div>
                              </>
                            ) : (
                              <Check className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between border-t px-6 pt-6">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              
              <Button 
                type="submit"
                className="button-gradient"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Register Property"
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default PropertyForm;
