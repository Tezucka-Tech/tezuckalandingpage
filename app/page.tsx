import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Logo/Brand */}
          <div className="mb-12">
            <Image
              src="/logo.svg"
              alt="Tezucka Logo"
              width={300}
              height={100}
              className="mx-auto animate-gradient"
              priority
            />
          </div>

          {/* Coming Soon Text */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wider animate-pulse-glow">
              COMING SOON
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Something amazing is on the way
            </p>
          </div>

          {/* Animated underline */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">
              We're working hard to bring you an incredible experience.
              Stay tuned for updates and be the first to know when we launch.
            </p>

            {/* Call to action placeholder */}
            <div className="pt-8">
              <Link
                href="/subscribe"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-glow"
              >
                Notify Me
              </Link>
            </div>
          </div>

          {/* Social links placeholder */}
          <div className="flex justify-center space-x-6 pt-12">
            {/* Add social media links here */}
          </div>
        </div>
      </div>
    </div>
  );
}
