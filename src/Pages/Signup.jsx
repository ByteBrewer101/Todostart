import React, { useState } from 'react';

export function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-violet-800">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    onClick={handleSignup}
                    className="w-full p-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition duration-200"
                >
                    Sign Up
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <a href="/signin" className="text-violet-500 hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
}