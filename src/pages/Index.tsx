
import React, { useState } from 'react';
import { Calendar, Inbox, Settings, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Timeline from '@/components/Timeline';
import Hangouts from '@/components/Hangouts';
import Messages from '@/components/Messages';
import Profile from '@/components/Profile';
import SettingsPage from '@/components/SettingsPage';

const Index = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">IS</span>
          </div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to auth if not logged in
  if (!user) {
    navigate('/auth');
    return null;
  }

  const tabs = [
    { id: 'timeline', label: '🏠 Timeline', icon: null },
    { id: 'hangouts', label: '📅 Hangouts', icon: Calendar },
    { id: 'messages', label: '💬 Inbox', icon: Inbox },
    { id: 'profile', label: '👤 Profile', icon: User },
    { id: 'settings', label: '⚙️ Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'timeline':
        return <Timeline />;
      case 'hangouts':
        return <Hangouts />;
      case 'messages':
        return <Messages />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Timeline />;
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light text-gray-900">Inner Space</h1>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleSignOut}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Sign out"
              >
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">IS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-16 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
