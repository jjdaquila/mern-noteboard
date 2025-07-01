import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Clock } from 'lucide-react';

const barData = [
  { name: 'M', value: 50 },
  { name: 'T', value: 20 },
  { name: 'W', value: 8 },
  { name: 'T', value: 22 },
  { name: 'F', value: 50 },
  { name: 'S', value: 10 },
  { name: 'S', value: 40 },
];

const lineData1 = [
  { name: 'Apr', value: 100 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 250 },
  { name: 'Jul', value: 300 },
  { name: 'Aug', value: 500 },
  { name: 'Sep', value: 350 },
  { name: 'Oct', value: 450 },
  { name: 'Nov', value: 300 },
  { name: 'Dec', value: 550 },
];

const lineData2 = [
  { name: 'Apr', value: 50 },
  { name: 'May', value: 30 },
  { name: 'Jun', value: 300 },
  { name: 'Jul', value: 250 },
  { name: 'Aug', value: 500 },
  { name: 'Sep', value: 300 },
  { name: 'Oct', value: 400 },
  { name: 'Nov', value: 280 },
  { name: 'Dec', value: 550 },
];

const MenuCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">

      <div className="rounded border border-stone-700 bg-stone-800 p-4 shadow-sm">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <h4 className="mt-4 font-semibold text-white">Website View</h4>
        <p className="text-sm text-gray-400">Last Campaign Performance</p>
        <div className="mt-2 flex items-center text-sm text-gray-400">
          <Clock className="w-4 h-4 mr-1" />
          campaign sent 2 days ago
        </div>
      </div>


      <div className="rounded border border-stone-700 bg-stone-800 p-4 shadow-sm">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData1}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line dataKey="value" stroke="#3b82f6" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <h4 className="mt-4 font-semibold text-white">Daily Sales</h4>
        <p className="text-sm text-gray-400">15% increase in today sales</p>
        <div className="mt-2 flex items-center text-sm text-gray-400">
          <Clock className="w-4 h-4 mr-1" />
          updated 4 min ago
        </div>
      </div>


      <div className="rounded border border-stone-700 bg-stone-800 p-4 shadow-sm">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line dataKey="value" stroke="#22c55e" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <h4 className="mt-4 font-semibold text-white">Completed Tasks</h4>
        <p className="text-sm text-gray-400">Last Campaign Performance</p>
        <div className="mt-2 flex items-center text-sm text-gray-400">
          <Clock className="w-4 h-4 mr-1" />
          just updated
        </div>
      </div>
    </div>
  );
};

export default MenuCharts;
