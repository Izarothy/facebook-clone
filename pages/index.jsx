import Head from "next/head";
import NavBar from '../components/NavBar.jsx'
import SideMenu from '../components/SideMenu.jsx'
import Main from '../components/Main.jsx'
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style>
          
        </style>
      </Head>
      <body className="font-montserrat bg-gray-900 min-h-screen flex flex-col text-white">
        <NavBar />
        <main className="grid grid-cols-uneven">
          <SideMenu />
          <Main />
          {/* TODO main menu stories
          TODO right side (scrollable) */}
        </main>
      </body>
    </div>
  );
}
