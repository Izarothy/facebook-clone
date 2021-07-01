import React from 'react'

export default function SideMenu() {
    return (
        <aside>
            <div className="fixed mt-16 min-h-screen grid grid-cols-sidemenu">
            <ul className="p-7 pb-1 text-white border-b border-b-3 border-gray-700 font-normal">
                <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 1</a></li>
                <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 2</a></li>
                <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 3</a></li>
                <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 4</a></li>
                <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 5</a></li>
                <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 6</a></li>
                <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 7</a></li>
                <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test text 8</a></li>
            </ul>
            <section className="p-5">
                <h3 className="text-gray-400 font-medium text-lg">Your shortcuts</h3>
                <ul className="text-white">
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test shortcut</a></li>
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test shortcut</a></li>
                    <li className="flex my-2"><img src="https://picsum.photos/35" className="rounded-full mr-3"/><a href="#">Test shortcut</a></li>
                </ul>
            </section>
            <div className="text-gray-500 text-xs mt-16 px-3 align-bottom">
            Privacy  · Rules  · Ads  · Ad settings ·<br />  Cookies ·   · Facebook © 2021
            </div>
            </div>
        </aside>
    )
}
