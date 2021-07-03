import React from 'react'
import Image from 'next/image'
export default function Post(props) {
    return (
        <section className="flex flex-col py-3 my-10 mb-0 bg-gray-800 rounded-lg text-white">
            <div className="px-3">
                <a href="#" className="flex p-1 pb-0">
                    <img className="rounded-full my-0 h-8 w-8" src="https://i.stack.imgur.com/l60Hf.png" />
                    <h1 className="ml-2 mt-1 mr-2 text-white font-bold leading-1">User</h1>       
                </a>
                <p className="my-2">{props.text}</p>
            </div>
            <a href={props.image} target="_blank">
                <Image width="720" height="860" src={props.image} />
            </a>
            <div>
                <div className="flex justify-between p-3">
                    <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="blue" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                        <span> 1</span>
                    </div>
                    <div className="text-sm text-gray-400">3 comments <span className="m-2">4 shares</span></div>
                </div>
                <div className="flex justify-between border-b border-t border-1 border-gray-700 px-3 py-2 font-medium">
                    <a className="flex justify-center text-gray-400 hover:bg-gray-600 rounded-xl px-2 py-1 w-full" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>    Like
                        </a>
                        <a className="flex justify-center text-gray-400 hover:bg-gray-600 rounded-xl px-2 py-1 w-full" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>Comment</a>
                    <a className="flex justify-center text-gray-400 hover:bg-gray-600 rounded-xl px-2 py-1 w-full" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>Share</a>
                </div>
            </div>
        </section>
    )
}
