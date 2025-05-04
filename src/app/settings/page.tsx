import React from 'react';
import { Inter } from 'next/font/google';
import SettingsForm from '@/components/forms/SettingsForm';

type Props = {}

const inter = Inter({subsets: ['latin']})

const page = (props: Props) => {
  return (
    <div className='flex flex-col w-full h-full pl-8 border-t-2 border-dotted border-[#27272a]'>
      <div className='border-l-2 border-r-2 h-full border-dotted border-[#27272a] mr-8'>
      <div className='sticky flex flex-col gap-1.5 border-b-2 border-dotted p-6 border-[#27272a] '>
        <span className={`text-4xl ${inter.className} font-bold tracking-tight `}>Settings</span>
        <span className={` ${inter.className} text-sm text-white/50 `}>Manage your account & other preferences</span>
      </div>
      <div className='mt-5 border-[#27272a] p-4 pb-9 h-fit border-b-2 border-dotted'>
      <SettingsForm />
      </div>
      </div>
    </div>
  )
}

export default page;