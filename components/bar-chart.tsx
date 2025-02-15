"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { Card, CardContent, CardFooter, CardTitle } from "@components/ui/card";

const chartConfig = {
    calls: {
        label: "Calls",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

interface BarChartProps {
    data: { date: string; calls: number }[];
}

export function BarChartComponent({ data }: BarChartProps) {
    return (
        <Card>
            <CardContent className="pt-6">
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="date" tickLine={false} tickMargin={10} axisLine={false} interval={2} />
                    <Bar dataKey="calls" fill="var(--color-calls)" radius={4}>
                        <LabelList position="top" offset={12} className="fill-foreground" fontSize={10} />
                    </Bar>
                </BarChart>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing daily call volume for the last 30 days
                </div>
            </CardFooter>
        </Card>
    );
}
