import Image from "next/image";
import meme from "../../public/images/meme.jpg"

export default function Home() {
  return (
    <>
      <img src={meme.src} alt="meme" />
      <p>Nosso aplicativo vem aqui</p>
    </>
  );
}
