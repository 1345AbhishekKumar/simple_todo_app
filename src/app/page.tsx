
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import './globals.css';
import Link from "next/link";
import Footer from '@/components/layout/Footer';
import PricingSection from "@/components/layout/Pricing";

export default function Home() {
    return (
        <div className="bg-white text-black font-sans min-h-screen flex flex-col overflow-hidden">
            <section className="relative flex flex-col items-center justify-center py-24 px-4 md:px-0 text-center overflow-hidden">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">The Simplified Art of Productive Living</h1>
                <p className="text-gray-500 text-lg md:text-xl mb-8 max-w-xl mx-auto">Make each count with effortless organization, ensuring productivity and purpose every day.</p>
                <div className="flex gap-4 justify-center mb-12">
                    {/* Use Next.js Link for navigation instead of <a> */}
                    <Link href="#" aria-label="Download on App Store" className="bg-black text-white rounded-full px-6 py-3 font-semibold shadow hover:bg-gray-900 transition-colors">App Store</Link>
                    <Link href="/sign-up" aria-label="Get on Play Store" className="bg-black text-white rounded-full px-6 py-3 font-semibold shadow hover:bg-gray-900 transition-colors">Get Started</Link>
                </div>
                {/* Floating screenshots */}
                {/* <div className="relative flex justify-center items-center h-72 md:h-96">
                    <div className="absolute left-1/2 -translate-x-[70%] rotate-[-8deg] shadow-xl rounded-3xl z-10 animate-float">
                        <Image src="https://i.pinimg.com/736x/5e/97/aa/5e97aa3af68b934d0fdb14c1c894bbbf.jpg" alt="Lumina mobile screenshot 1" width={220} height={440} />
                    </div>
                    <div className="absolute left-1/2 -translate-x-[30%] rotate-[7deg] shadow-xl rounded-3xl z-20 animate-float-delay">
                        <Image src="https://i.pinimg.com/736x/5e/97/aa/5e97aa3af68b934d0fdb14c1c894bbbf.jpg" alt="Lumina mobile screenshot 2" width={220} height={440} />
                    </div>
                </div> */}
                 <Image src="https://i.pinimg.com/736x/5e/97/aa/5e97aa3af68b934d0fdb14c1c894bbbf.jpg" alt="Lumina mobile screenshot 1" width={720} height={440} />
            </section>

            {/* Feature Highlights 1 */}
            <section id="features" className="flex flex-col md:flex-row items-center justify-center gap-16 py-20 px-4 md:px-0 max-w-6xl mx-auto">
                <div className="flex-1 flex justify-center">
                    <Image src="https://i.pinimg.com/736x/5e/97/aa/5e97aa3af68b934d0fdb14c1c894bbbf.jpg" alt="Lumina app screenshot" width={260} height={520} className="rounded-3xl shadow-lg" />
                </div>
                <div className="flex-1 max-w-md">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Simplify Your Workflow, Anytime, Anywhere</h2>
                    <p className="text-gray-500 mb-6">Lumina lets you organize tasks, notes, and routines in one place. Stay productive wherever you are, with seamless sync across devices.</p>
                    <Button className="bg-black text-white rounded-full px-6 py-3 font-semibold shadow hover:bg-gray-900 transition-colors">Learn More</Button>
                </div>
            </section>

            {/* Feature Highlights 2 */}
            <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-16 py-20 px-4 md:px-0 max-w-6xl mx-auto">
                <div className="flex-1 flex flex-col items-center gap-4">
                    <Image src="https://i.pinimg.com/736x/5e/97/aa/5e97aa3af68b934d0fdb14c1c894bbbf.jpg" alt="Lumina smaller screenshot" width={180} height={360} className="rounded-2xl shadow-md" />
                    <Image src="https://i.pinimg.com/736x/5e/97/aa/5e97aa3af68b934d0fdb14c1c894bbbf.jpg" alt="Lumina note card preview" width={260} height={120} className="rounded-xl shadow border border-gray-100 bg-white -mt-8" />
                </div>
                <div className="flex-1 max-w-md">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Transform Your Routine for Productivity and Reflection</h2>
                    <p className="text-gray-500 mb-6">Build habits, reflect on your progress, and unlock your best self with Lumina’s daily and weekly review tools.</p>
                    <Button className="bg-black text-white rounded-full px-6 py-3 font-semibold shadow hover:bg-gray-900 transition-colors">Learn More</Button>
                </div>
            </section>

            {/* Pricing Section */}
            <PricingSection />

            {/* Newsletter Sign-up */}
            <section className="py-20 px-4 md:px-0 flex flex-col items-center bg-white">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">Sign up to our newsletter</h2>
                <p className="text-gray-500 mb-6">Receive latest news, updates and many other news every week.</p>
                <form className="flex w-full max-w-md gap-2" autoComplete="off">
                    <input type="email" aria-label="Your email address" placeholder="Your email address" className="flex-1 px-5 py-3 rounded-full border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-black" required />
                    <button type="submit" className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-gray-900 transition-colors" aria-label="Subscribe">
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </form>
            </section>

            <Footer />
        </div>
    );
}
