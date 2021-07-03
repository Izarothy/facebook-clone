import React from 'react'

export default function SideMenu() {
    return (
        <aside className="h-full">
            <div className="fixed mt-16 flex flex-col">
                <ul className="p-7 pb-1 text-white font-normal flex flex-col flex-grow">
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 1</a></li>
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 2</a></li>
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 3</a></li>
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 4</a></li>
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 5</a></li>
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 6</a></li>
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 7</a></li>
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 8</a></li>
                </ul>
                <div className="p-5 flex flex-col border-t border-b border-t-3  border-gray-700">
                    <h3 className="text-gray-400 font-medium text-lg">Your shortcuts</h3>
                    <ul className="text-white">
                        <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test shortcut</a></li>
                        <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test shortcut</a></li>
                        <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test shortcut</a></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
