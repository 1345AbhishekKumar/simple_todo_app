"use client";

// File: src/components/layout/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';

const Navbar = () => {
    // Get user authentication state from Clerk
    const { isSignedIn, user } = useUser();

    return (
        <nav className="bg-white text-black py-4 shadow-sm border-b border-gray-100">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
                <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2 hover:text-gray-700 transition-colors">
                    {/* Lumina Logo SVG */}
                    <Image src="/lumina.png" alt="Lumina Logo" width={32} height={32} className="inline-block" />
                    Lumina
                </Link>
                {isSignedIn ? (
                    <div className="flex items-center gap-4">
                        {/* Optionally show user's name if desired */}
                        <span className="font-medium text-gray-800">{user?.firstName || user?.username}</span>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                ) : (
                    <div className="flex items-center gap-6">
                        <Link href="#features" className="text-gray-700 hover:text-black transition-colors font-medium">Features</Link>
                        <Link href="#pricing" className="text-gray-700 hover:text-black transition-colors font-medium">Pricing</Link>
                        <Link href="#download" className="text-gray-700 hover:text-black transition-colors font-medium">Download</Link>
                        <Link href="/sign-in" className="bg-black text-white rounded-full px-5 py-2 font-semibold shadow hover:bg-gray-900 transition-colors">Sign-in</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;