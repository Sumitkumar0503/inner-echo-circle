
import React, { useState } from 'react';
import { Search, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Alex',
      avatar: '🌸',
      lastMessage: 'Looking forward to coffee tomorrow!',
      time: '2h ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Morgan',
      avatar: '🌙',
      lastMessage: 'That book recommendation was perfect',
      time: '5h ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Jordan',
      avatar: '🌿',
      lastMessage: 'Game night is going to be epic!',
      time: '1d ago',
      unread: 1,
      online: true
    },
    {
      id: 4,
      name: 'Sam',
      avatar: '🌻',
      lastMessage: 'Thanks for the advice earlier',
      time: '2d ago',
      unread: 0,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Alex',
      content: 'Hey! How was your day?',
      time: '2:30 PM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Pretty good! Just finished that project I was working on',
      time: '2:35 PM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Alex',
      content: 'That\'s awesome! We should celebrate tomorrow at coffee ☕',
      time: '2:40 PM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'Absolutely! Looking forward to it',
      time: '2:41 PM',
      isOwn: true
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-200px)] flex bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Conversations List */}
      <div className="w-1/3 border-r border-gray-100 flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search conversations..."
              className="pl-10 rounded-full border-gray-200 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedChat(conversation)}
              className={`p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                selectedChat?.id === conversation.id ? 'bg-emerald-50' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">{conversation.avatar}</span>
                  </div>
                  {conversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900 truncate">
                      {conversation.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {conversation.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-medium">
                          {conversation.unread}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">{selectedChat.avatar}</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{selectedChat.name}</h3>
                  <p className="text-sm text-gray-500">
                    {selectedChat.online ? 'Online' : 'Last seen 2h ago'}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.isOwn
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.isOwn ? 'text-emerald-100' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full border-gray-200 focus:border-emerald-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-emerald-500 hover:bg-emerald-600 rounded-full p-2"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Select a conversation
              </h3>
              <p className="text-gray-500">
                Choose someone to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
