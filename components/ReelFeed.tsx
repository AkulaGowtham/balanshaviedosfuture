'use client';

import { useState, useEffect } from 'react';
import ReelCard from './ReelCard';

const mockReels = [
  {
    id: '1',
    mediaUrl: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    user: {
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    },
    likes: 1234,
    comments: 56,
    shares: 7,
  },
  {
    id: '2',
    mediaUrl: 'https://images.unsplash.com/photo-1682687218147-9806132dc697',
    user: {
      username: 'janedoe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    likes: 5678,
    comments: 90,
    shares: 12,
  },
];

export default function ReelFeed() {
  const [reels, setReels] = useState(mockReels);

  useEffect(() => {
    // In a real application, you would fetch reels from an API here
    // For now, we'll use the mock data
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reels.map((reel) => (
        <ReelCard key={reel.id} reel={reel} />
      ))}
    </div>
  );
}