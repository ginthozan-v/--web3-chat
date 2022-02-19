import { useMoralis } from "react-moralis";
import TimeAgo from 'timeago-react';
import Avatar from "./Avatar";

const Message = ({ message }) => {
    const { user } = useMoralis();
    const isUserMessage = message.get('ethAddress') === user.get("ethAddress");


    return (
        <div className={`flex items-end space-x-2 relative ${ isUserMessage && "justify-end" }`}>
            {/* <p className={` absolute -top-2 text-xs ${ isUserMessage ? 'text-pink-300' : 'text-blue-400' }`}>{message.get('username')}</p> */}
            <div className={`relative w-8 h-8 ${ isUserMessage && 'order-last ml-2' }`}>
                <Avatar username={message.get('username')} />
            </div>
            <div className={`flex space-x-4 px-4 py-2 rounded-lg ${ isUserMessage ? 'rounded-br-none bg-blue-200 ' : 'rounded-bl-none bg-red-200' }`}>
                <p>{message.get("message")}</p>
            </div>

            <TimeAgo
                className={`absolute -bottom-5 text-[10px] italic text-gray-400 ${ isUserMessage && 'order-first pr-1' } `}
                datetime={message.createdAt}
            />
        </div>
    )
}

export default Message