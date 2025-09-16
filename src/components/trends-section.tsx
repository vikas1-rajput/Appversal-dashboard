
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Plus, TrendingUp, TrendingDown, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import { useEffect, useRef, useState } from "react";

export function TrendsSection() {

  const initialData = [
    { name: '3 Jun', value: 1600 },
    { name: '4 Jun', value: 2200 },
    { name: '5 Jun', value: 2800 },
    { name: '6 Jun', value: 2400 },
    { name: '7 Jun', value: 1800 },
    { name: '8 Jun', value: 2600 },
    { name: '9 Jun', value: 2200 },
  ];
  const [data, setData] = useState(initialData);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Simulate live data updates
  useEffect(() => {
    // Parse the last date from the initial data
    function parseDate(str: string) {
      const [day, month] = str.split(' ');
      return new Date(2025, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(month), parseInt(day));
    }

    intervalRef.current = setInterval(() => {
      setData((prev) => {
        const last = prev[prev.length - 1];
        const lastDate = parseDate(last.name);
        const nextDate = new Date(lastDate);
        nextDate.setDate(lastDate.getDate() + 1);
        const name = `${nextDate.getDate()} ${nextDate.toLocaleString('default', { month: 'short' })}`;
        const nextValue = Math.max(1000, last.value + Math.round((Math.random() - 0.5) * 800));
        const newData = [...prev.slice(1), { name, value: nextValue }];
        return newData;
      });
    }, 2000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Plus className="w-4 h-4" />
          </Button>
          <h3 className="text-lg text-black">Trends</h3>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span className="text-sm text-gray-600">Spend</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <TrendingUp className="w-4 h-4 text-blue-500" />
          </Button>
          <Button variant="ghost" size="sm">
            <TrendingDown className="w-4 h-4 text-gray-400" />
          </Button>
          <Button variant="ghost" size="sm">
            <BarChart3 className="w-4 h-4 text-gray-400" />
          </Button>
        </div>
      </div>
      
      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip formatter={(value: number) => `$${value}`} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#F97316" 
              strokeWidth={2}
              dot={{ r: 5, stroke: '#F97316', strokeWidth: 2, fill: '#fff' }}
              activeDot={{ r: 7 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-2">
        <div className="w-3 h-3 bg-orange-500 rounded"></div>
        <span className="text-sm text-gray-600">India</span>
      </div>
    </Card>
  );
}