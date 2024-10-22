'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, Share2, UserPlus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReelCard({ reel }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(reel.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
      <Image
        src={reel.mediaUrl}
        alt="Reel content"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* User info and buttons overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Image
              src={reel.user.avatar}
              alt={reel.user.username}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-white">{reel.user.username}</span>
          </div>
          <Button variant="secondary" size="sm">
            <UserPlus className="mr-2 h-4 w-4" /> Follow
          </Button>
        </div>
        <Button variant="secondary" size="sm" className="w-full mt-2">
          <ShoppingBag className="mr-2 h-4 w-4" /> View Product Catalogue
        </Button>
      </div>

      {/* Interaction buttons */}
      <div className="absolute right-2 bottom-20 flex flex-col space-y-4">
        <div className="flex flex-col items-center">
          <Button variant="ghost" size="sm" onClick={handleLike} className="bg-black/50 hover:bg-black/70">
            <Heart
              className={`h-6 w-6 ${liked ? 'fill-red-500 text-red-500' : 'text-white'}`}
            />
          </Button>
          <span className="text-xs text-white mt-1">{likes}</span>
        </div>
        <div className="flex flex-col items-center">
          <Button variant="ghost" size="sm" className="bg-black/50 hover:bg-black/70">
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs text-white mt-1">{reel.comments}</span>
        </div>
        <div className="flex flex-col items-center">
          <Button variant="ghost" size="sm" className="bg-black/50 hover:bg-black/70">
            <Share2 className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs text-white mt-1">{reel.shares}</span>
        </div>
      </div>
    </div>
  );
}