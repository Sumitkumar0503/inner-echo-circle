
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Hangouts = () => {
  const [view, setView] = useState('upcoming');

  const events = [
    {
      id: 1,
      title: 'Coffee & Catch Up',
      date: 'Tomorrow',
      time: '2:00 PM',
      location: 'Local Café',
      attendees: ['Alex', 'Morgan'],
      emoji: '☕',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Game Night',
      date: 'Friday',
      time: '7:00 PM',
      location: 'Jordan\'s Place',
      attendees: ['Jordan', 'Sam', 'Casey'],
      emoji: '🎲',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Weekend Hike',
      date: 'Saturday',
      time: '9:00 AM',
      location: 'Mountain Trail',
      attendees: ['Everyone'],
      emoji: '🥾',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Book Club',
      date: 'Last Tuesday',
      time: '6:30 PM',
      location: 'Morgan\'s Apartment',
      attendees: ['Morgan', 'Alex', 'Sam'],
      emoji: '📚',
      status: 'past'
    }
  ];

  const filteredEvents = events.filter(event => event.status === view);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light text-gray-900">Hangouts</h2>
          <p className="text-gray-500 mt-1">Plan and track your group activities</p>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 rounded-full">
          + New Event
        </Button>
      </div>

      {/* View Toggle */}
      <div className="flex space-x-4">
        <button
          onClick={() => setView('upcoming')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            view === 'upcoming'
              ? 'bg-emerald-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setView('past')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            view === 'past'
              ? 'bg-emerald-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Past Events
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                {/* Event Emoji */}
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{event.emoji}</span>
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 mb-2">{event.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-3">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {Array.isArray(event.attendees) 
                        ? event.attendees.join(', ')
                        : event.attendees
                      }
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex-shrink-0">
                  {view === 'upcoming' ? (
                    <Button variant="outline" size="sm" className="rounded-full">
                      RSVP
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="rounded-full text-gray-500">
                      View
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No {view} events
          </h3>
          <p className="text-gray-500 mb-4">
            {view === 'upcoming' 
              ? 'Create your first hangout to get started!'
              : 'No past events to show yet.'
            }
          </p>
          {view === 'upcoming' && (
            <Button className="bg-emerald-500 hover:bg-emerald-600 rounded-full">
              Plan Something Fun
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Hangouts;
