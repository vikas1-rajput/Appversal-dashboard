import { Card } from "./ui/card";

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive?: boolean;
}

function MetricCard({ label, value, change, isPositive = true }: MetricCardProps) {
  return (
    <Card className="p-4 bg-white border border-gray-200">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-xl text-black mb-1">{value}</div>
      <div className={`text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </div>
    </Card>
  );
}

export function SummaryMetrics() {
  const metrics = [
    { label: "Conversions ROAS:", value: "0.00%", change: "+2.45%" },
    { label: "Conversions ROAS:", value: "$6,109.89", change: "+3.56%" },
    { label: "Conversions ROAS:", value: "0.00%", change: "+1.23%" },
    { label: "Conversions ROAS:", value: "$2,101", change: "+5.67%" },
    { label: "Conversions ROAS:", value: "$2.91", change: "+2.34%" },
    { label: "Conversions ROAS:", value: "0", change: "+0%" },
    { label: "Conversions ROAS:", value: "$0.00", change: "+0%" },
  ];

  return (
    <div className="bg-gray-50 p-6">
      <h2 className="text-lg text-black mb-4">Total Summary</h2>
      <div className="grid grid-cols-7 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            label={metric.label}
            value={metric.value}
            change={metric.change}
          />
        ))}
      </div>
    </div>
  );
}