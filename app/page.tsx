import AcmeLogo from "@/app/ui/acme-logo";
import Link from "next/link";
//TODO: Chp#2 Styles
import styles from '@/app/ui/home.module.css'
import {poppins, lusitana} from '@/app/ui/fonts'
//TODO: Chp#3 Importing next Image component
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/*TODO: Chp#2 Figure black triangle */}
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          {/* TODO: Chp#2 Regular style */}
          <div className={styles.shape}></div>
          <p className={`${lusitana.className} antialiased text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          {/* TODO: Added a new p tag to use poppins font */}
          <p className={ `${poppins.className} antialiased text-xl`}> 
            <span className=' text-xl text-orange-600'>Poppins font</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam perspiciatis, sit at voluptates pariatur fugit maiores. Sit explicabo laboriosam culpa nemo officiis delectus necessitatibus aliquid voluptates, quia minus labore atque.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* TODO: Chp#3  Using regular HTML image tag not proper way. */}
          {/* <img
            src="/hero-mobile.png"           
            alt="Acme Logo"
          /> */}
          <Image
            // src='/hsimages/logo_petek_orange_figma.png'
            src='/hero-desktop.png'
            width={1000}
            height={760}
            className='hidden md:block' 
            alt='Desktop Hero Image'          
          /> 
          {/* Adding another image for mobile hero */}
          <Image
            src='/hero-mobile.png'
            width={560}
            height={620 }
            className='block md:hidden'
            alt='Mobile Hero Image'          
          />
        </div>
      </div>
    </main>
  );
}
