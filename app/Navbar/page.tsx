import Link from 'next/link';

export default function Home() {
  return (

    <main>
      <nav className="bg-gray-600 text-white flex items-center justify-between">
        
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-medium">
            Navbar
          </Link>
          
          <div className="flex gap-4 text-gray-400">
            <Link href="#" className="text-white">Home</Link>
            <Link href="#" className="transition-colors">Features</Link>
            <Link href="#" className="transition-colors">Pricing</Link>
            <Link href="#" className="transition-colors">About</Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full px-3 py-1.5 rounded bg-white text-black text-sm border border-gray-600"
          />
          <button 
            type="button" 
            className="border px-4 py-1.5 rounded text-sm transition-all font-medium"
          >
            Search
          </button>
        </div>
      </nav>

    <nav style={{ rotate: 'y -180deg' }} className="bg-gray-600 text-white flex items-center justify-between">
        
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-medium">
            Navbar
          </Link>
          
          <div className="flex gap-4 text-gray-400">
            <Link href="#" className="text-white">Home</Link>
            <Link href="#" className="transition-colors">Features</Link>
            <Link href="#" className="transition-colors">Pricing</Link>
            <Link href="#" className="transition-colors">About</Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full px-3 py-1.5 rounded bg-white text-black text-sm border border-gray-600"
          />
          <button 
            type="button" 
            className="border px-4 py-1.5 rounded text-sm transition-all font-medium"
          >
            Search
          </button>
        </div>
      </nav>

    </main>
  );
}