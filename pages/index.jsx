import Head from 'next/head'
import Login from '../components/Login'
import Profile from '../components/Profile'
import ChatRoom from '../components/ChatRoom'
import { useMoralis } from "react-moralis"

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen'>
      <Head>
        <title>Web3 Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Body */}
      <div className='bg-slate-100 max-w-screen-lg mx-auto'>
        <Profile />
        <ChatRoom />
      </div>
      {/* Body End */}

    </div>
  )
}
