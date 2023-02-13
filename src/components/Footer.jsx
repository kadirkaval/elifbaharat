import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {FaMapMarkerAlt} from "react-icons/fa";
import logo from "../assets/logo.png"
import FloatingWhatsappButton from "./FloatingWhatsappButton";

export default function Footer() {
  return (
    
      <div className="bg-[#f7e6d4] border-b shadow-md z-50 p-2 mt-6 relative bottom-0 w-[100%]">
        {
          
          <div className="max-w-6xl mx-auto">
            <ul className="sm:grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 space-x-10 items-center">
            <li>
              <div className="w-full sm:h-[20vh] md:h-[25vh] z-10 overflow-x-hidden mt-6 md:mt-0 md:ml-2">
                <MapContainer
                  center={[40.3519511, 27.9697129]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[40.3519511, 27.9697129]}>
                    <Popup>Haydar Çavuş, Sunullah Cd., 10200 Bandırma/Balıkesir</Popup>
                  </Marker>
                </MapContainer>
              </div>
              </li>
                <li>
                <img className="mt-6 h-14 mx-auto" src={logo} alt="" />
                </li>
            <li>
             <div>
                <p className="flex items-center mt-6 mb-3 font-semibold text-xl">
                  <FaMapMarkerAlt className="text-green-700" />
                </p>
                <p className="mb-3">Haydar Çavuş, Sunullah Cd., 10200 Bandırma/Balıkesir</p>
                <p className="mb-3">gsm: +90 507 008 48 35</p>
                <p>e-mail: galip.kaval@gmail.com</p>
              </div>
             </li>
             <li>
             <FloatingWhatsappButton/>
             </li>  
            </ul>            
          </div>
          
        }
      </div>

  );
}
