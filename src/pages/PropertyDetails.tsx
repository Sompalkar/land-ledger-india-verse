
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DocumentUpload from "@/components/dashboard/DocumentUpload";
import { mockProperties, BlockchainRecord } from "@/lib/types";
import { getPropertyTransactionHistory } from "@/lib/blockchain";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  FileText,
  Users,
  History,
  Activity,
  Edit,
  Download,
  ExternalLink,
  Loader2,
  Grid3X3,
  Ruler,
  User,
} from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState(mockProperties[0]);
  const [transactionHistory, setTransactionHistory] = useState<BlockchainRecord[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);

  useEffect(() => {
    // Find property by ID from mock data
    const foundProperty = mockProperties.find(p => p.id === id);
    if (foundProperty) {
      setProperty(foundProperty);
    }
    
    // Load blockchain transaction history
    const loadTransactionHistory = async () => {
      setIsLoadingHistory(true);
      try {
        const history = await getPropertyTransactionHistory(id || '1');
        setTransactionHistory(history);
      } catch (error) {
        console.error("Error loading transaction history:", error);
      } finally {
        setIsLoadingHistory(false);
      }
    };
    
    loadTransactionHistory();
  }, [id]);

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800';
      case 'pending_verification':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800';
      case 'disputed':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800';
      case 'transfer_in_progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200 dark:border-gray-800';
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{property.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className={getStatusBadgeVariant(property.status)}>
                {property.status.replace(/_/g, ' ')}
              </Badge>
              <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(property.updatedAt)}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Record
            </Button>
            <Button className="button-gradient">
              <Edit className="h-4 w-4 mr-2" />
              Edit Property
            </Button>
          </div>
        </div>

        {/* Property Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              {property.images.length > 0 ? (
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500 dark:text-gray-400">No image available</p>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {Array(4 - property.images.slice(1, 5).length)
              .fill(0)
              .map((_, index) => (
                <div
                  key={`placeholder-${index}`}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                >
                  <p className="text-gray-500 dark:text-gray-400 text-sm">No image</p>
                </div>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Property Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="details">
              <TabsList className="mb-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="history">Blockchain History</TabsTrigger>
                <TabsTrigger value="ownership">Ownership</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Information</CardTitle>
                    <CardDescription>Detailed information about this property</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Description</h3>
                      <p className="text-gray-700 dark:text-gray-300">{property.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Location Details</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Address</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {property.address.street}, {property.address.city}, {property.address.district},
                                <br />
                                {property.address.state}, {property.address.pincode}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Grid3X3 className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Survey Number</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{property.surveyNumber}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Property Attributes</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <Ruler className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Area</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{property.area} sq. ft.</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <User className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Current Owner</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{property.owner.name}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Activity className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5" />
                            <div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Registration Date</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(property.createdAt)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Blockchain Verification</h3>
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex items-start">
                          <div className="bg-white dark:bg-gray-800 p-2 rounded-md mr-3">
                            <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Blockchain Record ID</p>
                            <p className="text-sm text-blue-700 dark:text-blue-400 font-mono mt-1">
                              {property.blockchainRecordId || "Not yet recorded on blockchain"}
                            </p>
                            <div className="mt-3">
                              <Button size="sm" variant="outline" className="bg-white dark:bg-gray-800">
                                Verify on Blockchain Explorer
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Documents</CardTitle>
                    <CardDescription>
                      All documents related to this property. Upload new documents for verification.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium mb-4">Existing Documents</h3>
                        
                        {property.documents.length > 0 ? (
                          <div className="space-y-4">
                            {property.documents.map((doc, index) => (
                              <div key={index} className="flex border rounded-lg p-3 bg-white dark:bg-gray-800">
                                <div className="mr-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
                                  <FileText className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                </div>
                                <div className="flex-grow">
                                  <p className="font-medium text-gray-900 dark:text-white">{doc.title}</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Uploaded {formatDate(doc.createdAt)}
                                  </p>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-700 dark:text-gray-300 font-medium">No documents available</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Upload your first document</p>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Upload New Document</h3>
                        <DocumentUpload />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Blockchain Transaction History</CardTitle>
                    <CardDescription>
                      Immutable record of all transactions related to this property
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoadingHistory ? (
                      <div className="flex justify-center items-center py-12">
                        <Loader2 className="h-8 w-8 text-land-600 dark:text-land-400 animate-spin mr-3" />
                        <p className="text-gray-600 dark:text-gray-400">Loading blockchain history...</p>
                      </div>
                    ) : transactionHistory.length > 0 ? (
                      <div className="space-y-4">
                        {transactionHistory.map((record, index) => (
                          <div key={index} className="border rounded-lg overflow-hidden">
                            <div className="bg-gray-50 dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                              <div className="flex items-center">
                                <History className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {record.type.charAt(0).toUpperCase() + record.type.slice(1)}
                                </span>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                                {record.status}
                              </Badge>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-900">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Transaction Hash</p>
                                  <p className="text-sm font-mono text-gray-900 dark:text-white break-all">
                                    {record.transactionHash}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Block Number</p>
                                  <p className="text-sm text-gray-900 dark:text-white">
                                    {record.blockNumber}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Timestamp</p>
                                <p className="text-sm text-gray-900 dark:text-white">
                                  {formatDate(record.timeStamp)} ({new Date(record.timeStamp).toLocaleTimeString()})
                                </p>
                              </div>
                              <div className="mt-3">
                                <Button variant="outline" size="sm">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  View on Blockchain Explorer
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <History className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-700 dark:text-gray-300 font-medium">No blockchain history available</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          This property has not been recorded on the blockchain yet
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ownership">
                <Card>
                  <CardHeader>
                    <CardTitle>Ownership History</CardTitle>
                    <CardDescription>
                      Complete chain of ownership for this property
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {property.previousOwners.length > 0 ? (
                      <div className="space-y-4">
                        {property.previousOwners.map((transfer, index) => (
                          <div key={index} className="border rounded-lg overflow-hidden">
                            <div className="bg-gray-50 dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700">
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900 dark:text-white">
                                  Transfer #{property.previousOwners.length - index}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  {formatDate(transfer.transferDate)}
                                </span>
                              </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-900">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">From</p>
                                  <div className="flex items-center">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-2 flex items-center justify-center overflow-hidden">
                                      {transfer.fromOwner.profileImageUrl ? (
                                        <img 
                                          src={transfer.fromOwner.profileImageUrl} 
                                          alt={transfer.fromOwner.name} 
                                          className="h-full w-full object-cover"
                                        />
                                      ) : (
                                        <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                      )}
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                      {transfer.fromOwner.name}
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">To</p>
                                  <div className="flex items-center">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-2 flex items-center justify-center overflow-hidden">
                                      {transfer.toOwner.profileImageUrl ? (
                                        <img 
                                          src={transfer.toOwner.profileImageUrl} 
                                          alt={transfer.toOwner.name} 
                                          className="h-full w-full object-cover"
                                        />
                                      ) : (
                                        <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                      )}
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                      {transfer.toOwner.name}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Registration Number</p>
                                  <p className="text-sm text-gray-900 dark:text-white">
                                    {transfer.registrationNumber || "N/A"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Transaction Hash</p>
                                  <p className="text-sm font-mono text-gray-900 dark:text-white break-all">
                                    {transfer.transactionHash || "N/A"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {/* Current Owner */}
                        <div className="border rounded-lg overflow-hidden border-green-200 dark:border-green-800">
                          <div className="bg-green-50 dark:bg-green-900/20 p-3 border-b border-green-200 dark:border-green-800">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-green-800 dark:text-green-300">
                                Current Owner
                              </span>
                              <span className="text-sm text-green-700 dark:text-green-400">
                                Since {formatDate(property.createdAt)}
                              </span>
                            </div>
                          </div>
                          <div className="p-4 bg-white dark:bg-gray-900">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 mr-3 flex items-center justify-center overflow-hidden">
                                {property.owner.profileImageUrl ? (
                                  <img 
                                    src={property.owner.profileImageUrl} 
                                    alt={property.owner.name} 
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <User className="h-5 w-5 text-green-600 dark:text-green-400" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {property.owner.name}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  Verified Owner
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="border rounded-lg overflow-hidden border-green-200 dark:border-green-800">
                          <div className="bg-green-50 dark:bg-green-900/20 p-3 border-b border-green-200 dark:border-green-800">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-green-800 dark:text-green-300">
                                Initial & Current Owner
                              </span>
                              <span className="text-sm text-green-700 dark:text-green-400">
                                Since {formatDate(property.createdAt)}
                              </span>
                            </div>
                          </div>
                          <div className="p-4 bg-white dark:bg-gray-900">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 mr-3 flex items-center justify-center overflow-hidden">
                                {property.owner.profileImageUrl ? (
                                  <img 
                                    src={property.owner.profileImageUrl} 
                                    alt={property.owner.name} 
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <User className="h-5 w-5 text-green-600 dark:text-green-400" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {property.owner.name}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  Original & Current Owner
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md border border-blue-200 dark:border-blue-800">
                              <div className="flex items-start">
                                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                                <p className="text-sm text-blue-800 dark:text-blue-300">
                                  This property has not changed ownership since initial registration.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar - Actions & Map */}
          <div className="lg:col-span-1 space-y-6">
            {/* Actions Card */}
            <Card>
              <CardHeader>
                <CardTitle>Property Actions</CardTitle>
                <CardDescription>Operations you can perform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full button-gradient">
                  <Users className="mr-2 h-4 w-4" />
                  Initiate Transfer
                </Button>
                <Button variant="outline" className="w-full">
                  <Edit className="mr-2 h-4 w-4" />
                  Update Information
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Title Deed
                </Button>
                <Button variant="outline" className="w-full" className="w-full bg-red-50 hover:bg-red-100 text-red-700 border-red-200 hover:border-red-300 dark:bg-red-900/20 dark:hover:bg-red-900/30 dark:text-red-400 dark:border-red-800 dark:hover:border-red-700">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Report Issue
                </Button>
              </CardContent>
            </Card>
            
            {/* Location Map */}
            <Card>
              <CardHeader>
                <CardTitle>Property Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                  {/* Placeholder for map - in a real app, integrate with Google Maps or similar */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-land-600 dark:text-land-400 mx-auto mb-2" />
                        <p className="text-gray-600 dark:text-gray-400">Map view would be displayed here</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                          {property.address.city}, {property.address.state}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Boundary Coordinates</p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md text-sm font-mono">
                    {property.boundaryCoordinates.map((coord, index) => (
                      <div key={index} className="flex justify-between mb-1 last:mb-0">
                        <span className="text-gray-500 dark:text-gray-400">Point {index + 1}:</span>
                        <span className="text-gray-900 dark:text-white">
                          {coord.latitude.toFixed(4)}, {coord.longitude.toFixed(4)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PropertyDetails;
