import Image from "next/image"
import Link from "next/link"
// import brand from "../../public/images/brand.svg"


import { User } from "lucide-react";
import MobileMenu from "./MobileMenu";


export default function Header() {

  
  return (
    <header className="w-[90%] xl:w-[1108px] h-[80px] rounded-full flex items-center justify-between px-6 bg-white">

      <Image
        className="md:h-7 w-32 md:w-40"
        src={"/images/brand.svg"}
        height={29}
        width={160}
        alt="Bookshelf Logo"
      />

      <nav className="hidden md:flex w-[240px] items-center justify-evenly">
        <Link href={""}>Início</Link>
        <Link href={""}>Livros</Link>
      </nav>

      <Link
        href={""}
        className="hidden md:flex h-11 bg-stone-100 font-bold justify-center items-center gap-3 p-3 rounded-full"
      >
        Perfil
        <User className="w-8 h-8 p-1 bg-black rounded-full text-white" />
      </Link>

      <MobileMenu />
    </header>
  );
}