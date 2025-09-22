import Image from "next/image";
import meme from "../../public/images/meme.jpg"
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <img src={meme.src} alt="meme" />
      <p>Nosso aplicativo vem aqui</p>
    </>
  );
}
