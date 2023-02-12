import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import logo from "../assets/logo.png"

export default function Header() {
    const [pageState, setPageState] = useState("Sign in");
  // location hangi sayfada olduğumuzun path ini almamızı sağlıyor
  const location = useLocation();
  // sayfalarası geçiş için
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setPageState("Profile")
        }else{
            setPageState("Sign in")
        }
    })
  }, [auth]);

  function pathMatchRoute(route) {
    if (location.pathname === route) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={logo}
            alt="logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-md font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Anasayfa
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              İndirimli Ürünler
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/category/stack") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/category/stack")}
            >
              Dökme Ürünler
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/category/packed") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/category/packed")}
            >
              Paketli Ürünler
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
