import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Snowflake, Archive, Settings, ChevronDown, ChevronUp, Edit } from 'lucide-react';

export default function UserTimelineDashboard() {
  const [activeTab, setActiveTab] = useState('Timeline');
  const [selectedMonth, setSelectedMonth] = useState('Aug');
  const [selectedDate, setSelectedDate] = useState(23);
  const [year, setYear] = useState(2020);
  const [timeElapsed, setTimeElapsed] = useState('00:12:32');
  const [workflowExpanded, setWorkflowExpanded] = useState(true);
  const [activeView, setActiveView] = useState('Calendar');

  const tabs = ['Information', 'Timeline', 'Notes', 'Integrations', 'Budget'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const services = ['Service 1', 'Service 2', 'Service 3', 'Service 4'];
  
  const workflows = [
    'Main workflow for Programmers',
    'Main workflow for Designer', 
    'Main workflow for Customer'
  ];

  const timelineEntries = [
    {
      time: '09:23',
      type: 'Daily task',
      subject: 'Design and build app',
      avatar: 'TN'
    },
    {
      time: '10:20',
      type: 'Main task',
      subject: 'Conduct user research',
      avatar: null
    },
    {
      time: '11:35',
      type: 'Second task',
      subject: 'Identify and fix bugs',
      avatar: null
    }
  ];

  const getDaysInMonth = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">John Smith</h1>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Time Tracking */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Time tracking</span>
              <span className="font-mono text-lg font-medium">{timeElapsed}</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* Status */}
            <div className="text-sm text-gray-600">Status</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Calendar/Timeline Toggle */}
          <div className="flex items-center gap-6 mb-6">
            <button
              onClick={() => setActiveView('Calendar')}
              className={`pb-2 border-b-2 transition-colors ${
                activeView === 'Calendar'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-600'
              }`}
            >
              Calendar
            </button>
            <button
              onClick={() => setActiveView('Timeline')}
              className={`pb-2 border-b-2 transition-colors ${
                activeView === 'Timeline'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-600'
              }`}
            >
              Timeline
            </button>
            <div className="ml-auto">
              <button className="text-teal-600 text-sm hover:text-teal-700">
                Read All
              </button>
            </div>
          </div>

          {/* Year Navigator */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setYear(year - 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-medium text-lg">{year}</span>
            <button
              onClick={() => setYear(year + 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Month Grid */}
          <div className="grid grid-cols-12 gap-2 mb-6">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                  selectedMonth === month
                    ? 'bg-teal-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Date Grid */}
          <div className="grid grid-cols-7 gap-2 mb-8">
            {getDaysInMonth().map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`w-10 h-10 rounded-lg text-sm transition-colors ${
                  selectedDate === day
                    ? 'bg-teal-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-1">Monday</h2>
            <span className="text-sm text-gray-500 mb-6 block">23th</span>

            <div className="space-y-6">
              {timelineEntries.map((entry, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-teal-600">{entry.time}</span>
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    {index < timelineEntries.length - 1 && (
                      <div className="w-px h-12 bg-gray-200 mt-2"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Type</div>
                        <div className="font-medium text-gray-900 mb-2">{entry.type}</div>
                        <div className="text-xs text-gray-500 mb-1">Subject</div>
                        <div className="text-gray-700">{entry.subject}</div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {entry.avatar && (
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                            {entry.avatar}
                          </div>
                        )}
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 p-6">
          {/* Status Buttons */}
          <div className="mb-8">
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <Play className="w-4 h-4" />
                <span className="text-sm">Active</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Snowflake className="w-4 h-4" />
                <span className="text-sm">Frozen</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Archive className="w-4 h-4" />
                <span className="text-sm">Archive</span>
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">Services</h3>
              <Settings className="w-4 h-4 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, index) => (
                <button
                  key={service}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    index === 0
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">Workflow</h3>
              <button
                onClick={() => setWorkflowExpanded(!workflowExpanded)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {workflowExpanded ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            
            {workflowExpanded && (
              <div className="space-y-3 mb-4">
                {workflows.map((workflow, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 text-sm text-gray-700"
                  >
                    <span>{workflow}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            )}
            
            <button className="text-teal-600 text-sm hover:text-teal-700">
              View workflow
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors">
        <Edit className="w-6 h-6" />
      </button>
    </div>
  );
}