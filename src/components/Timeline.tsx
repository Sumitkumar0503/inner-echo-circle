
import React, { useState } from 'react';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Timeline = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', emoji: '✨', label: 'All' },
    { id: 'thoughts', emoji: '💭', label: 'Thoughts' },
    { id: 'moments', emoji: '📸', label: 'Moments' },
    { id: 'wins', emoji: '🎉', label: 'Wins' },
    { id: 'questions', emoji: '❓', label: 'Questions' },
  ];

  const posts = [
    {
      id: 1,
      author: 'Alex',
      avatar: '🌸',
      time: '2 hours ago',
      category: 'thoughts',
      content: 'Been thinking about how much our small group means to me. Sometimes the best conversations happen in the smallest circles.',
      likes: 5,
      comments: 2,
    },
    {
      id: 2,
      author: 'Morgan',
      avatar: '🌙',
      time: '4 hours ago',
      category: 'moments',
      content: 'Just finished reading that book Sam recommended. The ending completely caught me off guard! Anyone else read it?',
      likes: 3,
      comments: 4,
    },
    {
      id: 3,
      author: 'Jordan',
      avatar: '🌿',
      time: '1 day ago',
      category: 'wins',
      content: 'Finally got that promotion I\'ve been working towards! Celebrating the small victories today ✨',
      likes: 8,
      comments: 6,
    },
  ];

  const filteredPosts = selectedFilter === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedFilter);

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === filter.id
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{filter.emoji}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* New Post Prompt */}
      <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-emerald-600 text-lg">✨</span>
            </div>
            <input
              type="text"
              placeholder="What's on your mind today?"
              className="flex-1 bg-gray-50 rounded-full px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 rounded-full px-6">
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              {/* Post Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">{post.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{post.author}</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{post.time}</span>
                  </div>
                </div>
                <div className="text-lg">
                  {filters.find(f => f.id === post.category)?.emoji}
                </div>
              </div>

              {/* Post Content */}
              <p className="text-gray-800 leading-relaxed mb-4">{post.content}</p>

              {/* Post Actions */}
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-50">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-emerald-600 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-emerald-600 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-emerald-600 transition-colors">
                  <Share className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-4">
        <Button variant="outline" className="rounded-full px-8">
          Load more posts
        </Button>
      </div>
    </div>
  );
};

export default Timeline;
