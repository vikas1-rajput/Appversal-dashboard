import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";

import { useState } from "react";

export function TopListSection() {
  const [activeTab, setActiveTab] = useState("Campaigns");
  const data = {
    Campaigns: [
      { name: "Discovery", location: "(LOC)", spend: "$6,109.89", installs: "$44", conversion: "0.00%", country: "India" },
      { name: "Competitor", location: "(LOC)", spend: "$6,109.89", installs: "$121", conversion: "0.00%", country: "India" },
      { name: "Today lab", location: "(LOC)", spend: "$6,109.89", installs: "$44", conversion: "0.00%", country: "India" },
      { name: "Branding", location: "(LOC)", spend: "$6,109.89", installs: "$44", conversion: "0.00%", country: "India" },
    ],
    "Ad Groups": [
      { name: "Group A", location: "(LOC)", spend: "$2,000.00", installs: "$20", conversion: "1.00%", country: "India" },
      { name: "Group B", location: "(LOC)", spend: "$1,500.00", installs: "$15", conversion: "0.80%", country: "India" },
      { name: "Group C", location: "(LOC)", spend: "$1,200.00", installs: "$10", conversion: "0.50%", country: "India" },
    ],
    Keywords: [
      { name: "Keyword 1", location: "(LOC)", spend: "$500.00", installs: "$5", conversion: "0.20%", country: "India" },
      { name: "Keyword 2", location: "(LOC)", spend: "$400.00", installs: "$4", conversion: "0.15%", country: "India" },
      { name: "Keyword 3", location: "(LOC)", spend: "$300.00", installs: "$3", conversion: "0.10%", country: "India" },
    ],
    Ads: [
      { name: "Ad 1", location: "(LOC)", spend: "$100.00", installs: "$1", conversion: "0.05%", country: "India" },
      { name: "Ad 2", location: "(LOC)", spend: "$80.00", installs: "$1", conversion: "0.03%", country: "India" },
    ],
  };

  const tabList = ["Campaigns", "Ad Groups", "Keywords", "Ads"];

  return (
    <Card className="p-6 bg-white">
      <h3 className="text-lg text-black mb-4">Top List</h3>
      
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
        <Button variant="outline" size="sm" className="flex items-center space-x-1">
          <span>Installs</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
        <Button variant="outline" size="sm" className="flex items-center space-x-1">
          <span>Conver...</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {data[activeTab].map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <div className="text-sm text-black">{item.name} {item.location}</div>
                <div className="text-xs text-gray-500">{item.country}</div>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <span className="text-black">{item.spend}</span>
              <span className="text-black">{item.installs}</span>
              <span className="text-black">{item.conversion}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}