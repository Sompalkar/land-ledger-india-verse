
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PropertyCard from "@/components/dashboard/PropertyCard";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, 
  Map, 
  FileText, 
  AlertTriangle, 
  BarChart3, 
  ArrowUpRight,
  PlusCircle,
  Clock,
  Calendar,
  TrendingUp,
  Users
} from "lucide-react";
import { mockProperties } from "@/lib/types";

const Dashboard = () => {
  const [recentProperties] = useState(mockProperties);

  // Mock data for dashboard widgets
  const pendingDocuments = 3;
  const pendingVerifications = 2;
  const activeDisputes = 1;
  
  // Recent transactions data
  const recentTransactions = [
    { id: 1, type: "Document Upload", status: "Completed", date: "2 hours ago" },
    { id: 2, type: "Property Verification", status: "Pending", date: "1 day ago" },
    { id: 3, type: "Land Transfer", status: "Processing", date: "3 days ago" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <Button className="button-gradient">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Property
          </Button>
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Properties</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{recentProperties.length}</h3>
                </div>
                <div className="bg-land-50 dark:bg-land-900/30 p-2 rounded-lg">
                  <Map className="h-5 w-5 text-land-600 dark:text-land-400" />
                </div>
              </div>
              <div className="mt-3 flex items-center text-sm">
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>12% increase</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Documents</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{pendingDocuments}</h3>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <div className="mt-3 flex items-center text-sm">
                <div className="flex items-center text-amber-600 dark:text-amber-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2 require action</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Disputes</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{activeDisputes}</h3>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 p-2 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div className="mt-3 flex items-center text-sm">
                <div className="flex items-center text-red-600 dark:text-red-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Mediation scheduled</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Transactions</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">24</h3>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="mt-3 flex items-center text-sm">
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <Users className="h-4 w-4 mr-1" />
                  <span>5 transactions this month</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Properties */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Your Properties</CardTitle>
                    <CardDescription>Manage your registered land and properties</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="disputed">Disputed</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="space-y-4">
                    {recentProperties.map(property => (
                      <PropertyCard 
                        key={property.id} 
                        property={property} 
                        variant="compact" 
                      />
                    ))}
                  </TabsContent>
                  <TabsContent value="active" className="space-y-4">
                    {recentProperties
                      .filter(property => property.status === 'active')
                      .map(property => (
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                          variant="compact" 
                        />
                      ))}
                  </TabsContent>
                  <TabsContent value="pending" className="space-y-4">
                    {recentProperties
                      .filter(property => property.status === 'pending_verification')
                      .map(property => (
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                          variant="compact" 
                        />
                      ))}
                  </TabsContent>
                  <TabsContent value="disputed" className="space-y-4">
                    {recentProperties
                      .filter(property => property.status === 'disputed')
                      .map(property => (
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                          variant="compact" 
                        />
                      ))}
                    {recentProperties.filter(property => property.status === 'disputed').length === 0 && (
                      <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">No disputed properties</p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Activity and Tasks */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest transactions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map(transaction => (
                    <div key={transaction.id} className="flex items-start pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                      <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 mr-3">
                        {transaction.type.includes("Document") ? (
                          <FileText className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        ) : transaction.type.includes("Verification") ? (
                          <LayoutDashboard className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        ) : (
                          <Map className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{transaction.type}</p>
                        <div className="flex items-center mt-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            transaction.status === "Completed" 
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                              : transaction.status === "Pending"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}>
                            {transaction.status}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{transaction.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Outstanding Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Tasks</CardTitle>
                <CardDescription>Actions that require your attention</CardDescription>
              </CardHeader>
              <CardContent>
                {pendingVerifications + pendingDocuments > 0 ? (
                  <div className="space-y-4">
                    {pendingVerifications > 0 && (
                      <div className="flex items-start p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
                        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-amber-800 dark:text-amber-300 text-sm">Property Verification Required</p>
                          <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">{pendingVerifications} properties need your attention</p>
                          <Button variant="outline" size="sm" className="mt-2 h-8 bg-white dark:bg-gray-800">
                            Review Now
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {pendingDocuments > 0 && (
                      <div className="flex items-start p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                        <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-800 dark:text-blue-300 text-sm">Document Uploads Pending</p>
                          <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">You have {pendingDocuments} incomplete document uploads</p>
                          <Button variant="outline" size="sm" className="mt-2 h-8 bg-white dark:bg-gray-800">
                            Complete Uploads
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {activeDisputes > 0 && (
                      <div className="flex items-start p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-red-800 dark:text-red-300 text-sm">Active Dispute</p>
                          <p className="text-xs text-red-700 dark:text-red-400 mt-1">Mediation scheduled for 10th April 2025</p>
                          <Button variant="outline" size="sm" className="mt-2 h-8 bg-white dark:bg-gray-800">
                            View Details
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                      <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">All caught up!</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">You have no pending tasks.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
