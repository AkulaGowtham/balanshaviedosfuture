'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function UploadButton() {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);

    // In a real application, you would upload the file to your server here
    // For now, we'll just simulate an upload
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsUploading(false);
    // You would typically update the ReelFeed with the new upload here
  };

  return (
    <div className="mb-8 text-center">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept="image/*,video/*"
        onChange={handleUpload}
        disabled={isUploading}
      />
      <label htmlFor="file-upload">
        <Button asChild disabled={isUploading}>
          <span>
            <Upload className="mr-2 h-4 w-4" />
            {isUploading ? 'Uploading...' : 'Upload Media'}
          </span>
        </Button>
      </label>
    </div>
  );
}