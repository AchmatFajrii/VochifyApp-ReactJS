// import React from "react";
// import '@splidejs/react-splide/css/skyblue';
import "./App.css";
import Header from "./components/Layouts/Templates/Header";
import Info from "./components/Fragments/InfoPromo";
import SocialMedia from "./components/Fragments/SocialMedia";
import Hero from "./components/Fragments/Hero";
import InfoGames from "./components/Fragments/InfoGames";
import FlashSale from "./components/Fragments/FlashSale";
import TopGames from "./components/Fragments/TopGames";
import CategoryGames from "./components/Fragments/CategoryGames";
import Benefit from "./components/Fragments/Benefit";
import UpdateTournament from "./components/Fragments/UpdateTournament";
import BlogGames from "./components/Fragments/BlogGames";
import Payment from "./components/Fragments/Payment";
import Footer from "./components/Layouts/Templates/Footer";

const App = () => {
  return (
    <>
      <div className="bg-primary">
        <Info />
        <SocialMedia />

        <Header />
        {/* Main Start */}
        <main className="mt-5 md:mt-10">
          <Hero />

          {/* Belum pecah element */}
          <InfoGames />
          <FlashSale />
          <TopGames />
          <CategoryGames />
          <Benefit />
          <UpdateTournament />
          <BlogGames />
          <Payment />
        </main>
        {/* MAIN End */}

        {/* FOOTER Start */}
        {/* Belum pecah fragment n element */}
        <Footer />
        {/* FOOTER End */}
      </div>
    </>
  );
};

export default App;
