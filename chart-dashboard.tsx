import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ChartDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Sample data for the chart
  const chartData = [
    { day: 1, value: 45 },
    { day: 2, value: 78 },
    { day: 3, value: 92 },
    { day: 4, value: 65 },
    { day: 5, value: 58 },
    { day: 6, value: 83 },
    { day: 7, value: 71 },
    { day: 8, value: 89 }
  ];

  const maxValue = 100;
  const growthPercentage = "+16.9%";

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {selectedMonth}
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10 min-w-[120px]">
                {months.map((month) => (
                  <button
                    key={month}
                    onClick={() => {
                      setSelectedMonth(month);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      selectedMonth === month ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
            {growthPercentage}
          </div>
        </div>

        {/* Chart */}
        <div className="relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400 pr-4">
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>

          {/* Chart area */}
          <div className="ml-8 relative h-48">
            {/* Grid lines */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 right-0 h-px bg-gray-100"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100"></div>
              <div className="absolute bottom-8 left-0 right-0 h-px bg-gray-100"></div>
            </div>

            {/* Chart bars */}
            <div className="relative h-40 flex items-end justify-between">
              {chartData.map((item, index) => (
                <div key={item.day} className="flex flex-col items-center flex-1">
                  <div className="relative w-6 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-full transition-all duration-500 ease-out"
                      style={{ height: `${(item.value / maxValue) * 160}px` }}
                    ></div>
                    {/* Peak indicator */}
                    <div 
                      className="absolute w-2 h-2 bg-blue-600 rounded-full left-1/2 transform -translate-x-1/2"
                      style={{ top: `${160 - (item.value / maxValue) * 160 - 4}px` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between mt-4 text-xs text-gray-400">
              {chartData.map((item) => (
                <span key={item.day} className="flex-1 text-center">
                  {item.day}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex gap-2">
            <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
}