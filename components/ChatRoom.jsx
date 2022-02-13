import React from 'react'
import Message from './Message';
import SendMessage from './SendMessage'

const ChatRoom = () => {
    return (
        <div className='relative mt-6 flex-1'>

            {/* Chat */}
            <div className='h-full overflow-y-scroll px-4 sm:px-14 pb-10'>
                <Message />
            </div>

            {/* Input */}
            <SendMessage />
        </div>
    )
}

export default ChatRoom