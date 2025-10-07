"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center justify-center p-2 cursor-pointer"
      >
        <Menu className="w-8 h-8" />
      </button>

      {open && (
        <div className="absolute top-20 right-10 bg-white shadow-lg rounded-xl flex flex-col items-start p-4 space-y-3 md:hidden z-50">
          <Link href={"/"}>Início</Link>
          <Link href={"/livros"}>Livros</Link>
          <Link href={"/addlivro"}>Adicionar</Link>
        </div>
      )}
    </>
  );
}
