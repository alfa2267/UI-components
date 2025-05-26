import React, { useState, useEffect, useRef } from 'react';
import { User, MapPin, Calendar, Users, TrendingUp, MessageCircle, Heart, Share2, ChevronDown, Search, Bell, Menu, Play, Camera, Mic, BarChart3, Globe, Zap, Star, Award, Target, Clock, Phone, Mail, Twitter, Facebook, Instagram, Youtube, Send, Bot, Vote, Map, PieChart, Activity, Flame, Trophy, Rocket, Shield, Eye, ThumbsUp, MessageSquare, Video, Home, Plus, CheckCircle } from 'lucide-react';

export default function CandidateProfile() {
  const [activeTab, setActiveTab] = useState('home');
  const [followersCount, setFollowersCount] = useState(124500);
  const [isFollowing, setIsFollowing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(450);
  const [liveViewers, setLiveViewers] = useState(3247);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'AdamuK', message: 'Watson go win! 🇳🇬', timestamp: '2m ago' },
    { id: 2, user: 'Fatima_NG', message: 'His defense policies are solid', timestamp: '3m ago' },
    { id: 3, user: 'ChuksLagos', message: 'We need leaders like this', timestamp: '5m ago' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showQuickPoll, setShowQuickPoll] = useState(true);
  const [pollChoice, setPollChoice] = useState(null);

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 5);
      setFollowersCount(prev => prev + Math.floor(Math.random() * 20));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nigerianStates = [
    { state: 'Lagos', support: 78, population: '15.3M', zone: 'South West' },
    { state: 'Kano', support: 85, population: '13.7M', zone: 'North West' },
    { state: 'Rivers', support: 62, population: '7.3M', zone: 'South South' },
    { state: 'Kaduna', support: 71, population: '8.2M', zone: 'North West' },
    { state: 'Oyo', support: 69, population: '7.8M', zone: 'South West' },
    { state: 'Abuja', support: 74, population: '3.5M', zone: 'FCT' }
  ];

  const achievements = [
    { year: '2023', title: 'Operation Safe Corridor Success', impact: 'High', description: 'Reduced insurgency by 60%' },
    { year: '2022', title: 'Youth Corps Employment Scheme', impact: 'High', description: '2M jobs created' },
    { year: '2021', title: 'Defense Equipment Modernization', impact: 'Medium', description: '₦50B investment' },
    { year: '2020', title: 'Community Policing Initiative', impact: 'High', description: 'Crime reduced 40%' }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages(prev => [...prev, {
        id: Date.now(),
        user: 'You',
        message: newMessage,
        timestamp: 'now',
        isUser: true
      }]);
      setNewMessage('');
    }
  };

  const MobileTabButton = ({ id, label, icon: Icon, isActive, badge }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`relative flex flex-col items-center justify-center p-3 transition-all duration-200 ${
        isActive 
          ? 'text-green-600' 
          : 'text-gray-500'
      }`}
    >
      <div className="relative">
        <Icon className="w-6 h-6" />
        {badge && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
      <span className="text-xs mt-1 font-medium">{label}</span>
      {isActive && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full"></div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Vote className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">NaijaVote</div>
                <div className="text-xs text-green-600">2027 Elections</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                {timeLeft} days left
              </div>
              <button className="relative p-2 rounded-full">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pb-20">
        {activeTab === 'home' && (
          <div className="space-y-4">
            {/* Hero Card */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white m-4 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                      alt="Jorge Watson"
                      className="w-16 h-16 rounded-full border-3 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-green-800 px-1 py-0.5 rounded-full text-xs font-bold">
                      APC
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-xl font-bold">Jorge Watson</h1>
                    <div className="text-green-100 text-sm space-y-1">
                      <div className="flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        Minister of Defence
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        Kano State • Age 58
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      isFollowing 
                        ? 'bg-white/20 border border-white/30 text-white' 
                        : 'bg-white text-green-600'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-green-500/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold">{(followersCount / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-green-100">Supporters</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">67%</div>
                      <div className="text-xs text-green-100">Approval</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">24/36</div>
                      <div className="text-xs text-green-100">States</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Poll */}
            {showQuickPoll && (
              <div className="bg-white mx-4 rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <Vote className="w-4 h-4 mr-2 text-green-600" />
                    Quick Poll
                  </h3>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Live</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-3">Do you support Jorge Watson for President 2027?</p>
                
                <div className="space-y-2">
                  <button
                    onClick={() => setPollChoice('yes')}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      pollChoice === 'yes' 
                        ? 'bg-green-100 border-2 border-green-500 text-green-800' 
                        : 'bg-gray-50 border border-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Yes, I support him</span>
                      <span className="text-sm">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                      <div className="h-1 bg-green-500 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setPollChoice('no')}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      pollChoice === 'no' 
                        ? 'bg-red-100 border-2 border-red-500 text-red-800' 
                        : 'bg-gray-50 border border-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">No, I don't support</span>
                      <span className="text-sm">33%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                      <div className="h-1 bg-red-500 rounded-full" style={{ width: '33%' }}></div>
                    </div>
                  </button>
                </div>
                
                {pollChoice && (
                  <div className="mt-3 p-2 bg-green-50 rounded-lg">
                    <p className="text-green-700 text-sm">✓ Thanks for voting! 2,347 people have voted so far.</p>
                  </div>
                )}
              </div>
            )}

            {/* Live Update */}
            <div className="bg-white mx-4 rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Live Town Hall - Abuja</h3>
                  <p className="text-gray-600 text-sm">Discussing education reform with citizens</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">{liveViewers.toLocaleString()} watching</span>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">LIVE</span>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Join
                </button>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white mx-4 rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                Recent Achievements
              </h3>
              
              <div className="space-y-3">
                {achievements.slice(0, 2).map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">{achievement.title}</div>
                      <div className="text-gray-600 text-xs">{achievement.description}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">{achievement.year}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          achievement.impact === 'High' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {achievement.impact} Impact
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-3 text-green-600 text-sm font-medium py-2">
                View All Achievements
              </button>
            </div>

            {/* Campaign Progress */}
            <div className="bg-white mx-4 rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Campaign Progress</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Fundraising Goal</span>
                    <span className="text-sm font-medium">₦45.2M / ₦50M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">States Visited</span>
                    <span className="text-sm font-medium">24 / 36</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'states' && (
          <div className="p-4 space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h2 className="font-bold text-lg text-gray-900 mb-4">State Support Levels</h2>
              
              <div className="space-y-4">
                {nigerianStates.map((state, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{state.state}</h3>
                        <p className="text-xs text-gray-500">{state.zone} • {state.population}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{state.support}%</div>
                        <div className="text-xs text-gray-500">Support</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 bg-green-500 rounded-full transition-all duration-1000"
                        style={{ width: `${state.support}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'live' && (
          <div className="p-4 space-y-4">
            {/* Live Stream Card */}
            <div className="bg-black rounded-xl overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-12 h-12 mx-auto mb-2 opacity-80" />
                  <h3 className="font-semibold">Live: Town Hall Abuja</h3>
                  <p className="text-sm opacity-80">Education Policy Discussion</p>
                  <div className="flex items-center justify-center mt-2 space-x-3">
                    <span className="bg-red-500 px-2 py-1 rounded text-xs animate-pulse">🔴 LIVE</span>
                    <span className="text-xs">{liveViewers.toLocaleString()} viewers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Live Chat</h3>
              </div>
              
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex items-start space-x-2 ${msg.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`px-3 py-2 rounded-lg max-w-xs ${
                      msg.isUser 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="font-medium text-xs">{msg.user}</div>
                      <div className="text-sm">{msg.message}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <button 
                    onClick={sendMessage}
                    className="bg-green-600 text-white p-2 rounded-lg"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="p-4 space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h2 className="font-bold text-lg text-gray-900 mb-4">Latest Updates</h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Watson Announces Education Reform Plan",
                    time: "2 hours ago",
                    excerpt: "Comprehensive plan to improve education standards across all 36 states",
                    category: "Policy"
                  },
                  {
                    title: "Town Hall Success in Lagos",
                    time: "1 day ago",
                    excerpt: "Over 5,000 attendees discuss economic development strategies",
                    category: "Campaign"
                  },
                  {
                    title: "Defense Ministry Achievements Report",
                    time: "3 days ago",
                    excerpt: "Security improvements show 40% reduction in crime rates",
                    category: "Achievement"
                  }
                ].map((news, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm">{news.title}</h3>
                        <p className="text-gray-600 text-xs mt-1">{news.excerpt}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xs text-gray-500">{news.time}</span>
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">
                            {news.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="p-4 space-y-4">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-6 text-center">
              <Rocket className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h2 className="text-xl font-bold mb-2">Support Jorge Watson</h2>
              <p className="text-green-100 text-sm mb-4">
                Join the movement for a better Nigeria. Every contribution counts!
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-white text-green-600 font-semibold py-3 rounded-lg">
                  Donate Now
                </button>
                <button className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg">
                  Volunteer
                </button>
                <button className="w-full bg-green-800 text-white font-semibold py-3 rounded-lg">
                  Share Campaign
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Contact Campaign</h3>
              
              <div className="space-y-3">
                <a href="tel:+2348012345678" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">+234 801 234 5678</div>
                    <div className="text-sm text-gray-500">Campaign Hotline</div>
                  </div>
                </a>
                
                <a href="mailto:info@watsonforpresident.ng" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">info@watsonforpresident.ng</div>
                    <div className="text-sm text-gray-500">Campaign Email</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Follow on Social Media</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { platform: 'Twitter', icon: Twitter, handle: '@JorgeWatsonNG', color: 'bg-blue-500' },
                  { platform: 'Facebook', icon: Facebook, handle: 'Jorge Watson', color: 'bg-blue-600' },
                  { platform: 'Instagram', icon: Instagram, handle: '@jorgewatson_ng', color: 'bg-pink-500' },
                  { platform: 'YouTube', icon: Youtube, handle: 'Jorge Watson Official', color: 'bg-red-500' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button key={index} className={`${social.color} text-white p-3 rounded-lg flex items-center space-x-2`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{social.platform}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-pb">
        <div className="grid grid-cols-5 py-2">
          <MobileTabButton id="home" label="Home" icon={Home} isActive={activeTab === 'home'} />
          <MobileTabButton id="states" label="States" icon={Map} isActive={activeTab === 'states'} />
          <MobileTabButton id="live" label="Live" icon={Video} isActive={activeTab === 'live'} badge={liveViewers > 3000 ? '🔴' : null} />
          <MobileTabButton id="news" label="News" icon={MessageCircle} isActive={activeTab === 'news'} badge={3} />
          <MobileTabButton id="support" label="Support" icon={Heart} isActive={activeTab === 'support'} />
        </div>
      </div>
    </div>
  );
}