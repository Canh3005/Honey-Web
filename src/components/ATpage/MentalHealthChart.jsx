import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MentalHealthChart = ({ className = "" }) => {
  const data = [
    {
      name: "Không có",
      stress: 47,
      anxiety: 18,
      depression: 43,
    },
    {
      name: "Trung bình",
      stress: 45,
      anxiety: 46,
      depression: 45,
    },
    {
      name: "Nặng",
      stress: 36,
      anxiety: 8,
      depression: 37,
    },
  ];

  return (
    <div className={`relative ${className} p-4 flex items-center justify-center`}>
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/ATpage/bg-chart.png')", // Thêm ảnh background nếu có
        }}
      />

      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#374151", fontSize: 14, fontFamily: "Itim" }}
            stroke="#9ca3af"
          />
          <YAxis
            domain={[0, 50]}
            tick={{ fill: "#374151", fontSize: 14, fontFamily: "Itim" }}
            stroke="#9ca3af"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontFamily: "Itim",
            }}
          />
          <Legend
            wrapperStyle={{
              fontFamily: "Itim",
              fontSize: "16px",
            }}
          />
          <Line
            type="monotone"
            dataKey="stress"
            stroke="#10b981"
            strokeWidth={3}
            name="Mức độ Stress"
            dot={{ fill: "#10b981", r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="anxiety"
            stroke="#f97316"
            strokeWidth={3}
            name="Mức độ Lo âu"
            dot={{ fill: "#f97316", r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="depression"
            stroke="#3b82f6"
            strokeWidth={3}
            name="Mức độ Trầm cảm"
            dot={{ fill: "#3b82f6", r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MentalHealthChart;
