export default function PieChart() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      {/* SVG do Pie Chart */}
      <svg
        viewBox="0 0 200 200"
        className="w-48 h-48"
      >
        <g transform="rotate(-90 100 100)">
          {/* Em andamento – 30% */}
          <circle
            cx="100"
            cy="100"
            r="80"
            pathLength="100"
            className="fill-none stroke-blue-900 stroke-8"
            style={{
              strokeDasharray: '30 70',
              strokeDashoffset: '0',
            }}
          />
          {/* A iniciar – 15% */}
          <circle
            cx="100"
            cy="100"
            r="80"
            pathLength="100"
            className="fill-none stroke-orange-500 stroke-8"
            style={{
              strokeDasharray: '15 85',
              strokeDashoffset: '-30',
            }}
          />
          {/* Finalizados – 20% */}
          <circle
            cx="100"
            cy="100"
            r="80"
            pathLength="100"
            className="fill-none stroke-pink-400 stroke-8"
            style={{
              strokeDasharray: '20 80',
              strokeDashoffset: '-45',
            }}
          />
          {/* Páginas lidas – 35% */}
          <circle
            cx="100"
            cy="100"
            r="80"
            pathLength="100"
            className="fill-none stroke-green-400 stroke-8"
            style={{
              strokeDasharray: '35 65',
              strokeDashoffset: '-65',
            }}
          />
        </g>
      </svg>

      {/* Legenda */}
      <ul className="mt-6 md:mt-0 md:ml-8 space-y-3 text-gray-700">
        <li className="flex items-center">
          <span className="w-4 h-4 bg-blue-900 rounded-sm mr-2"></span>
          <span>30% Em andamento</span>
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-orange-500 rounded-sm mr-2"></span>
          <span>15% A iniciar</span>
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-pink-400 rounded-sm mr-2"></span>
          <span>20% Finalizados</span>
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-green-400 rounded-sm mr-2"></span>
          <span>35% Páginas lidas</span>
        </li>
      </ul>
    </div>
  );
}
