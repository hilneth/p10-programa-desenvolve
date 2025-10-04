import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-start pt-4 bg-stone-100">
        <Header />
        <Dashboard />
      </div>
    </>
  );
}
