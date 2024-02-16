import './App.css';
import React, {JSX} from "react";
import GiftInfo from "./components/GiftInfo";
import GiftImage from "./components/GiftImage";

export default function App() {
  return (
      <section className="section-center">
        <GiftImage />
        <GiftInfo />
      </section>
  );
}
