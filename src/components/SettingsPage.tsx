
import React, { useState } from 'react';
import { Bell, Share, Users, Shield, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    dailyPrompts: true,
    weeklyDigest: true,
    newMessages: true,
    hangoutReminders: true,
  });

  const handleNotificationToggle = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-light text-gray-900">Settings</h2>
        <p className="text-gray-500 mt-1">Customize your Inner Space experience</p>
      </div>

      {/* Notifications */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Daily Prompts</p>
                <p className="text-sm text-gray-500">Get a new conversation starter each morning</p>
              </div>
              <Switch
                checked={notifications.dailyPrompts}
                onCheckedChange={() => handleNotificationToggle('dailyPrompts')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Weekly Digest</p>
                <p className="text-sm text-gray-500">Summary of your group's activity</p>
              </div>
              <Switch
                checked={notifications.weeklyDigest}
                onCheckedChange={() => handleNotificationToggle('weeklyDigest')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">New Messages</p>
                <p className="text-sm text-gray-500">Alert when you receive a message</p>
              </div>
              <Switch
                checked={notifications.newMessages}
                onCheckedChange={() => handleNotificationToggle('newMessages')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Hangout Reminders</p>
                <p className="text-sm text-gray-500">Get notified about upcoming events</p>
              </div>
              <Switch
                checked={notifications.hangoutReminders}
                onCheckedChange={() => handleNotificationToggle('hangoutReminders')}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Invite Management */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-medium text-gray-900">Invite Friends</h3>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Your Inner Space is invite-only. Generate a secure link to invite new friends.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Active Invites</p>
                  <p className="text-sm text-gray-500">2 pending invitations</p>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">
                  View All
                </Button>
              </div>
            </div>

            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 rounded-full">
              Generate New Invite Link
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-medium text-gray-900">Privacy & Security</h3>
          </div>

          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start rounded-full">
              Change Password
            </Button>
            
            <Button variant="outline" className="w-full justify-start rounded-full">
              Download My Data
            </Button>
            
            <Button variant="outline" className="w-full justify-start rounded-full">
              Privacy Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <HelpCircle className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-medium text-gray-900">About</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Version</span>
              <span className="text-gray-900">1.0.0</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Build</span>
              <span className="text-gray-900">2024.03.15</span>
            </div>

            <Button variant="outline" className="w-full justify-start rounded-full">
              Help & Support
            </Button>
            
            <Button variant="outline" className="w-full justify-start rounded-full">
              Terms of Service
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-0 shadow-sm border-red-100">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-red-600 mb-4">Danger Zone</h3>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start rounded-full border-red-200 text-red-600 hover:bg-red-50">
              Leave Inner Space
            </Button>
            
            <Button variant="outline" className="w-full justify-start rounded-full border-red-200 text-red-600 hover:bg-red-50">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
