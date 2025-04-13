'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Login attempt with:', { email, password });
  };

  const handleBlur = (field: 'email' | 'password') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const showError = (field: 'email' | 'password', value: string) => {
    return (touched[field] || isSubmitted) && !value;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-[400px] max-w-[90%] text-center my-[8%] mx-auto">
        <div className="flex flex-col items-center">
          <div className="rounded-full">
            <div className="flex items-center justify-center text-2xl font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 30 30">
                <path
                  fill="currentColor"
                  d="M15.8 9.9l-3.9 11.8h-1.5l3.9-11.8h1.5zM8 9.9H6.5l2.4 7.4h1.5L8 9.9zm10.9 9.5l-1.6-5.1h-1.5l2.4 7.4h1.5l3.9-11.8H22l-3.1 9.5zM29.5 15c0 8-6.5 14.5-14.5 14.5S.5 23 .5 15 7 .5 15 .5 29.5 7 29.5 15zm-1.2 0c0-7.3-6-13.3-13.3-13.3-7.3 0-13.3 6-13.3 13.3 0 7.3 6 13.3 13.3 13.3 7.3 0 13.3-6 13.3-13.3z"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className="text-center text-[32px] tracking-[2.4px] leading-[29px] font-bold text-gray-900 my-[0.67em]">
            SIGN IN
          </h1>
          <p className="mb-[16px] text-center text-[16px] leading-[20px] text-[#a6a6a6]">
            Sign in to check out with your membership
          </p>
        </div>

        <form className="mb-8" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Email Input */}
            <div className="relative mt-[8px] h-[56px]">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur('email')}
                className={`peer w-full px-4 py-3 rounded-[4px] border ${
                  showError('email', email) ? 'border-[#d7001e]' : 'border-gray-300'
                } placeholder-transparent focus:outline-none focus:border-gray-400 text-[16px]`}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className={`absolute left-4 -top-2.5 bg-white px-1 text-[12px] transition-all 
                peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-3 
                peer-focus:-top-2.5 peer-focus:text-[12px] ${
                  showError('email', email)
                    ? 'text-[#d7001e]'
                    : 'text-[#a6a6a6] peer-focus:text-gray-600'
                }`}
              >
                Email
              </label>
              {showError('email', email) && (
                <div className="text-[#d7001e] text-[12px] mt-1 text-left pl-1">
                  Email cannot be empty
                </div>
              )}
            </div>

            {/* Password Input */}
            <div className="relative mb-[24px] h-[56px]">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleBlur('password')}
                className={`peer w-full px-4 py-3 rounded-[4px] border ${
                  showError('password', password) ? 'border-[#d7001e]' : 'border-gray-300'
                } placeholder-transparent focus:outline-none focus:border-gray-400 text-[16px]`}
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className={`absolute left-4 -top-2.5 bg-white px-1 text-[12px] transition-all 
                peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-3 
                peer-focus:-top-2.5 peer-focus:text-[12px] ${
                  showError('password', password)
                    ? 'text-[#d7001e]'
                    : 'text-[#a6a6a6] peer-focus:text-gray-600'
                }`}
              >
                Password
              </label>
              {showError('password', password) && (
                <div className="text-[#d7001e] text-[12px] mt-1 text-left pl-1">
                  Password cannot be empty
                </div>
              )}
            </div>
          </div>

          {/* Opacity-based hover style */}
          <style jsx>{`
            .btn-hover-slide {
              position: relative;
              z-index: 1;
              overflow: hidden;
            }
            .btn-hover-slide::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              border-radius: inherit;
              z-index: -1;
              transform: translateX(-100%);
              transition: transform 400ms ease;
            }
            .btn-hover-slide.white::before {
              background: rgba(0,0,0,.05);
            }
            .btn-hover-slide.red::before {
              background: hsla(0,0%,100%,.3);
            }
            .btn-hover-slide:hover::before {
              transform: translateX(0);
            }
          `}</style>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 mt-[4px] mb-[8px] rounded-[3em] text-white font-semibold text-[12px] cursor-pointer btn-hover-slide red bg-[#ff0026]"
          >
            SIGN IN
          </button>

          <div className="text-center my-[8px]">
            <a href="#" className="text-[#d7001e] hover:text-[#b30019] text-sm">
              Forgot your password?
            </a>
          </div>

          {/* Join Button */}
          <button
            type="button"
            className="w-full my-[8px] py-3 rounded-[3em] border border-gray-300 text-[#ff0026] font-semibold text-[12px] cursor-pointer btn-hover-slide white bg-white"
          >
            JOIN WHOOP
          </button>
        </form>
      </div>
    </div>
  );
}
