import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <div className='flex flex-col items-center justify-center h-screen'>
          <h1 className='text-3xl font-bold'>Welcome {session.user?.name}</h1>
          <p>
            Signed in as: <strong>{session.user?.email}</strong>
          </p>
          <button
            className='my-2 p-2 px-6 w-fit self-center text-white font-bold bg-blue-500 rounded-full group-hover:bg-blue-600 duration-300'
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-bold'>Sign in</h1>
        <br />
        <button
          className='my-2 p-2 px-6 w-fit self-center text-white font-bold bg-blue-500 rounded-full group-hover:bg-blue-600 duration-300'
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </>
  );
};

export default Home;
