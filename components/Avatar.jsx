import Image from 'next/image'

import ProfilePic from '../public/profile.jpg'

const Avatar = ({ username }) => {
    return (
        <div>
            <Image src={ProfilePic} layout='fill' objectFit="cover" className=' bg-slate-500 rounded-full' />
        </div>
    )
}

export default Avatar