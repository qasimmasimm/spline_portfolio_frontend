import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";


export default function Mainlayout() {
  

  return (
    <>
      <Navbar/>
      <main style={{ minHeight: "75vh" }}>
        <Outlet />
      </main>
    </>
  );
}