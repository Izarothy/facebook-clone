import React from 'react'
import storiesMock from '../storiesMock.json'
import StoryItem from './StoryItem'
export default function Story() {
    return (
        <div className="grid grid-cols-6 gap-2 mt-24">
            {storiesMock ? storiesMock.map((item, idx) => <StoryItem url={item.url} title={item.title} key={idx}/>) : <div> No items found</div>}
        </div>
    )
}
