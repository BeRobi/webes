import { useState } from "react";
import AdminModel from "../model/AdminModel";
import { lista } from "../model/adatok";
import Kartya from "../view_component/Kartya";
import "./publik.css";

// komponensen kívül példányosítjuk a modellt
//const Model = new AdminModel();

export default function Publikus(props) {
  function kattintas(id) {
    console.log("szülőkomponensben", id);
  }
  return (
    <>
      <h2>Publikus oldal</h2>

      <div className="row">
        {lista.map((elem, index) => {
          return <Kartya obj={elem} key={index} kattintas={kattintas} />;
        })}
      </div>
    </>
  );
}
