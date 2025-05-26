import React, { useState, useRef } from 'react';
import { 
  ShoppingCart, 
  Upload, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  User, 
  Home,
  Truck,
  Package,
  Heart,
  Star,
  Camera,
  Plus,
  Minus,
  Check,
  Gift,
  Calendar,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  X,
  Palette,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  FileText,
  CreditCard,
  Zap
} from 'lucide-react';

export default function CakeConfigurator() {
  const [currentView, setCurrentView] = useState(0);
  const [isDelivery, setIsDelivery] = useState(true);
  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);
  
  const [configuration, setConfiguration] = useState({
    selectedCake: null,
    basePrice: 45000, // in Naira
    flavors: [],
    icingType: null,
    icingFlavor: null,
    fillingType: null,
    fillingFlavor: null,
    toppings: [],
    shape: null,
    size: null,
    colorScheme: null,
    customColors: [],
    message: '',
    specialRequests: ''
  });

  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: 'Nigeria'
    },
    deliveryDate: '',
    deliverySlot: null,
    paymentMethod: '',
    acceptTerms: false
  });

  // Configuration Options
  const cakeOptions = [
    {
      id: 1,
      name: 'The Classic',
      description: 'Traditional vanilla sponge with buttercream',
      basePrice: 35000,
      popular: false,
      image: '🎂'
    },
    {
      id: 2,
      name: 'Chocolate Delight',
      description: 'Rich chocolate layers with ganache',
      basePrice: 42000,
      popular: true,
      image: '🍫'
    },
    {
      id: 3,
      name: 'Strawberry Dreams',
      description: 'Fresh strawberry sponge with cream',
      basePrice: 45000,
      popular: false,
      image: '🍓'
    },
    {
      id: 4,
      name: 'Rainbow Fantasy',
      description: 'Multi-colored layers with buttercream',
      basePrice: 55000,
      popular: true,
      image: '🌈'
    }
  ];

  const flavorOptions = [
    { id: 'vanilla', name: 'Vanilla Bean', price: 0 },
    { id: 'chocolate', name: 'Rich Chocolate', price: 3000 },
    { id: 'strawberry', name: 'Fresh Strawberry', price: 4000 },
    { id: 'lemon', name: 'Zesty Lemon', price: 3500 },
    { id: 'caramel', name: 'Salted Caramel', price: 5000 },
    { id: 'red-velvet', name: 'Red Velvet', price: 4500 },
    { id: 'coconut', name: 'Tropical Coconut', price: 4000 },
    { id: 'coffee', name: 'Espresso Mocha', price: 5000 }
  ];

  const icingTypes = [
    { id: 'buttercream', name: 'Buttercream', price: 0 },
    { id: 'fondant', name: 'Fondant', price: 12000 },
    { id: 'cream-cheese', name: 'Cream Cheese', price: 8000 },
    { id: 'royal', name: 'Royal Icing', price: 10000 },
    { id: 'ganache', name: 'Chocolate Ganache', price: 9000 }
  ];

  const shapeOptions = [
    { id: 'round', name: 'Round', price: 0 },
    { id: 'square', name: 'Square', price: 5000 },
    { id: 'heart', name: 'Heart', price: 12000 },
    { id: 'number', name: 'Number Shape', price: 18000 },
    { id: 'letter', name: 'Letter Shape', price: 18000 },
    { id: 'custom', name: 'Custom Shape', price: 25000 }
  ];

  const sizeOptions = [
    { id: 'small', name: 'Small (6" - 8 servings)', price: 0, servings: 8 },
    { id: 'medium', name: 'Medium (8" - 16 servings)', price: 15000, servings: 16 },
    { id: 'large', name: 'Large (10" - 24 servings)', price: 28000, servings: 24 },
    { id: 'xl', name: 'Extra Large (12" - 36 servings)', price: 45000, servings: 36 },
    { id: 'tiered', name: 'Two Tier (50+ servings)', price: 75000, servings: 54 }
  ];

  const predefinedColors = [
    { id: 'pink-gold', name: 'Pink & Gold', colors: ['#FFB6C1', '#FFD700'] },
    { id: 'blue-silver', name: 'Blue & Silver', colors: ['#87CEEB', '#C0C0C0'] },
    { id: 'rainbow', name: 'Rainbow', colors: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'] },
    { id: 'pastel', name: 'Pastel Mix', colors: ['#FFB3E6', '#E6B3FF', '#B3E6FF', '#B3FFB3'] },
    { id: 'elegant', name: 'Black & White', colors: ['#000000', '#FFFFFF'] },
    { id: 'sunset', name: 'Sunset', colors: ['#FF6B35', '#F7931E', '#FFD23F'] }
  ];

  const deliverySlots = [
    { id: 'morning', name: '9:00 AM - 12:00 PM', price: 0, available: true },
    { id: 'afternoon', name: '12:00 PM - 4:00 PM', price: 0, available: true },
    { id: 'evening', name: '4:00 PM - 7:00 PM', price: 2000, available: true },
    { id: 'express', name: 'Express (Within 2 hours)', price: 8000, available: false },
    { id: 'next-day', name: 'Next Day Delivery', price: 3000, available: true }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Debit/Credit Card', icon: '💳' },
    { id: 'transfer', name: 'Bank Transfer', icon: '🏦' },
    { id: 'ussd', name: 'USSD', icon: '📱' },
    { id: 'wallet', name: 'Digital Wallet', icon: '💰' }
  ];

  const calculateTotalPrice = () => {
    let total = configuration.basePrice;
    
    configuration.flavors.forEach(flavorId => {
      const flavor = flavorOptions.find(f => f.id === flavorId);
      if (flavor) total += flavor.price;
    });

    if (configuration.icingType) {
      const icing = icingTypes.find(i => i.id === configuration.icingType);
      if (icing) total += icing.price;
    }

    if (configuration.shape) {
      const shape = shapeOptions.find(s => s.id === configuration.shape);
      if (shape) total += shape.price;
    }

    if (configuration.size) {
      const size = sizeOptions.find(s => s.id === configuration.size);
      if (size) total += size.price;
    }

    if (customerData.deliverySlot) {
      const slot = deliverySlots.find(s => s.id === customerData.deliverySlot);
      if (slot) total += slot.price;
    }

    return total;
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages(prev => [...prev, {
          id: Date.now() + Math.random(),
          file,
          url: e.target.result,
          name: file.name
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (imageId) => {
    setUploadedImages(prev => prev.filter(img => img.id !== imageId));
  };

  const views = [
    {
      id: 'base',
      title: 'Choose Your Base',
      subtitle: 'Select the foundation of your dream cake'
    },
    {
      id: 'flavors',
      title: 'Flavors & Fillings',
      subtitle: 'Customize the taste profile'
    },
    {
      id: 'shape-size',
      title: 'Shape & Size',
      subtitle: 'Define the structure'
    },
    {
      id: 'colors',
      title: 'Colors & Design',
      subtitle: 'Make it beautiful'
    },
    {
      id: 'inspiration',
      title: 'Your Inspiration',
      subtitle: 'Upload images and special requests'
    },
    {
      id: 'customer',
      title: 'Your Details',
      subtitle: 'Tell us about yourself'
    },
    {
      id: 'delivery',
      title: 'Delivery & Payment',
      subtitle: 'When and how you want it'
    }
  ];

  const ColorPicker = () => {
    const [showCustomPicker, setShowCustomPicker] = useState(false);
    const [customColor, setCustomColor] = useState('#FF69B4');

    const addCustomColor = () => {
      if (!configuration.customColors.includes(customColor)) {
        setConfiguration(prev => ({
          ...prev,
          customColors: [...prev.customColors, customColor]
        }));
      }
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Predefined Color Schemes</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {predefinedColors.map(scheme => (
              <button
                key={scheme.id}
                onClick={() => setConfiguration(prev => ({ ...prev, colorScheme: scheme.id }))}
                className={`p-4 rounded-xl border-2 transition-all ${
                  configuration.colorScheme === scheme.id 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex justify-center mb-2">
                  {scheme.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border border-white"
                      style={{ backgroundColor: color, marginLeft: index > 0 ? '-4px' : '0' }}
                    />
                  ))}
                </div>
                <div className="text-sm font-medium">{scheme.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Custom Colors</h3>
          <div className="flex items-center gap-3 mb-4">
            <input
              type="color"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="w-12 h-12 rounded-lg border border-gray-300"
            />
            <button
              onClick={addCustomColor}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Add Color
            </button>
          </div>
          
          {configuration.customColors.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {configuration.customColors.map((color, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2"
                >
                  <div
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                  <button
                    onClick={() => {
                      setConfiguration(prev => ({
                        ...prev,
                        customColors: prev.customColors.filter((_, i) => i !== index)
                      }));
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderCurrentView = () => {
    switch (views[currentView].id) {
      case 'base':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cakeOptions.map(cake => (
              <div
                key={cake.id}
                onClick={() => {
                  setConfiguration(prev => ({
                    ...prev,
                    selectedCake: cake.id,
                    basePrice: cake.basePrice
                  }));
                }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  configuration.selectedCake === cake.id ? 'ring-4 ring-purple-500 scale-105' : 'hover:scale-102'
                }`}
              >
                {cake.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    <Star className="w-4 h-4 inline mr-1" />
                    Popular
                  </div>
                )}
                
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <span className="text-6xl">{cake.image}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{cake.name}</h3>
                  <p className="text-gray-600 mb-4">{cake.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">₦{cake.basePrice.toLocaleString()}</span>
                    {configuration.selectedCake === cake.id && (
                      <div className="bg-purple-500 text-white p-2 rounded-full">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'flavors':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Select up to 3 flavors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {flavorOptions.map(flavor => (
                  <button
                    key={flavor.id}
                    onClick={() => {
                      const newFlavors = configuration.flavors.includes(flavor.id)
                        ? configuration.flavors.filter(id => id !== flavor.id)
                        : configuration.flavors.length < 3
                          ? [...configuration.flavors, flavor.id]
                          : configuration.flavors;
                      
                      setConfiguration(prev => ({ ...prev, flavors: newFlavors }));
                    }}
                    disabled={!configuration.flavors.includes(flavor.id) && configuration.flavors.length >= 3}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      configuration.flavors.includes(flavor.id)
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    } ${!configuration.flavors.includes(flavor.id) && configuration.flavors.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="font-medium">{flavor.name}</div>
                    {flavor.price > 0 && (
                      <div className="text-sm text-purple-600">+₦{flavor.price.toLocaleString()}</div>
                    )}
                    {configuration.flavors.includes(flavor.id) && (
                      <Check className="w-5 h-5 text-purple-600 mt-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Icing Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {icingTypes.map(icing => (
                  <button
                    key={icing.id}
                    onClick={() => setConfiguration(prev => ({ ...prev, icingType: icing.id }))}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      configuration.icingType === icing.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="font-medium">{icing.name}</div>
                    {icing.price > 0 && (
                      <div className="text-sm text-purple-600">+₦{icing.price.toLocaleString()}</div>
                    )}
                    {configuration.icingType === icing.id && (
                      <Check className="w-5 h-5 text-purple-600 mt-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'shape-size':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shape</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {shapeOptions.map(shape => (
                  <button
                    key={shape.id}
                    onClick={() => setConfiguration(prev => ({ ...prev, shape: shape.id }))}
                    className={`p-6 rounded-xl border-2 transition-all text-center ${
                      configuration.shape === shape.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="font-medium mb-2">{shape.name}</div>
                    {shape.price > 0 && (
                      <div className="text-sm text-purple-600">+₦{shape.price.toLocaleString()}</div>
                    )}
                    {configuration.shape === shape.id && (
                      <Check className="w-5 h-5 text-purple-600 mx-auto mt-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Size</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sizeOptions.map(size => (
                  <button
                    key={size.id}
                    onClick={() => setConfiguration(prev => ({ ...prev, size: size.id }))}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      configuration.size === size.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="font-medium mb-1">{size.name}</div>
                    <div className="text-sm text-gray-600 mb-2">Serves {size.servings} people</div>
                    {size.price > 0 && (
                      <div className="text-sm text-purple-600">+₦{size.price.toLocaleString()}</div>
                    )}
                    {configuration.size === size.id && (
                      <Check className="w-5 h-5 text-purple-600 mt-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'colors':
        return <ColorPicker />;

      case 'inspiration':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Upload Inspiration Images</h3>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center cursor-pointer hover:border-purple-500 transition-colors"
              >
                <Camera className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 mb-2">Click to upload inspiration images</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {uploadedImages.map(image => (
                    <div key={image.id} className="relative">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeImage(image.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-xl font-semibold mb-4">Custom Message</label>
              <input
                type="text"
                value={configuration.message}
                onChange={(e) => setConfiguration(prev => ({ ...prev, message: e.target.value }))}
                placeholder="e.g., Happy Birthday Sarah!, Congratulations..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold mb-4">Special Requests</label>
              <textarea
                value={configuration.specialRequests}
                onChange={(e) => setConfiguration(prev => ({ ...prev, specialRequests: e.target.value }))}
                placeholder="Any special dietary requirements, allergies, or specific instructions..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                rows="4"
              />
            </div>
          </div>
        );

      case 'customer':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={customerData.firstName}
                  onChange={(e) => setCustomerData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={customerData.lastName}
                  onChange={(e) => setCustomerData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={customerData.email}
                onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                value={customerData.phone}
                onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="080xxxxxxxx"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Address</h3>
              <input
                type="text"
                placeholder="Street Address"
                value={customerData.address.street}
                onChange={(e) => setCustomerData(prev => ({ 
                  ...prev, 
                  address: { ...prev.address, street: e.target.value }
                }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  value={customerData.address.city}
                  onChange={(e) => setCustomerData(prev => ({ 
                    ...prev, 
                    address: { ...prev.address, city: e.target.value }
                  }))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
                <input
                  type="text"
                  placeholder="State"
                  value={customerData.address.state}
                  onChange={(e) => setCustomerData(prev => ({ 
                    ...prev, 
                    address: { ...prev.address, state: e.target.value }
                  }))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
          </div>
        );

      case 'delivery':
        return (
          <div className="space-y-8">
            {/* Delivery/Pickup Toggle */}
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setIsDelivery(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  isDelivery 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Truck className="w-4 h-4" />
                Delivery
              </button>
              <button
                onClick={() => setIsDelivery(false)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  !isDelivery 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Package className="w-4 h-4" />
                Pickup
              </button>
            </div>

            {/* Delivery Date */}
            <div>
              <label className="block text-lg font-semibold mb-4">
                {isDelivery ? 'Delivery' : 'Pickup'} Date
              </label>
              <input
                type="date"
                value={customerData.deliveryDate}
                onChange={(e) => setCustomerData(prev => ({ ...prev, deliveryDate: e.target.value }))}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Time Slots */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Available Time Slots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliverySlots.map(slot => (
                  <button
                    key={slot.id}
                    onClick={() => setCustomerData(prev => ({ ...prev, deliverySlot: slot.id }))}
                    disabled={!slot.available}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      customerData.deliverySlot === slot.id
                        ? 'border-purple-500 bg-purple-50'
                        : slot.available 
                          ? 'border-gray-200 hover:border-purple-300'
                          : 'border-gray-200 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="font-medium">{slot.name}</div>
                    {slot.price > 0 && (
                      <div className="text-sm text-purple-600">+₦{slot.price.toLocaleString()}</div>
                    )}
                    {!slot.available && (
                      <div className="text-sm text-red-500">Not available</div>
                    )}
                    {customerData.deliverySlot === slot.id && (
                      <Check className="w-5 h-5 text-purple-600 mt-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {paymentMethods.map(method => (
                  <button
                    key={method.id}
                    onClick={() => setCustomerData(prev => ({ ...prev, paymentMethod: method.id }))}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      customerData.paymentMethod === method.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{method.icon}</div>
                    <div className="text-sm font-medium">{method.name}</div>
                    {customerData.paymentMethod === method.id && (
                      <Check className="w-5 h-5 text-purple-600 mx-auto mt-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customerData.acceptTerms}
                  onChange={(e) => setCustomerData(prev => ({ ...prev, acceptTerms: e.target.checked }))}
                  className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-sm text-gray-600">
                  I accept the <span className="text-purple-600 hover:underline">terms and conditions</span> and <span className="text-purple-600 hover:underline">privacy policy</span>
                </span>
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sweet Dreams Bakery
              </h1>
              <div className="text-sm text-gray-600">
                Step {currentView + 1} of {views.length}: {views[currentView].title}
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">
                  ₦{calculateTotalPrice().toLocaleString()}
                </div>
                <p className="text-sm text-gray-500">Total Price</p>
              </div>
              
              {/* Progress Bar */}
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentView + 1) / views.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* View Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{views[currentView].title}</h2>
          <p className="text-xl text-gray-600">{views[currentView].subtitle}</p>
        </div>

        {/* Current View */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {renderCurrentView()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentView(Math.max(0, currentView - 1))}
            disabled={currentView === 0}
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          {currentView === views.length - 1 ? (
            <button
              disabled={!customerData.acceptTerms}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              Place Order - ₦{calculateTotalPrice().toLocaleString()}
            </button>
          ) : (
            <button
              onClick={() => setCurrentView(Math.min(views.length - 1, currentView + 1))}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}