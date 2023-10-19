import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={85}
          height={20}
          className='object-contain'
        />
        <h2 className="text-3xl text-primary font-bold">NexDrive</h2>
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-black bg-primary rounded-full min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;
