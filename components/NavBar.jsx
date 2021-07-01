import React from 'react'

export default function NavBar() {
    return (
        <nav className="hidden lg:flex justify-between bg-gray-800 p-4 pb-1 w-full fixed">
          <div className="flex -mt-1">
            <a href="/">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" className="-mt-1 mr-2 shadow-md rounded-full" />
            </a>
            <div>
              <input type="search" placeholder="🔍 Search Facebook" className="bg-gray-700 p-2 rounded-3xl text-white focus:outline-none focus:border-0" />
            </div>
          </div>
          <div className="flex justify-between text-gray-500">
            <a href="#" className="hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-11 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            </a>
            <a href="#" className="hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-11 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            </a>
            <a href="#" className="hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-11 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            </a>
            <a href="#" className="hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-11 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            </a>
            <a href="#" className="hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-11 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            </a>
          </div>

          <div className="flex justify-between -mt-1">
              <a href="#" className="flex justify-center hover:bg-gray-600 hover:rounded-2xl p-1 pb-0">
                <img className="rounded-full my-0 h-8 w-8" src="https://i.stack.imgur.com/l60Hf.png" />
                <h1 className="ml-2 mt-1 mr-2 text-white font-bold leading-1">User</h1>       
              </a>
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-9 w-9 bg-gray-700 text-white border-8 border-gray-700 rounded-full bg-none hover:border-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              </a>
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-9 w-9 bg-gray-700 text-white border-8 border-gray-700 rounded-full bg-none hover:border-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              </a>
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-9 w-9 bg-gray-700 text-white border-8 border-gray-700 rounded-full bg-none hover:border-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              </a>
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-9 w-9 bg-gray-700 text-white border-8 border-gray-700 rounded-full bg-none hover:border-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
              </a>
          </div>
        </nav>
    )
}
