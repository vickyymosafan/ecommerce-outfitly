import { Link } from '@inertiajs/react';
import { User } from '@/types';

interface HeroSectionProps {
    auth: {
        user: User | null;
    };
}

export default function HeroSection({ auth }: HeroSectionProps) {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
                <img 
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                    alt="Outfit collection"
                />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="md:flex md:items-center md:justify-between md:space-x-10">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="animate-fade-in-up text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                            <span className="block mb-2">Outfit Premium</span>
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Koleksi Terbaru 2025</span>
                        </h1>
                        <p className="mt-4 max-w-2xl animate-fade-in-up animation-delay-150 text-xl text-gray-300">
                            Temukan koleksi lengkap Hoodie, Zipper, Crop Series dan outfit casual lainnya dengan kualitas premium dan harga terbaik.
                        </p>
                        <div className="mt-10 flex animate-fade-in-up animation-delay-300 flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <Link
                                href={route('register')}
                                className="group relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 md:py-4 md:px-10 md:text-lg"
                            >
                                <span className="relative z-10">Daftar</span>
                                <span className="absolute bottom-0 left-0 h-1 w-full bg-white/20 transition-all duration-300 group-hover:h-full"></span>
                            </Link>
                            {!auth.user && (
                                <Link
                                    href={route('login')}
                                    className="flex items-center justify-center rounded-full border border-gray-300 bg-transparent px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 md:py-4 md:px-10 md:text-lg"
                                >
                                    Masuk Akun
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="mt-12 hidden md:block md:w-1/2 lg:mt-0">
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 mix-blend-multiply filter blur-3xl"></div>
                            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/20 mix-blend-multiply filter blur-3xl"></div>
                            
                            {/* Hero image */}
                            <div className="overflow-hidden rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img 
                                    className="w-full"
                                    src="https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                                    alt="Outfit collection showcase"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Shopping stats */}
                <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white">2K+</div>
                        <div className="mt-2 text-sm text-gray-400">Produk</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white">10K+</div>
                        <div className="mt-2 text-sm text-gray-400">Pelanggan</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white">4.8</div>
                        <div className="mt-2 text-sm text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white">24H</div>
                        <div className="mt-2 text-sm text-gray-400">Support</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
