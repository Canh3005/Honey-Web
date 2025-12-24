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
    <div className={`relative ${className} p-2 md:p-4 flex flex-col items-center justify-center gap-2 md:gap-4 h-screen`}>
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/ATpage/bg-chart.png')", // Thêm ảnh background nếu có
        }}
      />

      {/* Introductory Text */}
      <div className="relative z-10 max-w-4xl mx-auto px-2">
        <p className="text-center text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-[Itim] text-gray-800 p-3 md:p-4 border-4 border-gray-800 bg-white/90 rounded-2xl shadow-lg">
          Những gì Anh Thư đối diện là một phần của bức tranh chung, khi ngày càng nhiều sinh viên Việt Nam đang phải sống trong áp lực tâm lý kéo dài.
        </p>
      </div>


      <ResponsiveContainer width="100%" height="60%" minHeight={300} maxHeight={400}>
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
      
      {/* Footnote */}
      <p className="relative z-10 text-center font-['Itim'] text-black text-sm md:text-base p-2 md:p-3 italic w-[95%] md:w-[80%] mx-auto bg-white/80 rounded-lg">
        * Dữ liệu được sử dụng trong phân tích này trích từ nghiên cứu Mental Health in University Students in Vietnam: A Case Study Analysis, tiến hành trên mẫu 200 sinh viên đại học tại Việt Nam, với tỷ lệ lớn là sinh viên năm nhất và nữ giới.
      </p>
    </div>
  );
};

export default MentalHealthChart;
