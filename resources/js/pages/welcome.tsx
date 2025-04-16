import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head>
                <title>Fashion Outfit Store | Your Premium Clothing Destination</title>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-white dark:bg-gray-900">
                {/* Navigation */}
                <nav className="border-b border-gray-100 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-gray-800 dark:text-white">
                                FashionOutfit
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                    >
                                        Daftar
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="relative overflow-hidden bg-white dark:bg-gray-900">
                    <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
                        <img 
                            className="absolute inset-0 h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                            alt="Outfit collection"
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Outfit Premium</span>{' '}
                                    <span className="block text-blue-600 xl:inline">Koleksi Terbaru</span>
                                </h1>
                                <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300">
                                    Temukan koleksi lengkap Hoodie, Zipper, Crop Series dan outfit casual lainnya dengan kualitas premium dan harga terbaik.
                                </p>
                                <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                    <Link
                                        href={route('register')}
                                        className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                                    >
                                        Mulai Belanja
                                    </Link>
                                    {!auth.user && (
                                        <Link
                                            href={route('login')}
                                            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                                        >
                                            Masuk Akun
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:hidden">
                                <div className="overflow-hidden rounded-lg shadow-xl">
                                    <img 
                                        className="w-full"
                                        src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                                        alt="Outfit collection"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Categories */}
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Kategori Unggulan
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                            Koleksi outfit premium dengan desain terbaru dan material berkualitas
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Hoodie */}
                        <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg dark:bg-gray-800">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80" 
                                    alt="Outfit Hoodie"
                                    className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Hoodie Collection</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Hoodie berbahan katun premium, nyaman untuk aktivitas sehari-hari.
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Rp 250.000</span>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">4.8</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Zipper */}
                        <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg dark:bg-gray-800">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1613953362878-dc456ca74825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" 
                                    alt="Outfit Zipper"
                                    className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Zipper Collection</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Zipper hoodie stylish dengan desain minimalis.
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Rp 280.000</span>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">4.5</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Crop Series */}
                        <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg dark:bg-gray-800">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80" 
                                    alt="Crop Series"
                                    className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Crop Collection</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Hoodie pendek untuk tampilan kasual modern.
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Rp 230.000</span>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">4.7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Half Zipper */}
                        <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg dark:bg-gray-800">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1572495641004-28421ae52e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                                    alt="Half Zipper"
                                    className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Half Zipper</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Sweater dengan ritsleting setengah, cocok untuk gaya santai.
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Rp 260.000</span>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">4.6</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Boxy Outfit */}
                        <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg dark:bg-gray-800">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" 
                                    alt="Boxy Outfit"
                                    className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Boxy Outfit</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Boxy outfit dengan desain loose fit untuk kenyamanan maksimal.
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Rp 240.000</span>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">4.4</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Crop Outfit */}
                        <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg dark:bg-gray-800">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80" 
                                    alt="Crop Outfit"
                                    className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Crop Outfit</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Pakaian crop dengan bahan adem dan cocok untuk semua musim.
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Rp 220.000</span>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">4.5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {!auth.user && (
                        <div className="mt-12 text-center">
                            <Link
                                href={route('register')}
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
                            >
                                Daftar Sekarang
                            </Link>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <footer className="bg-gray-50 dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
                            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                &copy; 2025 FashionOutfit. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
