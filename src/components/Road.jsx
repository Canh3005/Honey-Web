import { useRef, useImperativeHandle, forwardRef } from "react";

// Path data cho đường
const CENTER_PATH = `
  M-50 180
  Q30 180, 80 220
  Q150 300, 280 300
  Q410 300, 480 220
  Q550 140, 620 60
  Q690 -20, 820 -20
  Q950 -20, 1020 60
  Q1090 140, 1160 220
  Q1230 300, 1360 300
  Q1490 300, 1560 220
  Q1630 140, 1700 60
  Q1770 -20, 1900 -20
  Q2030 -20, 2100 60
`;

// ViewBox dimensions
const VIEWBOX = { x: 0, y: -60, width: 2150, height: 400 };

const Road = forwardRef(({ className = "", roadColor = "#2d2d2d", dashColor = "white" }, ref) => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  // Expose methods để lấy vị trí trên path
  useImperativeHandle(ref, () => ({
    // Lấy tọa độ tại % của path (0-100)
    getPositionAtPercent: (percent) => {
      if (!pathRef.current) return { x: 0, y: 0 };
      const totalLength = pathRef.current.getTotalLength();
      const length = (percent / 100) * totalLength;
      const point = pathRef.current.getPointAtLength(length);
      return { x: point.x, y: point.y };
    },
    // Lấy tổng chiều dài path
    getTotalLength: () => {
      if (!pathRef.current) return 0;
      return pathRef.current.getTotalLength();
    },
    // Lấy vị trí % tương đối với parent container
    getPercentPositionAtPercent: (percent) => {
      if (!pathRef.current || !svgRef.current || percent == 0) return { x: 1, y: 50 };

      const totalLength = pathRef.current.getTotalLength();
      const length = (percent / 100) * totalLength;
      const point = pathRef.current.getPointAtLength(length);

      // Lấy kích thước thực của SVG và parent
      const svgRect = svgRef.current.getBoundingClientRect();
      const parentRect = svgRef.current.parentElement.getBoundingClientRect();

      // Tính scale và offset do preserveAspectRatio="xMidYMid meet"
      const scaleX = svgRect.width / VIEWBOX.width;
      const scaleY = svgRect.height / VIEWBOX.height;
      const scale = Math.min(scaleX, scaleY);

      // Vị trí thực của điểm trong SVG element
      const actualX = (point.x - VIEWBOX.x) * scale;
      const actualY = (point.y - VIEWBOX.y) * scale;

      // Offset do căn giữa
      const offsetX = (svgRect.width - VIEWBOX.width * scale) / 2;
      const offsetY = (svgRect.height - VIEWBOX.height * scale) / 2;

      // Vị trí trong SVG element
      const xInSvg = actualX + offsetX;
      const yInSvg = actualY + offsetY;

      // Chuyển sang % của parent container
      const xInParent = svgRect.left - parentRect.left + xInSvg;
      const yInParent = svgRect.top - parentRect.top + yInSvg;

      return {
        x: (xInParent / parentRect.width) * 100,
        y: (yInParent / parentRect.height) * 100
      };
    }
  }));

  return (
    <svg
      ref={svgRef}
      viewBox={`${VIEWBOX.x} ${VIEWBOX.y} ${VIEWBOX.width} ${VIEWBOX.height}`}
      fill="none"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Main road - black fill */}
      <path
        ref={pathRef}
        d={CENTER_PATH}
        stroke={roadColor}
        strokeWidth="80"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Center dashed line */}
      <path
        d={CENTER_PATH}
        stroke={dashColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="12 10"
        fill="none"
      />
    </svg>
  );
});

Road.displayName = "Road";

export default Road;
