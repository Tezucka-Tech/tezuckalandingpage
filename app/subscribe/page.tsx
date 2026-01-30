'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Rotating geometric shapes */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-blue-400/30 rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-purple-400/30 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-md space-y-8 animate-fade-in-up">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Logo */}
          <div className="text-center">
            <Image
              src="/logo.svg"
              alt="Tezucka Logo"
              width={200}
              height={67}
              className="mx-auto animate-gradient"
              priority
            />
          </div>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Stay Updated
                </h1>
                <p className="text-gray-400 leading-relaxed">
                  Be the first to know when we launch. Subscribe to get notified about our progress and exclusive updates.
                </p>
              </div>

              {/* Subscription Form */}
              <form onSubmit={handleSubmit} className="space-y-6" netlify>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe for Updates'
                  )}
                </button>
              </form>

              {/* Privacy note */}
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          ) : (
            /* Success message */
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Thank You!</h2>
                <p className="text-gray-400">
                  You've been successfully subscribed. We'll keep you updated on our progress.
                </p>
              </div>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}
