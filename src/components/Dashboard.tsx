import CustomPieChart from "../data/CustomPie"
import BookCard from "./BookCard"
import ListBook from "./ListBook";

export default function Dashboard() {
  return (
    <main className="w-full lg:w-[95%] xl:w-[1108px] flex rounded-[30px]  p-4 justify-center lg:justify-between">
      <div className="bg-white w-[508px] min-h-[544px] rounded-[30px] p-5">
        <h3 className="text-black">
          <strong>Dashboard</strong>
        </h3>
        <CustomPieChart />
        <h3 className="text-black">
          <strong>Livro recente</strong>
        </h3>
        <BookCard
          id="1"
          title="Título do Livro"
          date="16/09/2025"
          genre="Ação"
          rating={2.5}
          status="A iniciar"
          imageBook="/images/meme.jpg"
          authorName="Nome do Autor"
          sinopse="Sinopse"
        />
      </div>
      <div className="hidden lg:flex">
        <ListBook />
      </div>
    </main>
  );
}