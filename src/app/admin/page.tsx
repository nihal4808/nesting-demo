"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  BarChart as BarChartIcon, 
  Calendar as CalendarIcon, 
  Home, 
  Users, 
  Settings, 
  Bell, 
  Search,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from "lucide-react"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { mockStats, mockBookings, revenueData, bookingSources } from "@/lib/mockData"

const COLORS = ['#111111', '#D4AF37', '#6b7280', '#e5e7eb'];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex h-screen bg-secondary/50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-border hidden md:flex flex-col">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <Link href="/" className="text-xl font-serif font-bold tracking-tighter text-primary">
            Nesting<span className="text-accent">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: "overview", icon: Home, label: "Overview" },
            { id: "calendar", icon: CalendarIcon, label: "Calendar" },
            { id: "bookings", icon: BarChartIcon, label: "Bookings" },
            { id: "guests", icon: Users, label: "Guests" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-border">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <Settings size={18} />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold capitalize">{activeTab}</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search bookings..." 
                className="pl-9 w-64 bg-secondary/50 border-transparent focus-visible:bg-background"
              />
            </div>
            
            <button className="relative text-muted-foreground hover:text-foreground transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background text-[10px] font-bold text-white flex items-center justify-center">
                3
              </span>
            </button>
            
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="https://i.pravatar.cc/150?u=admin" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {activeTab === "overview" && (
              <>
                {/* Stats Row */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground font-sans">Total Bookings</CardTitle>
                      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{mockStats.totalBookings}</div>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center text-green-600">
                        <ArrowUpRight className="w-3 h-3 mr-1" /> +12% from last month
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground font-sans">Monthly Revenue</CardTitle>
                      <BarChartIcon className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{mockStats.monthlyRevenue}</div>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center text-green-600">
                        <ArrowUpRight className="w-3 h-3 mr-1" /> +8% from last month
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground font-sans">Occupancy Rate</CardTitle>
                      <Home className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{mockStats.occupancyRate}</div>
                      <p className="text-xs text-muted-foreground mt-1">Target: 80%</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground font-sans">Pending Check-ins</CardTitle>
                      <Clock className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{mockStats.pendingCheckins}</div>
                      <p className="text-xs text-muted-foreground mt-1">Next 24 hours</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts Row */}
                <div className="grid lg:grid-cols-3 gap-6">
                  <Card className="col-span-2">
                    <CardHeader>
                      <CardTitle>Revenue Analytics</CardTitle>
                      <CardDescription>Monthly revenue overview for the current year.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value/1000}k`} />
                          <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                          <Bar dataKey="value" fill="#111111" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Sources</CardTitle>
                      <CardDescription>Where your bookings are coming from.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] flex flex-col items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={bookingSources}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {bookingSources.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="w-full mt-4 space-y-2">
                        {bookingSources.map((source, idx) => (
                          <div key={source.name} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }} />
                              <span className="text-muted-foreground">{source.name}</span>
                            </div>
                            <span className="font-medium">{source.value}%</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Bookings Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>Manage your latest reservations and check-ins.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-muted-foreground uppercase bg-secondary/50 border-y border-border">
                          <tr>
                            <th className="px-4 py-3 font-medium">Guest Name</th>
                            <th className="px-4 py-3 font-medium">Check-in</th>
                            <th className="px-4 py-3 font-medium">Check-out</th>
                            <th className="px-4 py-3 font-medium">Platform</th>
                            <th className="px-4 py-3 font-medium">Amount</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {mockBookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-secondary/20 transition-colors">
                              <td className="px-4 py-4 font-medium">{booking.guest}</td>
                              <td className="px-4 py-4 text-muted-foreground">{booking.checkIn}</td>
                              <td className="px-4 py-4 text-muted-foreground">{booking.checkOut}</td>
                              <td className="px-4 py-4">
                                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary border border-border">
                                  {booking.platform}
                                </span>
                              </td>
                              <td className="px-4 py-4 font-medium">{booking.amount}</td>
                              <td className="px-4 py-4">
                                <span className={`flex items-center gap-1.5 text-xs font-medium ${
                                  booking.status === 'Confirmed' ? 'text-green-600' : 'text-amber-600'
                                }`}>
                                  {booking.status === 'Confirmed' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                                  {booking.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {activeTab === "calendar" && (
              <Card>
                <CardHeader>
                  <CardTitle>Unified Calendar</CardTitle>
                  <CardDescription>View all your bookings from Airbnb, Booking.com, Agoda, and Direct across dates.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center p-8 overflow-x-auto">
                  <Calendar 
                    mode="multiple" 
                    selected={[
                      new Date(),
                      new Date(new Date().setDate(new Date().getDate() + 1)),
                      new Date(new Date().setDate(new Date().getDate() + 5)),
                      new Date(new Date().setDate(new Date().getDate() + 6)),
                    ]}
                    className="border rounded-md shadow-sm bg-background pointer-events-none" 
                  />
                </CardContent>
              </Card>
            )}

            {(activeTab === "bookings" || activeTab === "guests") && (
              <Card>
                <CardHeader>
                  <CardTitle>{activeTab === "bookings" ? "All Bookings" : "Guest Management"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">This section is currently under construction in the demo.</p>
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </main>
    </div>
  )
}
