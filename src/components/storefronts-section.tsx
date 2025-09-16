import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { TrendingUp, TrendingDown, BarChart3, Plus } from "lucide-react";

export function StorefrontsSection() {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg text-black">Storefronts</h3>
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
      
      <div className="mb-4">
        <span className="text-sm text-gray-600">Grand</span>
      </div>
      
      {/* World Map Representation */}
      <div className="relative h-64 bg-orange-50 rounded-lg overflow-hidden mb-4 flex flex-col items-center justify-center">
        {/* World map image, no absolute positioning, no overlap */}
        <img 
          src="/img.png" 
          alt="World Map" 
          className="max-h-48 w-auto object-contain mx-auto my-4" 
          style={{ filter: 'brightness(0.95)' }}
        />
        {/* Legend below the image, not overlapping */}
        <div className="mt-2 flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Plus className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-600 rounded"></div>
            <div className="w-20 h-2 bg-gradient-to-r from-orange-200 to-orange-600 rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        $105
      </div>
    </Card>
  );
}