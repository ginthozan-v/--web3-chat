import React, { useState } from 'react'
import Image from 'next/image'
import { ByMoralis, useMoralis } from 'react-moralis'
import { LogoutIcon } from '@heroicons/react/outline'
import { PencilAltIcon } from '@heroicons/react/solid'

import Avatar from './Avatar'
import DialogModal from './DialogModal'

import Cover from '../public/cover.jpg'


const Profile = () => {
    const { logout, isUserUpdating, user } = useMoralis();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className='flex-none'>
                <div className='relative h-28 sm:h-52 full'>
                    <Image src={Cover} layout="fill" objectFit="cover" />
                    <LogoutIcon
                        className='w-6 h-6 absolute bottom-2 right-2 text-white cursor-pointer opacity-75 hover:opacity-100 transition duration-500'
                        onClick={logout} />
                </div>
                <div className='relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-slate-100 border-4 mx-auto -mt-16'>
                    <Avatar username={user} />
                </div>

                <h1 className='text-center text-base sm:text-2xl font-extrabold text-slate-700 flex gap-2 justify-center items-start'>
                    {user.getUsername()}

                    <button disabled={isUserUpdating} onClick={() => setIsModalOpen(!isModalOpen)}>
                        <PencilAltIcon
                            className='w-4 h-4 opacity-60 hover:opacity-100 transition duration-500 cursor-pointer'
                        />
                    </button>
                </h1>
                <ByMoralis variant='dark' width={120} style={{ margin: "0 auto" }} />
            </div>
            <DialogModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    )
}

export default Profile