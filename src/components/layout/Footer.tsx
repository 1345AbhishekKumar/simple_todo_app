// File: src/components/layout/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white text-black border-t border-gray-100 pt-12 pb-6 px-4 md:px-0">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-12 md:gap-0">
                {/* Logo & Download CTA */}
                <div className="flex-1 flex flex-col gap-4 items-start">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block w-8 h-8 bg-black rounded-full"></span>
                        <span className="text-2xl font-extrabold tracking-tight">Lumina</span>
                    </div>
                    <p className="text-gray-500 mb-2 max-w-xs">The Simplified Art of Productive Living. Make each count with effortless organization.</p>
                    <div className="flex gap-2">
                        <a href="#" aria-label="Download on App Store" className="bg-black text-white rounded-full px-4 py-2 font-semibold shadow hover:bg-gray-900 transition-colors text-sm">App Store</a>
                        <a href="#" aria-label="Get on Play Store" className="bg-black text-white rounded-full px-4 py-2 font-semibold shadow hover:bg-gray-900 transition-colors text-sm">Play Store</a>
                    </div>
                </div>
                {/* Columns */}
                <div className="flex-[2] grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-semibold mb-3">Company</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="#careers">Careers</Link></li>
                            <li><Link href="#press">Press</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Help</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><Link href="#faq">FAQ</Link></li>
                            <li><Link href="#support">Support</Link></li>
                            <li><Link href="#guides">Guides</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Contact</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><a href="mailto:hello@lumina.app">hello@lumina.app</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                {/* Social Icons */}
                <div className="flex-1 flex flex-col items-end justify-between gap-4">
                    <div className="flex gap-3 mb-2">
                        <a href="#" aria-label="Twitter" className="hover:text-black text-gray-500"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22 5.92a8.38 8.38 0 01-2.36.65A4.13 4.13 0 0021.4 4.1a8.19 8.19 0 01-2.6.99A4.11 4.11 0 0012 8.09c0 .32.04.64.1.94A11.65 11.65 0 013 4.89a4.11 4.11 0 001.27 5.48A4.07 4.07 0 012.8 9.1v.05a4.11 4.11 0 003.3 4.03c-.3.08-.62.13-.95.13-.23 0-.45-.02-.67-.06a4.12 4.12 0 003.84 2.85A8.24 8.24 0 012 19.54a11.62 11.62 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022 5.92z" fill="currentColor"/></svg></a>
                        <a href="#" aria-label="Instagram" className="hover:text-black text-gray-500"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg></a>
                    </div>
                </div>
            </div>
            {/* Legal Links */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-100 text-xs text-gray-500 gap-2">
                <div>&copy; {new Date().getFullYear()} Lumina. All rights reserved.</div>
                <div className="flex gap-4">
                    <Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-black">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;