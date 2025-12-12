import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, Users, Target, Activity, Star } from 'lucide-react';

interface ReportsPageProps {
    onNavigate: (page: 'landing' | 'dashboard') => void;
}

export function ReportsPage({ onNavigate }: ReportsPageProps) {
    // Sample data for visualizations
    const monthlyData = [
        { month: 'Jan', sessions: 4000, users: 2400 },
        { month: 'Feb', sessions: 3000, users: 1398 },
        { month: 'Mar', sessions: 2000, users: 9800 },
        { month: 'Apr', sessions: 2780, users: 3908 },
        { month: 'May', sessions: 1890, users: 4800 },
        { month: 'Jun', sessions: 2390, users: 3800 },
        { month: 'Jul', sessions: 3490, users: 4300 },
    ];

    const projectData = [
        { name: 'WhatsApp Tracker', value: 45 },
        { name: 'Signal Monitor', value: 30 },
        { name: 'Telegram Analyzer', value: 15 },
        { name: 'Research Papers', value: 10 },
    ];

    const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'];

    const achievements = [
        { title: 'Research Excellence Award', year: 2024, category: 'Security Research' },
        { title: 'Best Paper Award', year: 2024, category: 'Privacy Analysis' },
        { title: 'Innovation Prize', year: 2023, category: 'Technology' },
        { title: 'Community Choice Award', year: 2023, category: 'Open Source' },
    ];

    const projects = [
        {
            name: 'Device Activity Tracker',
            status: 'Active',
            completion: 95,
            users: 1250,
            tech: ['TypeScript', 'React', 'Node.js']
        },
        {
            name: 'Privacy Vulnerability Scanner',
            status: 'Active',
            completion: 78,
            users: 850,
            tech: ['Python', 'Django', 'PostgreSQL']
        },
        {
            name: 'Messaging Protocol Analyzer',
            status: 'In Progress',
            completion: 45,
            users: 320,
            tech: ['Go', 'React', 'MongoDB']
        },
        {
            name: 'RTT Measurement Suite',
            status: 'Completed',
            completion: 100,
            users: 2100,
            tech: ['Node.js', 'Express', 'Redis']
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Activity className="text-blue-600" size={32} />
                            <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => onNavigate('landing')}
                                className="px-6 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => onNavigate('dashboard')}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-md"
                            >
                                Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Total Projects</h3>
                            <Target className="text-blue-500" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-gray-900">24</div>
                        <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Active Users</h3>
                            <Users className="text-purple-500" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-gray-900">4,520</div>
                        <p className="text-sm text-green-600 mt-1">↑ 28% from last month</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Awards Won</h3>
                            <Award className="text-pink-500" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-gray-900">12</div>
                        <p className="text-sm text-gray-600 mt-1">Since 2023</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-gray-600">Success Rate</h3>
                            <TrendingUp className="text-orange-500" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-gray-900">96.8%</div>
                        <p className="text-sm text-green-600 mt-1">↑ 2.1% from last month</p>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Monthly Activity Chart */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Monthly Activity</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend />
                                <Bar dataKey="sessions" fill="#3b82f6" name="Sessions" />
                                <Bar dataKey="users" fill="#8b5cf6" name="Users" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Project Distribution */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Distribution</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={projectData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {projectData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Projects Summary */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Active Projects</h3>
                    <div className="space-y-4">
                        {projects.map((project, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            project.status === 'Active' ? 'bg-green-100 text-green-700' :
                                            project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-blue-100 text-blue-700'
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users size={16} />
                                        <span className="text-sm font-medium">{project.users.toLocaleString()} users</span>
                                    </div>
                                </div>
                                
                                <div className="mb-3">
                                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                                        <span>Completion</span>
                                        <span className="font-medium">{project.completion}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                                            style={{ width: `${project.completion}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    {project.tech.map((tech, techIdx) => (
                                        <span key={techIdx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Awards & Achievements */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="text-yellow-600" size={32} />
                        <h3 className="text-2xl font-semibold text-gray-900">Awards & Achievements</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievements.map((achievement, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Star className="text-yellow-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                                        <p className="text-sm text-gray-600 mb-2">{achievement.category}</p>
                                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                            {achievement.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
