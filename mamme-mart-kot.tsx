import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  DollarSign, 
  Bell, 
  Settings, 
  Filter,
  ChefHat,
  Timer,
  AlertCircle,
  CheckCircle,
  Truck,
  Coffee,
  Package,
  Star,
  MoreVertical,
  Play,
  Pause
} from 'lucide-react';

export default function MammeMartKOT() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [draggedOrder, setDraggedOrder] = useState(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const [orders, setOrders] = useState([
    {
      id: 'ORD-001',
      customerName: 'Sarah Johnson',
      phone: '+1 234-567-8900',
      orderType: 'delivery',
      items: [
        { name: 'Chicken Burger', quantity: 2, notes: 'No onions' },
        { name: 'French Fries', quantity: 1, notes: 'Extra crispy' },
        { name: 'Coca Cola', quantity: 2, notes: '' }
      ],
      total: 28.50,
      orderTime: new Date(Date.now() - 300000), // 5 mins ago
      estimatedTime: 15,
      status: 'confirmed',
      priority: 'normal',
      address: '123 Main St, Apt 4B'
    },
    {
      id: 'ORD-002',
      customerName: 'Mike Chen',
      phone: '+1 234-567-8901',
      orderType: 'pickup',
      items: [
        { name: 'Margherita Pizza', quantity: 1, notes: 'Extra cheese' },
        { name: 'Caesar Salad', quantity: 1, notes: 'Dressing on side' }
      ],
      total: 22.00,
      orderTime: new Date(Date.now() - 180000), // 3 mins ago
      estimatedTime: 12,
      status: 'prep',
      priority: 'high'
    },
    {
      id: 'ORD-003',
      customerName: 'Emily Davis',
      phone: '+1 234-567-8902',
      orderType: 'dine-in',
      items: [
        { name: 'Grilled Salmon', quantity: 1, notes: 'Medium rare' },
        { name: 'Steamed Vegetables', quantity: 1, notes: '' },
        { name: 'White Wine', quantity: 1, notes: '' }
      ],
      total: 35.75,
      orderTime: new Date(Date.now() - 120000), // 2 mins ago
      estimatedTime: 8,
      status: 'delivery',
      priority: 'normal'
    },
    {
      id: 'ORD-004',
      customerName: 'John Smith',
      phone: '+1 234-567-8903',
      orderType: 'delivery',
      items: [
        { name: 'BBQ Ribs', quantity: 1, notes: 'Extra sauce' },
        { name: 'Coleslaw', quantity: 1, notes: '' }
      ],
      total: 24.99,
      orderTime: new Date(Date.now() - 1200000), // 20 mins ago
      estimatedTime: 5,
      status: 'pending',
      priority: 'urgent'
    }
  ]);

  const getStatusColumn = (status) => {
    switch (status) {
      case 'confirmed': return 'confirmed';
      case 'prep': return 'prep';
      case 'delivery': return 'delivery';
      case 'pending': return 'pending';
      default: return 'confirmed';
    }
  };

  const getOrdersByStatus = (status) => {
    return orders.filter(order => order.status === status);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'normal': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getOrderTypeIcon = (type) => {
    switch (type) {
      case 'delivery': return <Truck className="w-4 h-4" />;
      case 'pickup': return <Package className="w-4 h-4" />;
      case 'dine-in': return <Coffee className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const getTimeElapsed = (orderTime) => {
    const diff = Math.floor((new Date() - orderTime) / 60000);
    return diff;
  };

  const handleDragStart = (e, order) => {
    setDraggedOrder(order);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedOrder) {
      setOrders(orders.map(order => 
        order.id === draggedOrder.id 
          ? { ...order, status: newStatus }
          : order
      ));
      setDraggedOrder(null);
    }
  };

  const OrderCard = ({ order }) => (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, order)}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4 hover:shadow-md transition-all duration-200 cursor-move group"
    >
      {/* Order Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900">{order.id}</span>
          <div className={`w-2 h-2 rounded-full ${getPriorityColor(order.priority)}`}></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            {getOrderTypeIcon(order.orderType)}
            <span className="capitalize">{order.orderType}</span>
          </div>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Customer Info */}
      <div className="mb-3">
        <div className="font-semibold text-gray-900 mb-1">{order.customerName}</div>
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <Phone className="w-3 h-3" />
          {order.phone}
        </div>
        {order.address && (
          <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
            <MapPin className="w-3 h-3" />
            {order.address}
          </div>
        )}
      </div>

      {/* Items */}
      <div className="mb-3">
        {order.items.map((item, index) => (
          <div key={index} className="text-sm mb-1">
            <span className="font-medium">{item.quantity}x {item.name}</span>
            {item.notes && (
              <div className="text-xs text-orange-600 ml-2">Note: {item.notes}</div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            {getTimeElapsed(order.orderTime)}m ago
          </div>
          <div className="flex items-center gap-1 text-xs text-blue-600">
            <Timer className="w-3 h-3" />
            {order.estimatedTime}m est
          </div>
        </div>
        <div className="flex items-center gap-1 font-bold text-green-600">
          <DollarSign className="w-4 h-4" />
          {order.total.toFixed(2)}
        </div>
      </div>
    </div>
  );

  const StatusColumn = ({ title, status, bgColor, textColor, icon: Icon }) => (
    <div 
      className={`flex-1 ${bgColor} rounded-2xl p-6 min-h-[600px]`}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, status)}
    >
      <div className={`flex items-center gap-3 mb-6 ${textColor}`}>
        <Icon className="w-6 h-6" />
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm font-medium">
          {getOrdersByStatus(status).length}
        </span>
      </div>
      
      <div className="space-y-4">
        {getOrdersByStatus(status).map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
        
        {getOrdersByStatus(status).length === 0 && (
          <div className={`text-center py-8 ${textColor} opacity-60`}>
            <Icon className="w-12 h-12 mx-auto mb-2 opacity-40" />
            <p className="text-sm">No orders in {title.toLowerCase()}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Mamme Mart</h1>
                <p className="text-sm text-gray-500">Kitchen Order System</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders, customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            {/* Time & Server Info */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="font-bold text-gray-900">
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-sm text-gray-500">
                  {currentTime.toLocaleDateString()}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Server</div>
                <div className="font-semibold text-gray-900 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Jane
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Filter:</span>
            </div>
            {['all', 'delivery', 'pickup', 'dine-in'].map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-4 gap-6">
          <StatusColumn
            title="New Orders"
            status="confirmed"
            bgColor="bg-gradient-to-b from-slate-800 to-slate-900"
            textColor="text-white"
            icon={CheckCircle}
          />
          
          <StatusColumn
            title="In Preparation"
            status="prep"
            bgColor="bg-gradient-to-b from-blue-500 to-blue-600"
            textColor="text-white"
            icon={ChefHat}
          />
          
          <StatusColumn
            title="Ready to Serve"
            status="delivery"
            bgColor="bg-gradient-to-b from-green-500 to-green-600"
            textColor="text-white"
            icon={Truck}
          />
          
          <StatusColumn
            title="Needs Attention"
            status="pending"
            bgColor="bg-gradient-to-b from-orange-500 to-orange-600"
            textColor="text-white"
            icon={AlertCircle}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Powered by <span className="font-bold text-orange-600">Mamme Mart</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}