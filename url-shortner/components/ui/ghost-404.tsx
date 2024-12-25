'use client';

import { Home } from 'lucide-react';
import Link from 'next/link';

export default function Ghost404() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-6 relative overflow-hidden">
            {/* Floating particles background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            animation: `float ${Math.random() * 6 + 4}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="text-center relative">
                {/* More Ghost-like SVG */}
                <div className="mb-8 inline-block animate-bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        width="120"
                        height="120"
                        className="drop-shadow-lg"
                    >
                        {/* Ghost body */}
                        <path
                            d="M32 2c-13.3 0-24 10.7-24 24v28c0 4.4 3.6 8 8 8h4c2 0 3-1 3-2 0-1 1-2 2-2s2 1 2 2 1 2 2 2 2-1 2-2 1-2 2-2 2 1 2 2 1 2 2 2 2-1 2-2 1-2 2-2c1 0 2 1 2 2 0 1 1 2 3 2h4c4.4 0 8-3.6 8-8V26c0-13.3-10.7-24-24-24z"
                            fill="white"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinejoin="round"
                        />
                        {/* Ghost eyes */}
                        <circle cx="24" cy="28" r="3" fill="black" />
                        <circle cx="40" cy="28" r="3" fill="black" />
                        {/* Ghost mouth */}
                        <ellipse cx="32" cy="36" rx="5" ry="3" fill="black" />
                        {/* Ghost arms */}
                        <path
                            d="M16 40c2-4 6-6 10-6m28 6c-2-4-6-6-10-6"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <h1 className="text-7xl font-bold text-white mb-4 animate-bounce">404</h1>
                <h2 className="text-3xl font-semibold text-red-500 mb-6">URL Not Found</h2>
                <p className="text-gray-400 text-lg mb-8">
                    Oops! This URL seems to have vanished like a ghost...
                </p>
                <Link 
                    href="/"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                    <Home className="w-5 h-5" />
                    Return Home
                </Link>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-100px);
                    }
                }
            `}</style>
        </div>
    );
}
