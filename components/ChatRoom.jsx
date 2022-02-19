import React, { useEffect, useRef } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';

const MINS_DURATION = 15;

const ChatRoom = () => {
    const { user } = useMoralis();
    const endOfMessageRef = useRef(null);
    const { data, loading, error } = useMoralisQuery(
        'messages',
        query => query
            .ascending('createdAt'),
        // .greaterThan('createdAt',
        //     new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        // ),
        [],
        {
            live: true
        }

    );

    useEffect(() => {
        if (data) {
            endOfMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [data])


    return (
        <div className='relative mt-6 h-full flex-grow-0 overflow-y-scroll px-4 sm:px-14 pb-10 space-y-10'>

            {data.map((message) => (
                <Message key={message.id} message={message} />
            ))}

            <div ref={endOfMessageRef} className='text-center text-gray-400 mt-5'>
                <p>You're up to date {user.getUsername()}! 🎉</p>
            </div>
        </div>
    )
}

export default ChatRoom