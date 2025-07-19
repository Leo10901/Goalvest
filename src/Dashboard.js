import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Building2,
  Eye,
  Plus,
  Search,
  Filter,
  Star,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Invested',
      value: '$12,450',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign
    },
    {
      title: 'Portfolio Value',
      value: '$18,230',
      change: '+8.2%',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      title: 'Active Investments',
      value: '8',
      change: '+2',
      changeType: 'positive',
      icon: Building2
    },
    {
      title: 'Total Returns',
      value: '+45.8%',
      change: '+5.3%',
      changeType: 'positive',
      icon: TrendingUp
    }
  ];

  const recentInvestments = [
    {
      id: 1,
      company: 'TechFlow AI',
      amount: '$2,500',
      date: '2024-01-15',
      status: 'Active',
      return: '+23.5%',
      category: 'Technology'
    },
    {
      id: 2,
      company: 'GreenEnergy Solutions',
      amount: '$1,800',
      date: '2024-01-10',
      status: 'Active',
      return: '+18.2%',
      category: 'Energy'
    },
    {
      id: 3,
      company: 'HealthTech Pro',
      amount: '$3,200',
      date: '2024-01-05',
      status: 'Active',
      return: '+31.7%',
      category: 'Healthcare'
    }
  ];

  const featuredStartups = [
    {
      id: 1,
      name: 'EcoSmart',
      category: 'Sustainability',
      fundingGoal: '$500,000',
      raised: '$375,000',
      progress: 75,
      daysLeft: 12,
      investors: 247,
      rating: 4.8
    },
    {
      id: 2,
      name: 'FinTechFlow',
      category: 'Finance',
      fundingGoal: '$750,000',
      raised: '$520,000',
      progress: 69,
      daysLeft: 8,
      investors: 189,
      rating: 4.6
    },
    {
      id: 3,
      name: 'EduTech Plus',
      category: 'Education',
      fundingGoal: '$300,000',
      raised: '$180,000',
      progress: 60,
      daysLeft: 15,
      investors: 156,
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, John
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your investments
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8"
        >
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['overview', 'investments', 'startups', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Investments */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Investments</h3>
                    <button className="text-primary-600 hover:text-primary-500 text-sm font-medium">
                      View all
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentInvestments.map((investment) => (
                      <div key={investment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-purple-100 rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{investment.company}</p>
                            <p className="text-sm text-gray-600">{investment.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{investment.amount}</p>
                          <p className="text-sm text-green-600">{investment.return}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Startups */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Featured Startups</h3>
                    <button className="text-primary-600 hover:text-primary-500 text-sm font-medium">
                      Browse all
                    </button>
                  </div>
                  <div className="space-y-4">
                    {featuredStartups.map((startup) => (
                      <div key={startup.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-medium text-gray-900">{startup.name}</h4>
                            <p className="text-sm text-gray-600">{startup.category}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{startup.rating}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{startup.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full"
                              style={{ width: `${startup.progress}%` }}
                            ></div>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{startup.raised} raised</span>
                            <span className="text-gray-600">{startup.daysLeft} days left</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Users className="w-4 h-4" />
                            <span>{startup.investors} investors</span>
                          </div>
                          <button className="btn-primary text-sm px-4 py-2">
                            Invest Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Investments Tab */}
            {activeTab === 'investments' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">My Investments</h3>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search investments..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      <span>Filter</span>
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Company</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Return</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentInvestments.map((investment) => (
                        <tr key={investment.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-primary-100 to-purple-100 rounded-lg flex items-center justify-center">
                                <Building2 className="w-4 h-4 text-primary-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{investment.company}</p>
                                <p className="text-sm text-gray-600">{investment.category}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-medium text-gray-900">{investment.amount}</td>
                          <td className="py-4 px-4 text-gray-600">{investment.date}</td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {investment.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-green-600 font-medium">{investment.return}</td>
                          <td className="py-4 px-4">
                            <button className="text-primary-600 hover:text-primary-500">
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Startups Tab */}
            {activeTab === 'startups' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Available Startups</h3>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Startup</span>
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredStartups.map((startup) => (
                    <div key={startup.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{startup.name}</h4>
                          <p className="text-sm text-gray-600">{startup.category}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{startup.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Goal</span>
                          <span className="font-medium">{startup.fundingGoal}</span>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{startup.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full"
                              style={{ width: `${startup.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Raised</span>
                          <span className="font-medium">{startup.raised}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Days Left</span>
                          <span className="font-medium">{startup.daysLeft}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{startup.investors}</span>
                        </div>
                        <button className="btn-primary text-sm px-4 py-2">
                          Invest Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Analytics</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Portfolio Performance</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Return</span>
                        <span className="font-semibold text-green-600">+45.8%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Annualized Return</span>
                        <span className="font-semibold text-green-600">+23.4%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Best Performer</span>
                        <span className="font-semibold text-gray-900">TechFlow AI</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Investment Distribution</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Technology</span>
                        <span className="font-semibold">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Healthcare</span>
                        <span className="font-semibold">30%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Energy</span>
                        <span className="font-semibold">25%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 