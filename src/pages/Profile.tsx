
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  User,
  Mail,
  Phone,
  Upload,
  Edit,
  Lock,
  Shield,
  Info,
  FileText,
  Key,
  Loader2,
  Fingerprint,
  LogOut,
  AlertTriangle,
} from "lucide-react";
import { mockUser } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(mockUser);
  const [profileImage, setProfileImage] = useState<string | null>(user.profileImageUrl || null);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setUser((prev) => ({
        ...prev,
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      }));
      
      toast({
        title: "Profile Updated",
        description: "Your profile information has been updated successfully.",
        variant: "default",
      });
    }, 1500);
  };

  const handleChangePassword = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Passwords Don't Match",
        description: "New password and confirmation password must match.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.newPassword.length < 8) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      
      toast({
        title: "Password Changed",
        description: "Your password has been changed successfully.",
        variant: "default",
      });
    }, 1500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Simulate upload
      setTimeout(() => {
        toast({
          title: "Profile Image Updated",
          description: "Your profile image has been updated successfully.",
          variant: "default",
        });
      }, 1000);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Image Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Image</CardTitle>
                  <CardDescription>
                    Update your profile picture
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center pt-6">
                  <div className="relative mb-6">
                    <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt={user.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <User className="h-16 w-16 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <label
                      htmlFor="profile-image-upload"
                      className="absolute bottom-0 right-0 p-2 rounded-full bg-land-600 dark:bg-land-700 text-white cursor-pointer shadow-md hover:bg-land-700 dark:hover:bg-land-800 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </label>
                    <input
                      id="profile-image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Click the edit button to upload a new profile image
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setProfileImage(null)}
                  >
                    Remove Image
                  </Button>
                </CardFooter>
              </Card>

              {/* Personal Information Card */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your account details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                        placeholder="Your name"
                        className="pl-10"
                        value={formData.name}
                        onChange={handleChange}
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
                        placeholder="your.email@example.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="+91 9876543210"
                        className="pl-10"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="aadhaar">Aadhaar Number</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Fingerprint className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="aadhaar"
                        type="text"
                        className="pl-10"
                        value={user.aadhaarNumber || ""}
                        disabled
                      />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      For security reasons, Aadhaar number cannot be changed
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleUpdateProfile}
                    className="button-gradient ml-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        Update Profile
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="security">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Password Update Card */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Update Password</CardTitle>
                  <CardDescription>
                    Change your account password
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={formData.currentPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Key className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={formData.newPassword}
                        onChange={handleChange}
                      />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Password must be at least 8 characters with a mix of letters, numbers and symbols
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
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
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleChangePassword}
                    className="button-gradient ml-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        Change Password
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>

              {/* Security Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Security Information</CardTitle>
                  <CardDescription>
                    Your account security status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <div className="flex items-center">
                      <div className="p-1.5 bg-green-100 dark:bg-green-900/40 rounded-full mr-3">
                        <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800 dark:text-green-300">Aadhaar Verified</p>
                        <p className="text-xs text-green-700 dark:text-green-400 mt-0.5">Two-factor authentication enabled</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center">
                      <div className="p-1.5 bg-blue-100 dark:bg-blue-900/40 rounded-full mr-3">
                        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Last Login</p>
                        <p className="text-xs text-blue-700 dark:text-blue-400 mt-0.5">Today at 10:23 AM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <div className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-full mr-3">
                        <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-300">Phone Verification</p>
                        <p className="text-xs text-gray-700 dark:text-gray-400 mt-0.5">SMS verification enabled</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-full text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out from All Devices
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Sign Out from All Devices</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will sign you out from all devices where you are currently logged in. You will need to sign in again on each device.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => {
                            toast({
                              title: "Signed Out",
                              description: "You have been signed out from all devices.",
                              variant: "default",
                            });
                          }}
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Sign Out All
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="documents">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Personal Documents */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>My Documents</CardTitle>
                  <CardDescription>
                    Personal documents uploaded to your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex border rounded-lg p-4 bg-white dark:bg-gray-800">
                      <div className="mr-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                        <FileText className="h-6 w-6 text-land-600 dark:text-land-400" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">Aadhaar Card</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              ID Proof • Verified
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-2 flex items-center">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                            Verified
                          </Badge>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                            Uploaded on 15 Jan 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex border rounded-lg p-4 bg-white dark:bg-gray-800">
                      <div className="mr-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                        <FileText className="h-6 w-6 text-land-600 dark:text-land-400" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">PAN Card</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Tax ID • Verified
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-2 flex items-center">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                            Verified
                          </Badge>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                            Uploaded on 20 Jan 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex border rounded-lg p-4 bg-white dark:bg-gray-800">
                      <div className="mr-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                        <FileText className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">Bank Statement</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Financial Proof • Pending Verification
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-2 flex items-center">
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800">
                            Pending
                          </Badge>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                            Uploaded on 5 Mar 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload New Document
                  </Button>
                </CardFooter>
              </Card>

              {/* Account Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Management</CardTitle>
                  <CardDescription>
                    Options for your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex">
                      <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-800 dark:text-amber-300 text-sm">Data Export</p>
                        <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
                          You can request a full export of your account data, including all property records and documents.
                        </p>
                        <Button size="sm" variant="outline" className="mt-2 bg-white dark:bg-gray-800">
                          Request Data Export
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex">
                      <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-800 dark:text-red-300 text-sm">Account Deletion</p>
                        <p className="text-xs text-red-700 dark:text-red-400 mt-1">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="outline" className="mt-2 text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:border-red-700 dark:hover:bg-red-900/30 dark:hover:text-red-300 bg-white dark:bg-gray-800">
                              Delete Account
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove all your data from our servers, including all property records, 
                                documents, and blockchain entries.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-red-600 hover:bg-red-700 text-white"
                                onClick={() => {
                                  toast({
                                    title: "Account Deletion Requested",
                                    description: "We have received your account deletion request. You will receive a confirmation email shortly.",
                                    variant: "default",
                                  });
                                }}
                              >
                                Delete Account
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
