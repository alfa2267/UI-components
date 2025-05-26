import React from 'react';
import { Menu, Home, Search, MessageCircle, Bell, User } from 'lucide-react';

export default function InnovativeAppUI() {
  return (
    <div className="w-full max-w-sm mx-auto bg-black rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-800">
      <div className="relative h-[800px] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 overflow-hidden">
        
        {/* Organic Background Shapes - First Iteration Style */}
        <div className="absolute inset-0">
          {/* Large blue blob top left */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-60 blur-3xl"></div>
          
          {/* Orange flowing shape on right */}
          <div className="absolute top-32 -right-16 w-64 h-96 bg-gradient-to-bl from-orange-400 via-red-500 to-pink-600 opacity-80 blur-2xl transform rotate-12 rounded-full"></div>
          
          {/* Blue shapes scattered */}
          <div className="absolute top-60 left-20 w-40 h-40 bg-blue-600 opacity-50 blur-2xl rounded-full"></div>
          <div className="absolute top-96 right-8 w-32 h-32 bg-blue-500 opacity-40 blur-xl rounded-full"></div>
          
          {/* Bottom flowing shapes */}
          <div className="absolute bottom-32 -left-24 w-72 h-72 bg-gradient-to-tr from-orange-500 to-yellow-500 opacity-70 blur-3xl rounded-full"></div>
          <div className="absolute bottom-16 right-12 w-48 h-48 bg-purple-600 opacity-50 blur-2xl rounded-full"></div>
          
          {/* Additional organic shapes */}
          <div className="absolute top-20 right-32 w-24 h-40 bg-blue-400 opacity-30 blur-xl rounded-full transform -rotate-45"></div>
          <div className="absolute bottom-64 left-8 w-36 h-56 bg-indigo-500 opacity-40 blur-2xl rounded-full transform rotate-45"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col text-white">
          
          {/* Header */}
          <div className="flex justify-between items-center px-6 pt-12">
            <h1 className="text-white text-lg font-medium">Innovative App</h1>
            <div className="p-2.5 bg-blue-600 rounded-xl">
              <Menu className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Welcome Section */}
          <div className="px-6 mt-20">
            <h2 className="text-6xl font-bold mb-6 leading-tight">Welcome</h2>
            <p className="text-gray-300 text-base mb-12 leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet,<br />
              consectetur
            </p>

            {/* Action Buttons */}
            <div className="space-y-4 mb-12">
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                Get Started
              </button>
              
              <button className="w-full py-4 bg-gray-800/40 backdrop-blur-md text-white font-semibold rounded-2xl text-lg border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Featured Section */}
          <div className="px-6 flex-1">
            <h3 className="text-2xl font-bold mb-6">Featured</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-900/30 backdrop-blur-md rounded-2xl p-5 border border-gray-600/20 shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Title 1</h4>
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet</p>
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-md rounded-2xl p-5 border border-gray-600/20 shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Title 2</h4>
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="bg-gray-900/50 backdrop-blur-xl border-t border-gray-600/20 px-8 py-5 mt-6">
            <div className="flex justify-between items-center">
              <Home className="w-6 h-6 text-gray-300" />
              <Search className="w-6 h-6 text-gray-300" />
              <MessageCircle className="w-6 h-6 text-gray-300" />
              <Bell className="w-6 h-6 text-gray-300" />
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}