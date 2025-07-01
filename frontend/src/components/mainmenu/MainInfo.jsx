import { Users, Wallet, ShoppingCart, BarChart3, Clock } from 'lucide-react';

const MainInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full mt-5">
      
      <div className="flex-1 bg-stone-800 border border-stone-700 rounded p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Dashboard Summary</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-4 p-4 bg-stone-900 rounded">
            <Wallet className="text-white w-6 h-6" />
            <div>
              <p className="text-gray-400 text-sm">Today's Money</p>
              <p className="text-white text-lg font-bold">$53k</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-stone-900 rounded">
            <Users className="text-white w-6 h-6" />
            <div>
              <p className="text-gray-400 text-sm">Users</p>
              <p className="text-white text-lg font-bold">2,300</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-stone-900 rounded">
            <ShoppingCart className="text-white w-6 h-6" />
            <div>
              <p className="text-gray-400 text-sm">Orders</p>
              <p className="text-white text-lg font-bold">1,032</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-white mb-2">Performance Overview</h3>
          <p className="text-stone-400 text-sm">
            This dashboard provides a quick summary of key performance indicators including revenue, user growth, and sales insights over time. Graphs and tables below offer a deeper look into each metric.
          </p>
        </div>

        <div className="mt-4 h-40 bg-stone-700 rounded flex items-center justify-center text-gray-400 text-sm">
          [Charts / Graphs Placeholder]
        </div>
      </div>

      <div className="w-full lg:w-1/3 bg-stone-800 border border-stone-700 rounded p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Orders Overview</h2>

        <ul className="space-y-3 text-sm text-gray-300">
          <li className="flex justify-between items-center">
            <span>New Order #1123</span>
            <Clock className="w-4 h-4 text-gray-400" />
          </li>
          <li className="flex justify-between items-center">
            <span>Order #1105 Shipped</span>
            <Clock className="w-4 h-4 text-gray-400" />
          </li>
          <li className="flex justify-between items-center">
            <span>Order #1099 Delivered</span>
            <Clock className="w-4 h-4 text-gray-400" />
          </li>
          <li className="flex justify-between items-center">
            <span>Order #1087 Canceled</span>
            <Clock className="w-4 h-4 text-gray-400" />
          </li>
        </ul>

        <div className="mt-4 text-gray-500 text-xs">
          Updated 3 mins ago
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
