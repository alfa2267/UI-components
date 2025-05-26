import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Calendar, 
  Car, 
  BarChart3, 
  MapPin, 
  Clock, 
  Settings, 
  Crown, 
  ChevronDown,
  Play,
  User,
  HelpCircle,
  MessageCircle,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

export default function DrivingSchoolDashboard() {
  const [activeTab, setActiveTab] = useState('Week');
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Users, label: 'Students', active: false },
    { icon: UserCheck, label: 'Instructors', active: false },
    { icon: Calendar, label: 'Lessons', active: false },
    { icon: Car, label: 'Vehicles', active: false },
    { icon: MapPin, label: 'Test Routes', active: false },
    { icon: Clock, label: 'Schedules', active: false },
    { icon: BarChart3, label: 'Reports', active: false },
  ];

  const onboardingSteps = [
    {
      title: 'Complete school profile',
      subtitle: 'Configure in Account Settings',
      completed: true,
      duration: '2 minutes'
    },
    {
      title: 'Add instructors',
      subtitle: 'Takes about 3 minutes',
      completed: false,
      duration: '3 minutes'
    },
    {
      title: 'Register vehicles',
      subtitle: 'Takes about 4 minutes',
      completed: false,
      duration: '4 minutes',
      highlighted: true
    },
    {
      title: 'Create lesson schedules',
      subtitle: 'Takes about 5 minutes',
      completed: false,
      duration: '5 minutes'
    },
    {
      title: 'Set up test routes',
      subtitle: 'Takes about 3 minutes',
      completed: false,
      duration: '3 minutes'
    },
    {
      title: 'Add first students',
      subtitle: 'Takes about 4 minutes',
      completed: false,
      duration: '4 minutes'
    },
    {
      title: 'Book a demo with an expert',
      subtitle: 'Takes about 5 minutes',
      completed: false,
      duration: '5 minutes'
    }
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const lessonHours = [450, 380, 420, 360, 390, 280, 180];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DriveLearn</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                item.active 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Trial info */}
        <div className="absolute bottom-0 left-0 right-0 w-64 p-4 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-900">14 days left in trial</span>
          </div>
          <p className="text-xs text-gray-600 mb-3">Try other plans for free</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <div>
              <div className="font-medium text-gray-900">Elite Driving Academy</div>
              <div className="text-xs">Downtown</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            
            <div className="flex items-center gap-4">
              {/* Onboarding Progress */}
              <div className="flex items-center gap-3 bg-slate-700 text-white px-4 py-2 rounded-lg">
                <span className="text-sm">Onboarding</span>
                <div className="flex-1 bg-slate-600 rounded-full h-2 w-24">
                  <div className="bg-orange-500 h-2 rounded-full w-3"></div>
                </div>
                <span className="text-sm">1 of 7</span>
                <button 
                  onClick={() => setIsOnboardingOpen(!isOnboardingOpen)}
                  className="p-1 hover:bg-slate-600 rounded"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Play className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <HelpCircle className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Main Dashboard Content */}
          <div className="flex-1 p-6">
            {/* Time Period Tabs */}
            <div className="flex gap-6 mb-6">
              {['Day', 'Week', 'Month'].map((period) => (
                <button
                  key={period}
                  onClick={() => setActiveTab(period)}
                  className={`pb-2 border-b-2 transition-colors ${
                    activeTab === period
                      ? 'border-orange-500 text-orange-600 font-medium'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex gap-4 mb-8">
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All locations</option>
                <option>Downtown Center</option>
                <option>North Branch</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All instructors</option>
                <option>Available instructors</option>
                <option>Busy instructors</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All lessons</option>
                <option>Theory lessons</option>
                <option>Practical lessons</option>
              </select>
            </div>

            {/* Welcome Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Hello Elite Driving Academy</h2>
                    <p className="text-gray-600 mb-4">Here's what's happening at your driving school</p>
                  </div>
                  <div className="w-32 h-24">
                    <svg viewBox="0 0 120 80" className="w-full h-full">
                      <circle cx="60" cy="40" r="30" fill="#f97316" opacity="0.1"/>
                      <rect x="45" y="35" width="30" height="15" rx="2" fill="#f97316"/>
                      <circle cx="50" cy="50" r="4" fill="#374151"/>
                      <circle cx="70" cy="50" r="4" fill="#374151"/>
                      <path d="M45 35 L50 25 L70 25 L75 35" fill="#f97316" opacity="0.7"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">UPCOMING TESTS AND LESSONS</h3>
                    <button className="text-orange-600 text-sm hover:text-orange-700">
                      Go to lessons →
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-gray-500">
                  No upcoming tests
                </div>
              </div>
            </div>

            {/* Lesson Hours Chart */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">LESSON HOURS</h3>
                  <button className="text-orange-600 text-sm hover:text-orange-700">
                    Go to lessons →
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">TOTAL HOURS</div>
                  <div className="text-2xl font-bold text-gray-900">287h</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">THEORY LESSONS</div>
                  <div className="text-2xl font-bold text-gray-900">45h</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">PRACTICAL LESSONS</div>
                  <div className="text-2xl font-bold text-gray-900">242h</div>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-64">
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 pr-4">
                  <span>500h</span>
                  <span>400h</span>
                  <span>300h</span>
                  <span>200h</span>
                  <span>100h</span>
                </div>
                <div className="ml-12 h-full flex items-end justify-between gap-2">
                  {weekDays.map((day, index) => (
                    <div key={day} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gray-400 rounded-t"
                        style={{ height: `${(lessonHours[index] / 500) * 100}%` }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-2">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Onboarding Sidebar */}
          {isOnboardingOpen && (
            <div className="w-96 bg-slate-700 text-white p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Welcome to your dashboard</h2>
                <p className="text-slate-300 text-sm">
                  To help you get the best of DriveLearn, here is an onboarding checklist customized for you.
                </p>
              </div>

              <div className="space-y-3">
                {onboardingSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      step.highlighted ? 'bg-orange-500' : 'hover:bg-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-green-500' : 'bg-slate-600'
                      }`}>
                        {step.completed && <CheckCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{step.title}</div>
                        <div className="text-xs text-slate-300">{step.subtitle}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className={`px-3 py-1 text-xs rounded ${
                        step.highlighted ? 'bg-white text-orange-500' : 'bg-slate-600 text-white'
                      }`}>
                        Start
                      </button>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-600">
                <button className="text-orange-400 text-sm">I'm done with onboarding</button>
                <button className="text-orange-400 text-sm">Need help?</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}