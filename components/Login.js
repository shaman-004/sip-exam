// components/LoginForm.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
const page = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };
    
      const handleLogin = async () => {
        try {
          const response = await fetch('http://localhost:3001/Login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            // Redirect to the main page or handle login success
            console.log(data.message);
          } else {
            // Handle login failure
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error during login:', error.message);
        }
      };
  return (
    <>
    <div className="flex h-screen">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('apple.jpg')` }}>
        {/* Add any other content you want to display on the left side, such as a logo or welcome message */}
      </div>
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:w-96">
        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="hover:border-red-300  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="hover:border-red-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </form>
      <p className="text-white px-5 py-5 bg-red-500 p-5 text-center text-sm text-muted-foreground ">Do not have an account? <Link className="underline underline-offset-4 hover:text-primary" href="/Register.js">Register</Link></p>
    </div>
    </div>
    </>
  );
};

export default page;
