import "./styles.css";
//import FoolderStucture from "./FolderStructure";
import React from "react";
//import data from "./data.json";
import TablularFolder from "../TablularFolder";
import { datatable } from "./table.data.js";

export default function App() {
  //<FoolderStucture data={data} /> <TablularFolder Json={datatable} />
  return (
    <div className="App">
      <TablularFolder Json={datatable} />
    </div>
  );
}
