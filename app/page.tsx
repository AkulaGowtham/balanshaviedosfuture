import ReelFeed from '@/components/ReelFeed';
import UploadButton from '@/components/UploadButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">ReelGram</h1>
        <UploadButton />
        <ReelFeed />
      </div>
    </main>
  );
}