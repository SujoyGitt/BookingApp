import React from "react";
import "./Home.scss";
import { Navbar } from "../../Components/navbar/Navbar";
import { Header } from "../../Components/Header/Header";
import { Featured } from "../../Components/Feature/Featured";
import { Popertylist } from "../../Components/PopertyList/Popertylist";
import { FeatureProperties } from "../../Components/FeatureProperties/FeatureProperties";
import { MailList } from "../../Components/MailList/MailList";
import { Footer } from "../../Components/Footer/Footer";
export const Home = () => {
  return (
    <div className="Home  ">
      <Navbar />
     <Header />
       <div className="homeContainer mt-12 flex flex-col justify-between w-full items-center gap-7 p-2 lg:p-0">
        <Featured />
        <h1 className="homeTitle">Browser by property type</h1>
        <Popertylist />
        <h1 className="homeTitle">Homes guest Love</h1>
        <FeatureProperties />
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};
