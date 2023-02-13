import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import logo from "../assets/logo.png"

export default function Header() {
    const [pageState, setPageState] = useState("Sign in");
    const [userEmail, setUserEmail] = useState("");
  // location hangi sayfada olduğumuzun path ini almamızı sağlıyor
  const location = useLocation();
  // sayfalarası geçiş için
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setPageState("Profile")
            setUserEmail(auth.currentUser.email)
        }else{
            setPageState("Sign in")
            setUserEmail("")
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
            className="sm:h-5 md:h-14 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-8 my-3">
            <li
              className={`cursor-pointer py-3 text-md font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && " border-b-[#558D3B] text-[#f80]"
              }`}
              onClick={() => navigate("/")}
            >
              Anasayfa
            </li>
            {/* <li
              className={`cursor-pointer py-3 text-md font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500 text-[#f80]"
              }`}
              onClick={() => navigate("/offers")}
            >
              İndirimli Ürünler
            </li> */}
            <li
              className={`cursor-pointer py-3 text-md font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/category/stack") && "border-b-[#558D3B] text-[#f80]"
              }`}
              onClick={() => navigate("/category/stack")}
            >
              Dökme
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/category/packed") && " border-b-[#558D3B] text-[#f80]"
              }`}
              onClick={() => navigate("/category/packed")}
            >
              Paketli
            </li>       
               {pageState === "Profile" && userEmail === "galip.kaval@gmail.com" &&(
                <li
                className={`text-gray-400 cursor-pointer px-3 py-3 text-md font-bold border-b-[3px] border-b-transparent ${
                  (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "border-b-[#558D3B] text-[#f80]"
                }`}
                onClick={() => navigate("/profile")}
              >
               { pageState}
              </li>
              )}                    
          </ul>
        </div>
      </header>
    </div>
  );
}
