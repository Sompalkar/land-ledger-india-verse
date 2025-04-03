
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { executeSmartContract } from '@/lib/blockchain';
import { Loader2, Lock, ShieldCheck, AlertTriangle } from 'lucide-react';

interface PropertyTransferProps {
  propertyId: string;
  propertyTitle: string;
  currentOwnerId: string;
  toOwnerId: string;
  transferAmount: number;
}

const PropertyTransfer = ({ 
  propertyId, 
  propertyTitle, 
  currentOwnerId, 
  toOwnerId, 
  transferAmount 
}: PropertyTransferProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [step, setStep] = useState<number>(1);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contractAddress, setContractAddress] = useState<string>('');
  
  const handlePasswordCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.length < 8) {
      toast({
        title: "Password too short",
        description: "Transfer password must be at least 8 characters long",
        variant: "destructive"
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords match",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Generate smart contract for transfer
      const contractAddr = await executeSmartContract('0x1234', 'initiateTransfer', [
        propertyId,
        currentOwnerId,
        toOwnerId,
        transferAmount,
        // We would hash the password client-side in a real implementation
        // and only send the hash to the blockchain
        password 
      ]);
      
      setContractAddress(contractAddr);
      
      toast({
        title: "Transfer initiated",
        description: "Smart contract has been generated successfully",
      });
      
      setStep(2);
    } catch (error) {
      toast({
        title: "Error initiating transfer",
        description: "Failed to generate smart contract. Please try again.",
        variant: "destructive"
      });
      console.error("Transfer initiation error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleTransferExecute = async () => {
    setIsLoading(true);
    
    try {
      // In a real implementation, we would call the blockchain to execute the transfer
      const result = await executeSmartContract(contractAddress, 'executeTransfer', [
        propertyId,
        currentOwnerId,
        toOwnerId
      ]);
      
      if (result.success) {
        toast({
          title: "Transfer successful",
          description: "Property has been transferred successfully",
        });
        
        // Redirect after successful transfer
        setTimeout(() => {
          navigate(`/properties/${propertyId}`);
        }, 2000);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: "Transfer failed",
        description: "Property transfer could not be completed. Please try again.",
        variant: "destructive"
      });
      console.error("Transfer execution error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-gray-200 dark:border-gray-800">
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-2xl font-bold">Secure Property Transfer</CardTitle>
        <CardDescription>
          {step === 1 
            ? "Create a secure password to authorize this transfer" 
            : "Confirm and execute property transfer"}
        </CardDescription>
      </CardHeader>
      
      {step === 1 ? (
        <form onSubmit={handlePasswordCreate}>
          <CardContent className="space-y-4 pt-4">
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/50 mb-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2" />
                <div className="text-sm text-amber-800 dark:text-amber-300">
                  <p className="font-semibold">Important security notice</p>
                  <p className="mt-1">This password will be required to authorize the transfer of property ownership. Please create a strong, unique password and store it securely.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="transfer-password">Transfer Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="transfer-password"
                  type="password"
                  placeholder="Create a secure password"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters long
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  className="pl-10"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-2">
            <Button 
              type="submit" 
              className="w-full button-gradient"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Smart Contract...
                </>
              ) : (
                "Continue"
              )}
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={() => navigate(-1)}
              disabled={isLoading}
            >
              Cancel Transfer
            </Button>
          </CardFooter>
        </form>
      ) : (
        <>
          <CardContent className="space-y-6 pt-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800/50 flex items-start">
              <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <div className="text-sm text-green-800 dark:text-green-300">
                <p className="font-semibold">Smart contract generated successfully</p>
                <p className="mt-1">Your transfer is ready to be executed. This will permanently transfer ownership of the property.</p>
              </div>
            </div>
            
            <div className="space-y-1 bg-muted/50 p-3 rounded-md">
              <p className="text-sm font-medium">Transfer Details:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Property:</span>
                  <span className="font-medium">{propertyTitle}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium">₹{transferAmount.toLocaleString()}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Contract:</span>
                  <span className="font-medium text-xs">{contractAddress.substring(0, 10)}...{contractAddress.substring(contractAddress.length - 6)}</span>
                </li>
              </ul>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-2">
            <Button 
              onClick={handleTransferExecute} 
              className="w-full button-gradient"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Executing Transfer...
                </>
              ) : (
                "Execute Transfer"
              )}
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setStep(1)}
              disabled={isLoading}
            >
              Back
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default PropertyTransfer;
