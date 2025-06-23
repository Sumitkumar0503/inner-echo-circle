
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useProfile } from '@/hooks/useProfile';
import { useToast } from '@/hooks/use-toast';

const EditProfile = ({ onClose }: { onClose: () => void }) => {
  const { profile, updateProfile } = useProfile();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    username: profile?.username || '',
    avatar_emoji: profile?.avatar_emoji || '✨',
    bio: profile?.bio || '',
  });

  const emojiOptions = ['✨', '🌸', '🌙', '🌿', '🌻', '🎯', '🎨', '📚', '☕', '🌈'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await updateProfile(formData);
    
    if (error) {
      toast({
        title: "Update failed",
        description: error,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
      });
      onClose();
    }
    
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 p-4 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium">Edit Profile</h2>
            <Button variant="ghost" onClick={onClose} className="rounded-full">
              ✕
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <Input
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Enter username"
                className="rounded-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Avatar</label>
              <div className="grid grid-cols-5 gap-2">
                {emojiOptions.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setFormData({ ...formData, avatar_emoji: emoji })}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-colors ${
                      formData.avatar_emoji === emoji
                        ? 'bg-emerald-100 ring-2 ring-emerald-500'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                placeholder="Tell us about yourself..."
                className="w-full p-3 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                rows={3}
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 rounded-full"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded-full"
              >
                {loading ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfile;
