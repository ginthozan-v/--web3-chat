import React, { useState } from 'react'
import { useMoralis } from 'react-moralis';

const SendMessage = () => {
    const [message, setMessage] = useState("");
    const { user, Moralis } = useMoralis();

    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend('messages');
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then((message) => {

        }, (error) => {
            console.log("💀 error at SendMessage.jsx line:24", error)
        });

        setMessage('');
    }

    return (
        <form className='absolute bottom-0 bg-slate-600 w-full py-4 px-2 flex items-center'>
            <input type="text" placeholder='Enter a message' value={message} onChange={(e) => setMessage(e.target.value)}
                className='w-full bg-transparent focus:outline-none text-white px-4 sm:px-10' />
            <button
                type='submit'
                onClick={sendMessage}
                className=' text-red-400 mr-4 sm:mr-10'>send</button>
        </form>
    )
}

export default SendMessage