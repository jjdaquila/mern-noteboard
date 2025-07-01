import React from 'react'
import {
  Wallet,
  Users,
  UserPlus,
  BarChart2,
} from 'lucide-react';

function MenuCards() {
 return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      
      <div className="flex flex-col justify-between p-4 rounded border border-stone-700 bg-stone-800 hover:bg-stone-700 min-h-[150px]">
        <div className="flex items-center gap-4">
          <div className="bg-gray-900 p-3 rounded">
            <Wallet className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Today's Money</p>
            <h4 className="text-2xl font-bold text-white">$53k</h4>
          </div>
        </div>
        <p className="text-green-500 text-sm mt-3">+55% than last week</p>
      </div>

      <div className="flex flex-col justify-between p-4 rounded border border-stone-700 bg-stone-800 hover:bg-stone-700 min-h-[150px]">
        <div className="flex items-center gap-4">
          <div className="bg-gray-900 p-3 rounded">
            <Users className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Today's Users</p>
            <h4 className="text-2xl font-bold text-white">2,300</h4>
          </div>
        </div>
        <p className="text-green-500 text-sm mt-3">+3% than last month</p>
      </div>

      <div className="flex flex-col justify-between p-4 rounded border border-stone-700 bg-stone-800 hover:bg-stone-700 min-h-[150px]">
        <div className="flex items-center gap-4">
          <div className="bg-gray-900 p-3 rounded">
            <UserPlus className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-400">New Clients</p>
            <h4 className="text-2xl font-bold text-white">3,462</h4>
          </div>
        </div>
        <p className="text-red-500 text-sm mt-3">-2% than yesterday</p>
      </div>

      <div className="flex flex-col justify-between p-4 rounded border border-stone-700 bg-stone-800 hover:bg-stone-700 min-h-[150px]">
        <div className="flex items-center gap-4">
          <div className="bg-gray-900 p-3 rounded">
            <BarChart2 className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Sales</p>
            <h4 className="text-2xl font-bold text-white">$103,430</h4>
          </div>
        </div>
        <p className="text-green-500 text-sm mt-3">+5% than yesterday</p>
      </div>
    </div>
  )
}

export default MenuCards
