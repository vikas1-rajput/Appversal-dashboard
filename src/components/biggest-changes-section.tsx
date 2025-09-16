import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

import { useState } from "react";

export function BiggestChangesSection() {
  const [activeTab, setActiveTab] = useState("Campaigns");
  const data = {
    Campaigns: [
      { name: "Discovery", location: "(LOC)", country: "India", value: "$6,109.89", change: "+2.45%", barColor: "bg-orange-500", barWidth: "80%" },
      { name: "Competitor", location: "(LOC)", country: "India", value: "$6,109.89", change: "+2.45%", barColor: "bg-orange-400", barWidth: "60%" },
      { name: "Today lab", location: "(LOC)", country: "India", value: "$6,109.89", change: "+2.45%", barColor: "bg-yellow-400", barWidth: "40%" },
      { name: "Branding", location: "(LOC)", country: "India", value: "$6,109.89", change: "+2.45%", barColor: "bg-yellow-300", barWidth: "20%" },
    ],
    "Ad Groups": [
      { name: "Group A", location: "(LOC)", country: "India", value: "$2,000.00", change: "+1.00%", barColor: "bg-orange-500", barWidth: "70%" },
      { name: "Group B", location: "(LOC)", country: "India", value: "$1,500.00", change: "+0.80%", barColor: "bg-orange-400", barWidth: "50%" },
      { name: "Group C", location: "(LOC)", country: "India", value: "$1,200.00", change: "+0.50%", barColor: "bg-yellow-400", barWidth: "30%" },
    ],
    Keywords: [
      { name: "Keyword 1", location: "(LOC)", country: "India", value: "$500.00", change: "+0.20%", barColor: "bg-orange-500", barWidth: "60%" },
      { name: "Keyword 2", location: "(LOC)", country: "India", value: "$400.00", change: "+0.15%", barColor: "bg-orange-400", barWidth: "40%" },
      { name: "Keyword 3", location: "(LOC)", country: "India", value: "$300.00", change: "+0.10%", barColor: "bg-yellow-400", barWidth: "20%" },
    ],
    Ads: [
      { name: "Ad 1", location: "(LOC)", country: "India", value: "$100.00", change: "+0.05%", barColor: "bg-orange-500", barWidth: "40%" },
      { name: "Ad 2", location: "(LOC)", country: "India", value: "$80.00", change: "+0.03%", barColor: "bg-orange-400", barWidth: "20%" },
    ],
  };
  const tabList = ["Campaigns", "Ad Groups", "Keywords", "Ads"];

  return (
    <Card className="p-6 bg-white">
      <h3 className="text-lg text-black mb-4">Biggest Changes</h3>
      
      <div className="flex items-center space-x-4 mb-4 border-b">
        {tabList.map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            className={
              activeTab === tab
                ? "text-orange-600 border-b-2 border-orange-600 rounded-none pb-3"
                : "text-gray-500 pb-3"
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
      
      <div className="flex items-center space-x-4 mb-4">
        <Button variant="outline" size="sm" className="flex items-center space-x-1">
          <span>Spend</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {data[activeTab].map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3 flex-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm text-black">{item.name} {item.location}</div>
                <div className="text-xs text-gray-500">{item.country}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 w-48">
              <div className="flex-1 bg-gray-100 rounded-full h-2 relative">
                <div 
                  className={`${item.barColor} h-2 rounded-full`}
                  style={{ width: item.barWidth }}
                ></div>
              </div>
              <div className="text-sm text-black w-20 text-right">{item.value}</div>
              <div className="text-xs text-green-600 w-12 text-right">{item.change}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}