import Image from "next/image";
import Header from './../components/main-page/header/Header';
import Body from "@/components/main-page/body/Body";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <Header/>
      <Body/>
    </main>
  );
}
