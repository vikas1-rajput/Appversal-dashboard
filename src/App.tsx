import { DashboardSidebar } from "./components/dashboard-sidebar";
import { DashboardHeader } from "./components/dashboard-header";
import { SummaryMetrics } from "./components/summary-metrics";
import { StorefrontsSection } from "./components/storefronts-section";
import { TrendsSection } from "./components/trends-section";
import { TopListSection } from "./components/top-list-section";
import { BiggestChangesSection } from "./components/biggest-changes-section";
import { useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  // Section rendering logic
  let sectionContent = null;
  switch (activeSection) {
    case 0:
      sectionContent = (
        <>
          <SummaryMetrics />
          <div className="p-6 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <StorefrontsSection />
              <TopListSection />
            </div>
            <div className="space-y-6">
              <TrendsSection />
              <BiggestChangesSection />
            </div>
          </div>
        </>
      );
      break;
    case 1:
      sectionContent = <TrendsSection />;
      break;
    case 2:
      sectionContent = <SummaryMetrics />;
      break;
    case 3:
      sectionContent = <TopListSection />;
      break;
    case 4:
      sectionContent = <StorefrontsSection />;
      break;
    case 5:
      sectionContent = <BiggestChangesSection />;
      break;
    case 6:
      sectionContent = <div className="p-8">Help & Documentation</div>;
      break;
    case 7:
      sectionContent = <div className="p-8">About this Dashboard</div>;
      break;
    default:
      sectionContent = null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar activeIndex={activeSection} onChange={setActiveSection} />
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          {sectionContent}
        </div>
      </div>
    </div>
  );
}