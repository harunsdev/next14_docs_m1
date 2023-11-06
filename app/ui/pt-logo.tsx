// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { poppins } from "@/app/ui/fonts";
import Image from "next/image";

export default function PetekLogo() {
  return (
    <div
      className={`${poppins.className} flex flex-row leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image
        src="/hsimages/pt_logo_black.svg"
        width={60}
        height={60}
        alt="Petek Logo"
        className=''
      />
      {/* <p className="text-[44px]">Petek</p> */}
      
      <p className="text-5xl ml-4">Petek</p>
    </div>
  );
}
