"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall, Calendar, Clock, Star } from "lucide-react";
import { CallDataTable } from "./call-data-table";
import { BarChartComponent } from "./bar-chart";

interface DashboardProps {
  stats: {
    totalCalls: number;
    appointmentsBooked: number;
    averageCallDuration: number;
    averageRating: number;
    weeklyCallVolume: { date: string; calls: number }[];
    recentCalls: any[];
  };
}

function KpiCard({ title, value, icon: Icon, trend }: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${trend > 0 ? "text-green-500" : "text-red-500"}`}>
          {trend > 0 ? "+" : ""}{trend}% from last month
        </p>
      </CardContent>
    </Card>
  );
}

export default function Dashboard({ stats }: DashboardProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Real Estate Call Analytics</h1>
            <p className="text-muted-foreground">Track and analyze your real estate call performance</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard 
            title="Total Calls" 
            value={stats.totalCalls} 
            icon={PhoneCall} 
            trend={5.2} 
          />
          <KpiCard 
            title="Appointments Booked" 
            value={stats.appointmentsBooked} 
            icon={Calendar} 
            trend={2.1} 
          />
          <KpiCard 
            title="Avg Call Duration (min)" 
            value={stats.averageCallDuration.toFixed(1)} 
            icon={Clock} 
            trend={-0.5} 
          />
          <KpiCard 
            title="Average Rating" 
            value={stats.averageRating.toFixed(1)} 
            icon={Star} 
            trend={0.2} 
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Call Volume</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <BarChartComponent data={stats.weeklyCallVolume} />
            </CardContent>
          </Card>

          <CallDataTable data={stats.recentCalls} />
        </div>
      </div>
    </div>
  );
}