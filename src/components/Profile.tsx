
import React from 'react';
import { Edit, MapPin, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Profile = () => {
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

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-8">
          <div className="flex items-center space-x-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">✨</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                <Edit className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-light text-gray-900 mb-2">Alex Chen</h1>
              <p className="text-gray-600 mb-4">
                Living life one coffee at a time ☕ | Book enthusiast 📚 | Always up for an adventure
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined March 2024</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <Button variant="outline" className="rounded-full">
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
              <span className="text-gray-600">Shared a thought about small circles</span>
              <span className="text-gray-400">2h ago</span>
            </div>
            
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span>☕</span>
              </div>
              <span className="text-gray-600">Organized coffee meetup</span>
              <span className="text-gray-400">1d ago</span>
            </div>
            
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span>🎯</span>
              </div>
              <span className="text-gray-600">Earned "Goal Setter" badge</span>
              <span className="text-gray-400">3d ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
