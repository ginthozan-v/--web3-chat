import React from 'react'

const ChatRoom = () => {
    return (
        <div className='mt-16 relative'>
            <div className='bg-red-200 h-full px-4 '>
                ChatRoom
            </div>
            <div className='absolute bottom-0 bg-slate-600 w-full py-4 px-2 flex gap-1'>
                <input type="text" placeholder='Enter a message' className='w-full bg-transparent focus:outline-none text-white' />
                <button className=' text-red-400'>send</button>
            </div>
        </div>
    )
}

export default ChatRoom