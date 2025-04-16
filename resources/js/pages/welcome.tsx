import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import HeroSection from '@/components/HeroSection';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head>
                <title>OutfitLy | Premium Fashion & Clothing Destination</title>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600|poppins:300,400,500,600,700" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
            </Head>
            <div>
                <main>
                    <HeroSection auth={auth} />
                </main>
            </div>
        </>
    );
}
