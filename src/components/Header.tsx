import Image from "next/image"
import Link from "next/link"
import brand from "../../public/images/brand.svg"
import perfil from "../../public/images/perfil.svg"

export default function Header() {
  return (
    <header className="bg-white w-[1108px] h-[80px] mt-[24px] mb-[60px] ml-[166px] mr-[166px] rounded-[40px] flex">
      <Image className="self-center mt-[25px] mb-[25px] ml-[28px] mr-[243px]"
      src={brand.src}
      height={29}
      width={168}
      alt="Bookshelf Logo"
      />
      <nav className="w-[287px] h-[39px] text-black self-center flex justify-between">
        <Link className="" href={""}>Início</Link>
        <Link href={""}>Livros</Link>
        <Link href={""}>Sobre Nós</Link>
      </nav>
      <Link href={""} className="bg-stone-200 pl-[10px] rounded-[30px] mr-[28px] ml-[243px] text-black self-center justify-self-end">Perfil
        <Image className="inline pl-[3px]"
        src={perfil.src}
        height={44}
        width={44}
        alt="Perfil"
        />
      </Link>
    </header>
  )
}