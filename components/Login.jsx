import Image from "next/image"
import { useMoralis } from "react-moralis";

import BG from '../public/meta-bg.png'

const Login = () => {
    const { authenticate, isInitializing, authError } = useMoralis();

    const auth = () => {
        authenticate().then((user) => {
            alert(user.get('ethAdress'))
        }).catch(err => {
            alert(err)
        })
    }

    if (authError) {
        alert(authError);
    }

    return (
        <div className="h-screen w-full bg-black relative grid items-center justify-center text-white">

            <div className="flex items-center justify-center z-10">
                <div className="relative group">
                    <div
                        className="absolute -inset-0.5 bg-white group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <button onClick={auth}
                        className="relative bg-white text-red-600 font-bold  py-3 px-6 rounded-md">
                        Login to the Web 3.0 Chat
                    </button>
                </div>
            </div>

            <Image src={BG} layout='fill' objectFit="cover" />
        </div>
    )
}

export default Login