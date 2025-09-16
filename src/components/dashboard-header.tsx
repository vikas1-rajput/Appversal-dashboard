import { Calendar, ChevronDown, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function DashboardHeader() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-black mb-1">Overview dashboard</h1>
          <p className="text-sm text-gray-500">A consolidated view of your app efficiency by storefronts and key metrics.</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-sm"></span>
            <Select defaultValue="pdf-name">
              <SelectTrigger className="w-32 border-none bg-transparent">
                <SelectValue placeholder="PDF Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf-name">PDF Name</SelectItem>
                <SelectItem value="other-pdf">Other PDF</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Jul 5 - Jul 11, 2025</span>
          </div>
          
          <Button variant="ghost" size="sm">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}