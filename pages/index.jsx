import Head from "next/head";
import NavBar from '../components/NavBar.jsx'
import SideMenu from '../components/SideMenu.jsx'
import Main from '../components/Main.jsx'
import RightMenu from '../components/RightMenu'
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      </Head>
      <main className="font-montserrat bg-gray-900 min-h-screen flex flex-col text-white overflow-x-hidden">
        <NavBar />
        <div className="grid grid-cols-uneven">
          <SideMenu />
          <Main />
          <RightMenu />
        </div>
      </main>
    </div>
  );
}

