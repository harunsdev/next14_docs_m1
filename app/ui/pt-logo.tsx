// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { poppins } from "@/app/ui/fonts";
import Image from "next/image";

export default function PetekLogo() {
  return (
    <div
      className={`${poppins.className} flex flex-row leading-none items-center text-white`}
    >     
    {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
    <Image
      src="/hsimages/unity_logo_black.svg"
      width= '80'
      height= '80'
      alt='Petek Logo'
      className='hidden md:block ml-4 md:ml-2'
    /> 
    <Image
      src="/hsimages/unity_logo_black.svg"
      width='60'
      height='60'
      alt="Petek Logo"
      className='block md:hidden ml-4 md:ml-2'
    /> 


    {/* <p className="text-[44px]">Petek</p> */}
    <p className="text-3xl ml-4 md:ml-2">Petek Design</p>      
    </div>
  );
}
