'use client';

import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { TabId } from '../types/AITransformationTypes';
import DashboardContent from './DashboardContent';

const DashboardUI = () => {
  const [activeTab, setActiveTab] = useState<TabId>('clients');

  return (
    <div className="bg-gray-900/80 rounded-lg border border-white/10 overflow-hidden">
      {/* Top Bar */}
      <div className="bg-gray-800 p-3 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-white/70 text-sm">AI Powered Custom System</div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
            <FaBell className="text-white/70 text-xs" />
          </div>
          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <span className="text-green-400 text-xs font-bold">JD</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex">
        {/* Main Dashboard Area */}
        <div className="flex-1 p-4">
          {/* Tabs */}
          <div className="flex border-b border-white/10 mb-4">
            {['clients', 'projects', 'employees'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabId)}
                className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab 
                    ? 'text-green-400 border-b-2 border-green-400' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="h-[300px]">
            <DashboardContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUI; 