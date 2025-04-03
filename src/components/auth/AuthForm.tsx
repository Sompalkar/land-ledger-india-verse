
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fingerprint, User, Mail, Lock, Phone, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AuthForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    aadhaar: "",
    password: "",
    confirmPassword: "",
    otp: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to LandLedger!",
        variant: "default",
      });
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (!otpSent) {
        setOtpSent(true);
        toast({
          title: "OTP Sent",
          description: "Please check your phone for the verification code.",
          variant: "default",
        });
      } else {
        toast({
          title: "Registration Successful",
          description: "Your account has been created successfully!",
          variant: "default",
        });
      }
    }, 1500);
  };

  const handleVerifyAadhaar = () => {
    if (!formData.aadhaar || formData.aadhaar.length !== 12) {
      toast({
        title: "Invalid Aadhaar Number",
        description: "Please enter a valid 12-digit Aadhaar number.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate Aadhaar verification
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Aadhaar Verified",
        description: "Your identity has been verified successfully.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-12 w-12 rounded-md bg-gradient-land flex items-center justify-center">
            <span className="text-white font-bold text-lg">LL</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold gradient-heading">
          Welcome to LandLedger
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Secure your land records with blockchain technology
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-land-600 hover:text-land-500 dark:text-land-400 dark:hover:text-land-300">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-land-600 focus:ring-land-500"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="button-gradient w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Sign in"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create your account</CardTitle>
                <CardDescription>
                  Register with Aadhaar verification for enhanced security
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  {!otpSent ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            className="pl-10"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            className="pl-10"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 9876543210"
                            className="pl-10"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="aadhaar">Aadhaar Number</Label>
                        <div className="relative flex">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Fingerprint className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="aadhaar"
                            name="aadhaar"
                            type="text"
                            placeholder="123456789012"
                            className="pl-10 rounded-r-none"
                            value={formData.aadhaar}
                            onChange={handleChange}
                            required
                          />
                          <Button 
                            type="button" 
                            onClick={handleVerifyAadhaar}
                            variant="secondary"
                            className="rounded-l-none border border-l-0 border-input"
                            disabled={isLoading}
                          >
                            Verify
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Your Aadhaar will be verified securely via OTP
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Shield className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 p-4 border border-amber-200 dark:border-amber-800">
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                          A verification code has been sent to your phone number. Please enter it below to complete registration.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="otp">Verification Code (OTP)</Label>
                        <Input
                          id="otp"
                          name="otp"
                          type="text"
                          placeholder="123456"
                          className="text-center text-lg tracking-widest"
                          value={formData.otp}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="text-center">
                        <button 
                          type="button" 
                          className="text-sm text-land-600 hover:text-land-500 dark:text-land-400 dark:hover:text-land-300"
                          onClick={() => setOtpSent(false)}
                        >
                          Go back to registration form
                        </button>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="button-gradient w-full" 
                    disabled={isLoading}
                  >
                    {isLoading 
                      ? "Processing..." 
                      : otpSent 
                        ? "Complete Registration" 
                        : "Register & Get OTP"
                    }
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
        
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          By signing up, you agree to our{" "}
          <Link to="/terms" className="font-medium text-land-600 hover:text-land-500 dark:text-land-400 dark:hover:text-land-300">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="font-medium text-land-600 hover:text-land-500 dark:text-land-400 dark:hover:text-land-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
