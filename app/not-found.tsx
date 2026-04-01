import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-6xl font-bold font-display text-[#C8F135] mb-4">404</h2>
      <p className="text-xl text-white/60 mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link 
        href="/" 
        className="bg-[#C8F135] text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
      >
        Back to Home
      </Link>
    </div>
  );
}
