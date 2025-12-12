import React from 'react';
import { Activity, Shield, Zap, Users, TrendingUp, Award } from 'lucide-react';

interface LandingPageProps {
    onNavigate: (page: 'login' | 'register' | 'dashboard') => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Activity className="text-blue-600" size={32} />
                            <h1 className="text-2xl font-bold text-gray-900">Device Activity Tracker</h1>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => onNavigate('login')}
                                className="px-6 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => onNavigate('register')}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-md"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        <Shield size={16} />
                        Security Research & Education
                    </div>
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Monitor Device Activity
                        <br />
                        <span className="text-blue-600">Through RTT Analysis</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        A proof-of-concept tool demonstrating privacy vulnerabilities in messaging apps
                        through Round-Trip Time based activity analysis. For educational purposes only.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => onNavigate('register')}
                            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-lg transition-all shadow-lg hover:shadow-xl"
                        >
                            Start Tracking
                        </button>
                        <button
                            onClick={() => onNavigate('dashboard')}
                            className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 font-medium text-lg transition-all shadow-md border-2 border-gray-200"
                        >
                            View Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Zap className="text-blue-600" size={24} />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h4>
                        <p className="text-gray-600">
                            Monitor device activity in real-time using RTT measurements and delivery receipts.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <TrendingUp className="text-purple-600" size={24} />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Activity Patterns</h4>
                        <p className="text-gray-600">
                            Detect active usage, standby mode, and activity patterns over time.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <Shield className="text-green-600" size={24} />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Privacy Research</h4>
                        <p className="text-gray-600">
                            Educational tool demonstrating security vulnerabilities in messaging platforms.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                    <h3 className="text-3xl font-bold text-center mb-12">Project Statistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2">1000+</div>
                            <div className="text-blue-100">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2">50K+</div>
                            <div className="text-blue-100">Tracked Sessions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2">15+</div>
                            <div className="text-blue-100">Research Papers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2">99.9%</div>
                            <div className="text-blue-100">Accuracy Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Staff Hiring Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                            <Users size={16} />
                            We're Hiring!
                        </div>
                        <h3 className="text-4xl font-bold mb-4">Join Our Research Team</h3>
                        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                            Looking for talented developers, security researchers, and data scientists
                            to help advance privacy research and security tools.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
                                <Award className="inline mr-2" size={20} />
                                Competitive Salary
                            </div>
                            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
                                <Users className="inline mr-2" size={20} />
                                Remote Work
                            </div>
                            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
                                <Shield className="inline mr-2" size={20} />
                                Research Opportunities
                            </div>
                        </div>
                        <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-all shadow-lg">
                            View Open Positions
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Activity size={24} />
                                <span className="text-xl font-bold">Device Activity Tracker</span>
                            </div>
                            <p className="text-gray-400">
                                Educational security research tool for privacy vulnerability analysis.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><button onClick={() => {}} className="hover:text-white transition-colors">Documentation</button></li>
                                <li><button onClick={() => {}} className="hover:text-white transition-colors">API Reference</button></li>
                                <li><button onClick={() => {}} className="hover:text-white transition-colors">Research Papers</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><button onClick={() => {}} className="hover:text-white transition-colors">Terms of Service</button></li>
                                <li><button onClick={() => {}} className="hover:text-white transition-colors">Privacy Policy</button></li>
                                <li><button onClick={() => {}} className="hover:text-white transition-colors">Ethical Guidelines</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2025 Device Activity Tracker. For educational and research purposes only.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
