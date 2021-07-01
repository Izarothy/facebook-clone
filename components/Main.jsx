import React from 'react'
import Post from './Post'
import Mock from '../post.mock.json'
export default function Main() {
    return (
        <div className="grid grid-cols-1 gap-4 justify-center overflow-y-scroll scrollbar-hide  my-16">
            {Mock ? Mock.map((i, idx) => <Post image={i.image} text={i.text} key={idx}/>) : <div>Nothing</div>}
        </div>
    )
}
