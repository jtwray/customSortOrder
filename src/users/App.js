import React from "react";
import { Users } from "./components/Users";
// import userAPI from "./utils/axios";
import "./styles.css";
// import axios from "axios";

export default function App() {
  return (
    <section style={{ width: "100vw", margin: "0 auto" }}>
      <Users />
    </section>
  );
}
