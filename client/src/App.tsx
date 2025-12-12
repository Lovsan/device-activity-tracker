import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ReportsPage } from './pages/ReportsPage';

export const socket: Socket = io('http://localhost:3001');

type Page = 'landing' | 'login' | 'register' | 'dashboard' | 'tracker' | 'reports';

function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [isWhatsAppReady, setIsWhatsAppReady] = useState(false);
    const [currentPage, setCurrentPage] = useState<Page>('landing');

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
            setIsWhatsAppReady(false);
        }

        function onConnectionOpen() {
            setIsWhatsAppReady(true);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('connection-open', onConnectionOpen);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('connection-open', onConnectionOpen);
        };
    }, []);

    const handleLogin = () => {
        setCurrentPage('tracker');
    };

    const handleRegister = () => {
        setCurrentPage('tracker');
    };

    const handleNavigate = (page: Page) => {
        setCurrentPage(page);
    };

    // Render landing/auth pages
    if (currentPage === 'landing') {
        return <LandingPage onNavigate={handleNavigate} />;
    }

    if (currentPage === 'login') {
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
    }

    if (currentPage === 'register') {
        return <RegisterPage onNavigate={handleNavigate} onRegister={handleRegister} />;
    }

    if (currentPage === 'reports') {
        return <ReportsPage onNavigate={handleNavigate} />;
    }

    // Render tracker dashboard (original functionality)
    if (currentPage === 'tracker' || currentPage === 'dashboard') {
        return (
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="max-w-6xl mx-auto">
                    <header className="mb-8 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-900">WhatsApp Tracker</h1>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => handleNavigate('reports')}
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors"
                            >
                                View Reports
                            </button>
                            <button
                                onClick={() => setCurrentPage('landing')}
                                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                            >
                                Logout
                            </button>
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
                                <span className="text-sm text-gray-600">{isConnected ? 'Server Connected' : 'Disconnected'}</span>
                                {isConnected && (
                                    <>
                                        <div className="w-px h-4 bg-gray-300 mx-2" />
                                        <div className={`w-3 h-3 rounded-full ${isWhatsAppReady ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                        <span className="text-sm text-gray-600">{isWhatsAppReady ? 'WhatsApp Ready' : 'Waiting for WhatsApp'}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </header>

                    <main>
                        {!isWhatsAppReady ? (
                            <Login />
                        ) : (
                            <Dashboard />
                        )}
                    </main>
                </div>
            </div>
        );
    }

    return null;
}

export default App;
