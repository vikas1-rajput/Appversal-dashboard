
import { Home, BarChart3, Settings, Users, ShoppingCart, Target, HelpCircle, Info } from "lucide-react";
import React from "react";
import { Tooltip } from "./ui/tooltip";


interface DashboardSidebarProps {
  activeIndex: number;
  onChange: (index: number) => void;
}

export function DashboardSidebar({ activeIndex, onChange }: DashboardSidebarProps) {
  const navItems = [
    { icon: Home, label: "Home" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Settings, label: "Settings" },
    { icon: Users, label: "Users" },
    { icon: ShoppingCart, label: "Store" },
    { icon: Target, label: "Goals" },
    { icon: HelpCircle, label: "Help" },
    { icon: Info, label: "Info" },
  ];

  return (
    <div className="w-16 bg-gradient-to-b from-orange-500 to-red-500 h-full flex flex-col items-center py-4 space-y-4">
      {navItems.map((item, index) => (
        <Tooltip key={item.label} content={item.label} side="right">
          <button
            onClick={() => onChange(index)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors focus:outline-none ${
              activeIndex === index
                ? 'bg-white/20 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        </Tooltip>
      ))}
    </div>
  );
}