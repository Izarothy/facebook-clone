import React from 'react'

export default function RightMenu(props) {
    return (
        <aside className="h-full">
            <div className="fixed flex flex-col mt-20 ml-auto mr-8 w-full">
                <div className="hidden">
                    Friend invites will go here
                </div>
                <div className="flex flex-col my-3 mr-3">
                    <h1 className="text-gray-400 text-md font-bold my-2">Sponsored</h1>
                        <div className="flex">
                            <img src="https://picsum.photos/130/130" className="rounded-lg shadow-lg" />
                            <span className="my-auto ml-2 font-medium">Sponsored item</span>
                        </div>
                </div>
                <div className="border-t border-b border-gray-700">
                    <div className="flex justify-between pt-2">
                        <h1 className="text-gray-400 text-md font-bold">Your pages</h1>
                        <a href="#"><i className="las la-ellipsis-h text-2xl -mt-1 text-gray-400 mr-3" /> </a>
                    </div>
                    <div className="flex pt-2 pb-4">
                        <img className="rounded-full my-0 h-8 w-8" src="https://i.stack.imgur.com/l60Hf.png" />
                        <h1 className="ml-2 mt-1 mr-2 text-white font-bold leading-1">User</h1> 
                    </div> 

                    <div className="px-4 mb-3 flex flex-col">
                        <a href="#" className="mb-2"><i className="las la-bell text-xl text-gray-400" /><span className="text-sm text-gray-400 font-medium ml-2">5 Notifications</span></a>
                        <a href="#"><i className="las la-bullhorn text-xl text-gray-400" /><span className="text-sm text-gray-400 font-medium ml-2">Promote yourself</span></a>
                    </div>
                </div>
                <div className="flex flex-col border-b border-gray-700">
                <h1 className="text-gray-400 text-lg font-bold mt-2">Contacts</h1>
                    <div className="flex my-2">
                        <img src="https://picsum.photos/35" className="h-9 w-9 rounded-full" />
                        <h1 className="ml-2 mt-1 mr-2 font-medium">Lorem ipsum</h1>
                    </div>
                    <div className="flex my-2">
                        <img src="https://picsum.photos/35" className="h-9 w-9 rounded-full" />
                        <h1 className="ml-2 mt-1 mr-2 font-medium">Lorem ipsum</h1>
                    </div>
                    <div className="flex my-2">
                        <img src="https://picsum.photos/35" className="h-9 w-9 rounded-full" />
                        <h1 className="ml-2 mt-1 mr-2 font-medium">Lorem ipsum</h1>
                    </div>
                    <div className="flex my-2">
                        <img src="https://picsum.photos/35" className="h-9 w-9 rounded-full" />
                        <h1 className="ml-2 mt-1 mr-2 font-medium">Lorem ipsum</h1>
                    </div>
                    <div className="flex my-2">
                        <img src="https://picsum.photos/35" className="h-9 w-9 rounded-full" />
                        <h1 className="ml-2 mt-1 mr-2 font-medium">Lorem ipsum</h1>
                    </div>
                    <div className="flex my-2">
                        <img src="https://picsum.photos/35" className="h-9 w-9 rounded-full" />
                        <h1 className="ml-2 mt-1 mr-2 font-medium">Lorem ipsum</h1>
                    </div>
                    <div className="flex my-2">
                        <img src="https://picsum.photos/35" className="h-9 w-9 rounded-full" />
                        <h1 className="ml-2 mt-1 mr-2 font-medium">Lorem ipsum</h1>
                    </div>
                </div>
            </div>
        </aside>
    )
}
