
import React, { useState } from 'react';
import { MapPin, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/contexts/AuthContext';
import EditProfile from './EditProfile';

const Profile = () => {
  const { profile, loading } = useProfile();
  const { user } = useAuth();
  const [showEditProfile, setShowEditProfile] = useState(false);

  const badges = [
    { id: 1, emoji: '🌟', name: 'First Post', description: 'Welcome to Inner Space!' },
    { id: 2, emoji: '📚', name: 'Book Lover', description: 'Shared 5 book recommendations' },
    { id: 3, emoji: '☕', name: 'Coffee Buddy', description: 'Organized 3 coffee meetups' },
    { id: 4, emoji: '🎯', name: 'Goal Setter', description: 'Achieved your monthly goal' },
  ];

  const stats = [
    { label: 'Posts', value: '24' },
    { label: 'Hangouts', value: '8' },
    { label: 'Messages', value: '156' },
    { label: 'Badges', value: '4' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full animate-pulse mb-4"></div>
          <p className="text-gray-500">Loading profile...</p>
        </div>
      </div>
    );
  }

  const joinDate = profile?.created_at 
    ? new Date(profile.created_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      })
    : 'Recently';

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-8">
          <div className="flex items-center space-x-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-3xl">{profile?.avatar_emoji || '✨'}</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-light text-gray-900 mb-2">
                {profile?.username || user?.email?.split('@')[0] || 'User'}
              </h1>
              <p className="text-gray-600 mb-4">
                {profile?.bio || 'Welcome to Inner Space! ✨'}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {joinDate}</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => setShowEditProfile(true)}
            >
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-light text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Badges Section */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-light text-gray-900">Badges</h2>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Star className="w-4 h-4" />
              <span>4 earned</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl">{badge.emoji}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">
                    {badge.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-xl font-light text-gray-900 mb-6">Recent Activity</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span>💭</span>
              </div>
              <span className="text-gray-600">Joined Inner Space</span>
              <span className="text-gray-400">Recently</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <EditProfile onClose={() => setShowEditProfile(false)} />
      )}
    </div>
  );
};

export default Profile;
