import React from 'react'

export default function StoryItem(props) {
    return (
        <div className="relative flex justify-center">
            <a href="#">
                <img width="100" height="200" className="opacity-60 transition delay-200 hover:opacity-100 rounded-lg" src={props.url} />
                <div className="absolute bottom-2 px-3">
                    <h1 className="text-sm font-bold">{props.title}</h1>
                </div>
            </a>
        </div>
    )
}
