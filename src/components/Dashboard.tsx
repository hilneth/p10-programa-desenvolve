import Image from "next/image"
import Link from "next/link"
import CustomPieChart from "../data/CustomPie"
import BookCard from "./DetalheLivro"

export default function Dashboard() {
  return (
    <main>
      <div className="bg-white w-[508px] h-[544px] mt-[34px] mb-[148px] ml-[166px] mr-[197px] rounded-[30px] p-5">
        <h3 className="text-black"><strong>Dashboard</strong></h3>
        <CustomPieChart />
        <BookCard />
      </div>
    </main>
  )
}