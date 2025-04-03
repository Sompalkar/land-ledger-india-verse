
import { useState } from "react";
import { Link } from "react-router-dom";
import { Property } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight, Shield, Loader2 } from "lucide-react";
import { verifyBlockchainRecord } from "@/lib/blockchain";
import { useToast } from "@/hooks/use-toast";

interface PropertyCardProps {
  property: Property;
  variant?: "default" | "compact";
}

const PropertyCard = ({ property, variant = "default" }: PropertyCardProps) => {
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);
  
  // Calculate how long ago the property was updated
  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    
    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else {
      return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    }
  };
  
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
  
  const handleVerifyRecord = async () => {
    if (!property.blockchainRecordId) {
      toast({
        title: "Verification Failed",
        description: "This property is not yet recorded on the blockchain.",
        variant: "destructive",
      });
      return;
    }
    
    setIsVerifying(true);
    
    try {
      const isValid = await verifyBlockchainRecord(property.blockchainRecordId);
      
      if (isValid) {
        toast({
          title: "Verification Successful",
          description: "This property record is valid and secure on the blockchain.",
          variant: "default",
        });
      } else {
        toast({
          title: "Verification Failed",
          description: "There might be an issue with this property record. Please contact support.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Verification Error",
        description: "Could not complete blockchain verification at this time.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };
  
  if (variant === "compact") {
    return (
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 h-32 sm:h-auto">
            <img 
              src={property.images[0] || "https://via.placeholder.com/300x200?text=No+Image"} 
              alt={property.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-4 sm:w-2/3 flex flex-col">
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{property.title}</h3>
                <Badge variant="outline" className={getStatusBadgeVariant(property.status)}>
                  {property.status.replace(/_/g, ' ')}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-1">{property.description}</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.address.city}, {property.address.state}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                <span>Updated {getTimeAgo(property.updatedAt)}</span>
              </div>
              <Button asChild variant="ghost" size="sm" className="gap-1 hover:bg-transparent hover:text-land-600 p-0">
                <Link to={`/properties/${property.id}`}>
                  View details
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="h-48 relative">
        <img 
          src={property.images[0] || "https://via.placeholder.com/300x200?text=No+Image"} 
          alt={property.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className={getStatusBadgeVariant(property.status)}>
            {property.status.replace(/_/g, ' ')}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{property.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{property.description}</p>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{property.address.street}, {property.address.city}, {property.address.state}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm">
            <span className="text-gray-500 dark:text-gray-400">Area: </span>
            <span className="font-medium text-gray-900 dark:text-white">{property.area} sq.ft.</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500 dark:text-gray-400">Survey No: </span>
            <span className="font-medium text-gray-900 dark:text-white">{property.surveyNumber}</span>
          </div>
        </div>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <Clock className="h-3 w-3 mr-1" />
          <span>Updated {getTimeAgo(property.updatedAt)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Button variant="outline" size="sm" onClick={handleVerifyRecord} disabled={isVerifying}>
          {isVerifying ? (
            <>
              <Loader2 className="h-4 w-4 mr-1 animate-spin" />
              Verifying...
            </>
          ) : (
            <>
              <Shield className="h-4 w-4 mr-1" />
              Verify on Blockchain
            </>
          )}
        </Button>
        <Button asChild variant="ghost" size="sm" className="gap-1 hover:bg-transparent hover:text-land-600">
          <Link to={`/properties/${property.id}`}>
            View details
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
