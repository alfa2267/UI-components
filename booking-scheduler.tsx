import React, { useState } from 'react';
import { Check, Circle, User, CreditCard, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

export default function BookingScheduler() {
  const [selectedDate, setSelectedDate] = useState(29);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('9:00 AM - 1:00 PM');
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const steps = [
    { 
      title: 'Service Selection', 
      subtitle: 'Medium Rootless Braids', 
      status: 'completed',
      icon: Menu
    },
    { 
      title: 'Date & Time', 
      subtitle: 'July 29, 2023 - 9:00 AM', 
      status: 'active',
      icon: Circle
    },
    { 
      title: 'Your Information', 
      subtitle: '', 
      status: 'pending',
      icon: User
    },
    { 
      title: 'Payments', 
      subtitle: '', 
      status: 'pending',
      icon: CreditCard
    }
  ];

  const timeSlots = [
    '9:00 AM - 1:00 PM',
    '9:30 AM - 1:30 PM',
    '10:00 AM - 2:00 PM',
    '10:30 AM - 2:30 PM',
    '11:00 AM - 3:00 PM',
    '11:30 AM - 3:30 PM',
    '12:00 PM - 4:00 PM',
    '12:30 PM - 4:30 PM',
    '1:00 PM - 5:00 PM'
  ];

  const calendarDays = [
    { day: 17, disabled: true },
    { day: 18, disabled: true },
    { day: 19, disabled: true },
    { day: 20, disabled: true },
    { day: 21, disabled: true },
    { day: 22, disabled: true },
    { day: 23, disabled: true },
    { day: 24, disabled: true },
    { day: 25, disabled: false },
    { day: 26, disabled: false },
    { day: 27, disabled: false },
    { day: 28, disabled: false },
    { day: 29, disabled: false },
    { day: 30, disabled: false },
    { day: 31, disabled: true },
    { day: 1, disabled: true, nextMonth: true },
    { day: 2, disabled: true, nextMonth: true },
    { day: 3, disabled: true, nextMonth: true },
    { day: 4, disabled: true, nextMonth: true },
    { day: 5, disabled: true, nextMonth: true },
    { day: 6, disabled: true, nextMonth: true }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className={`${isMenuCollapsed ? 'w-16' : 'w-80'} bg-slate-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex-1">
          {!isMenuCollapsed && (
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    step.status === 'completed' 
                      ? 'bg-green-500' 
                      : step.status === 'active' 
                        ? 'bg-blue-500' 
                        : 'bg-gray-600'
                  }`}>
                    {step.status === 'completed' ? (
                      <Check className="w-4 h-4" />
                    ) : step.status === 'active' ? (
                      <Circle className="w-4 h-4 fill-current" />
                    ) : (
                      <step.icon className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium ${
                      step.status === 'active' ? 'text-white' : 'text-gray-300'
                    }`}>
                      {step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-sm text-gray-400 mt-1">{step.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-slate-700">
          <button 
            onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Menu className="w-4 h-4" />
            {!isMenuCollapsed && <span className="text-sm">Collapse menu</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Date & Time</h1>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((date, index) => (
                <button
                  key={index}
                  onClick={() => !date.disabled && setSelectedDate(date.day)}
                  disabled={date.disabled}
                  className={`w-12 h-12 rounded-lg text-sm font-medium transition-colors ${
                    date.disabled
                      ? 'text-gray-300 cursor-not-allowed'
                      : selectedDate === date.day
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                  } ${date.nextMonth ? 'text-gray-400' : ''}`}
                >
                  {date.day}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Date Display */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              July 29, 2023 - 9:00 AM
            </h2>
          </div>

          {/* Time Slots */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
                    selectedTimeSlot === slot
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end">
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}