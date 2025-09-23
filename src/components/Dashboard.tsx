import Image from "next/image"
import Link from "next/link"
import CustomPieChart from "../data/CustomPie"
import BookCard from "./BookCard"
import Star from "../../public/images/Star.svg"

export default function Dashboard() {
  return (
    <main className="flex">
      <div className="bg-white w-[508px] h-[544px] mt-[34px] ml-[166px] mr-[167px] rounded-[30px] p-5">
        <h3 className="text-black"><strong>Dashboard</strong></h3>
        <CustomPieChart />
        <h3 className="text-black"><strong>Livro recente</strong></h3>
        <BookCard />
      </div>
      <div className="flex flex-col gap-3 w-[430px] h-[544px] mt-[34px] rounded-[30px]">
        <div className="w-[430px] flex gap-3">
          <button className="bg-white text-black justify-self-start w-[50px] h-[50px] rounded-[30px]">
            Icon
          </button>
          <input className="bg-white text-black justify-self-end w-[380px] rounded-[30px] p-3" type="text" placeholder="Pesquisa"/>
        </div>
        <div className="bg-white h-[450px] flex flex-col gap-2 overflow-auto rounded-[30px] p-5">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </main>
  )
}