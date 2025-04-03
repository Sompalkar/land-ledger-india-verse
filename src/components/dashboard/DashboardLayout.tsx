
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Map, 
  FileText, 
  UserCircle, 
  Settings, 
  Bell, 
  LogOut, 
  Plus,
  HelpCircle,
  BarChart3,
  MessageSquare,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { mockUser } from "@/lib/types";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const { toast } = useToast();
  
  // User from mock data
  const user = mockUser;

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />
    },
    {
      name: "My Properties",
      path: "/properties",
      icon: <Map className="h-5 w-5" />
    },
    {
      name: "Documents",
      path: "/documents",
      icon: <FileText className="h-5 w-5" />
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <UserCircle className="h-5 w-5" />
    },
    {
      name: "Messages",
      path: "/messages",
      icon: <MessageSquare className="h-5 w-5" />
    }
  ];

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex md:flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/dashboard" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-land flex items-center justify-center">
                <span className="text-white font-bold text-lg">LL</span>
              </div>
              <span className="text-lg font-bold text-land-700 dark:text-land-300">
                Land<span className="text-saffron-500">Ledger</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`group flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? "text-land-700 bg-land-50 dark:text-land-300 dark:bg-land-900/30"
                      : "text-gray-700 hover:text-land-600 hover:bg-land-50 dark:text-gray-300 dark:hover:text-land-300 dark:hover:bg-land-900/20"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
            <ul className="space-y-1">
              <li>
                <Link
                  to="/settings"
                  className="group flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-land-600 hover:bg-land-50 dark:text-gray-300 dark:hover:text-land-300 dark:hover:bg-land-900/20"
                >
                  <Settings className="h-5 w-5" />
                  <span className="ml-3">Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="group flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-land-600 hover:bg-land-50 dark:text-gray-300 dark:hover:text-land-300 dark:hover:bg-land-900/20"
                >
                  <HelpCircle className="h-5 w-5" />
                  <span className="ml-3">Help & Support</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full group flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 dark:text-gray-300 dark:hover:text-red-400 dark:hover:bg-red-900/20"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="ml-3">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10">
          <div className="h-16 px-4 flex items-center justify-between">
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-land-600 hover:bg-land-50 dark:text-gray-300 dark:hover:text-land-300 dark:hover:bg-land-900/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Search */}
            <div className="relative max-w-md w-full md:ml-16 hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for properties, documents..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-land-500 dark:focus:ring-land-400 focus:border-transparent"
              />
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Plus className="h-4 w-4 mr-1" />
                Add Property
              </Button>
              
              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-saffron-500"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  <div className="max-h-[300px] overflow-y-auto">
                    <DropdownMenuItem className="p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="font-medium text-sm">Property Verification</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Your property "Residential Plot in Bangalore" has been verified successfully.
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                            New
                          </Badge>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem className="p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800">
                      <div>
                        <p className="font-medium text-sm">Document Upload</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Upload of "Land Survey Report" was successful. It's now pending verification.
                        </p>
                        <p className="text-xs text-gray-400 mt-2">2 hours ago</p>
                      </div>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem className="p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800">
                      <div>
                        <p className="font-medium text-sm">System Update</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          The system will be under maintenance on Sunday, 10th April, from 2 AM to 5 AM IST.
                        </p>
                        <p className="text-xs text-gray-400 mt-2">1 day ago</p>
                      </div>
                    </DropdownMenuItem>
                  </div>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="justify-center text-center cursor-pointer text-land-600 dark:text-land-400 hover:text-land-700 dark:hover:text-land-300 focus:text-land-700 dark:focus:text-land-300">
                    View all notifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* User menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-land-100 dark:bg-land-800 flex items-center justify-center overflow-hidden">
                      {user.profileImageUrl ? (
                        <img 
                          src={user.profileImageUrl} 
                          alt={user.name} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-land-700 dark:text-land-300 font-medium">
                          {user.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="ml-3 hidden md:block">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{user.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{user.role}</p>
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserCircle className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
