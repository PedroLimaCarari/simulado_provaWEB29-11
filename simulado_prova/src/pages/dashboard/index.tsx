import router from 'next/router';
import React from 'react';

export default function Dashboard() {
  return (
    <div className='min-h-screen flex'>

      <div className='hidden lg:block relative w-2/3 bg-gradient-to-bl from-red-500 via-red-700 via-blue-700 to-blue-500'>
      </div>

      <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white'>
        {/* Right side with original content */}
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <h2 className='mt-6 text-3x1 font-semibold text-blue-700'>Dashboard</h2>
          </div>
          <div>
            <h2 className='mt-6 text-2x1 font-semibold text-blue-700'>Bem vindo ao Dashboard</h2>
          </div>
          </div>
          <div className='mb-4'>
            <button type='button' onClick={()=> router.push('/login')} className='inline-block w-full py-4 px-8 leading-none text-white bg-blue-700 hover:bg-blue-900 font-semibold rounded shadow'>Voltar ao Login</button>
          </div>
        </div>
      </div>
  );
};
