"use client";

import { Book, User } from "lucide-react";

interface NavigationMenuProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function NavigationMenu({
  activeTab = "Books",
  onTabChange,
}: NavigationMenuProps) {
  const tabs = [
    { id: "Inicio", label: "Início" },
    { id: "Books", label: "Books" },
    { id: "SobreNos", label: "Sobre nós" },
  ];

  return (
    <div className="w-full max-w-[1108px] h-20 bg-white rounded-[40px] mx-auto mt-6 mb-15 m-3 flex items-center justify-between px-7 shadow-sm">
      <div className="flex items-center gap-2">
        <p className="text-2xl text-[#242323] font-bold">Bookself</p>
      </div>

      <nav className="flex items-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange?.(tab.id)}
            className={`px-4 h-[39px] rounded-lg text-base font-bold transition-colors ${
              activeTab === tab.id
                ? "text-[#242323] bg-gray-100"
                : "text-[#7E7E7E] hover:text-[#242323] hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <div className="w-11 h-11 bg-[#242323] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
          <User className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
