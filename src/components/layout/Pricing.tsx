"use client"; // if you're using Next.js, add this for client components
import { useState } from "react";
import { Button } from "@/components/ui/button"; // update this import according to where your Button component is

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"yearly" | "monthly">("yearly");

  return (
    <section id="pricing" className="py-24 px-4 md:px-0 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Pricing</h2>
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow border border-gray-200">
          <span className="font-medium text-gray-700">Billed</span>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-3 py-1 rounded-full text-sm font-semibold focus:outline-none transition
              ${billingCycle === "yearly" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}
            `}
          >
            Yearly
          </button>
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-3 py-1 rounded-full text-sm font-semibold focus:outline-none transition
              ${billingCycle === "monthly" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}
            `}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
        {/* Standard (Free) Plan */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">Standard</h3>
          <div className="text-3xl font-bold mb-4">Free</div>
          <ul className="text-gray-500 mb-8 space-y-2 text-center">
            <li>Basic features included</li>
            <li>Unlimited tasks</li>
            <li>Basic priority levels</li>
            <li>Basic reminders</li>
          </ul>
          <Button
            variant="outline"
            className="rounded-full border-black text-black px-6 py-3 font-semibold w-full hover:bg-gray-100"
          >
            Get Started
          </Button>
        </div>

        {/* Pro Plan */}
        <div className="flex-1 bg-black text-white rounded-3xl shadow-xl p-8 flex flex-col items-center border border-gray-900">
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <div className="text-3xl font-bold mb-4">
            {billingCycle === "yearly" ? "$75" : "$8"}
            <span className="text-base font-normal">
              {billingCycle === "yearly" ? " /year" : " /month"}
            </span>
          </div>
          <ul className="mb-8 space-y-2 text-center">
            <li>Advanced task management</li>
            <li>Enhanced priority levels</li>
            <li>Advanced categorization</li>
            <li>Customizable reminders</li>
            <li>Collaboration features</li>
            <li>Offline access</li>
            <li>Advanced tagging</li>
            <li>Priority customer support</li>
          </ul>
          <Button className="bg-white text-black rounded-full px-6 py-3 font-semibold w-full hover:bg-gray-200">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
}
