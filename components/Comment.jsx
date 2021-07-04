import React from 'react'

export default function Comment(props) {
    return (
        <div className="flex my-2">
            <img src="https://picsum.photos/35" className="h-8 w-8 rounded-full" />
            <div className="text-sm bg-gray-700 rounded-xl p-2 ml-1">
                <a href="#" className="text-white font-bold">User</a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt cupiditate omnis explicabo sunt. Magni corrupti voluptas iusto voluptatem nobis hic, sunt ipsam repudiandae, tempora consectetur perspiciatis quos atque nihil modi.</p>
            </div>
        </div>
    )
}
