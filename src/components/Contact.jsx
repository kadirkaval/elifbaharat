import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

export default function Contact({ userRef, listing }) {
  const [contact, setContact] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getContact() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContact(docSnap.data());
      } else {
        toast.error("Could not get contact data");
      }
    }
    getContact();
  }, [userRef]);

  function onChange(e) {
    setMessage(e.target.value);
  }
  return (
    <>
      {contact !== null && (
        <div className="flex flex-col w-full">
          <p>
            İletişim: <span className="font-semibold">{contact.name}</span> - Ürün:  {listing.name.toLowerCase()}
          </p>
          <div className="mt-3 mb-6">
            <textarea
              name="message"
              id="message"
              rows="2"
              value={message}
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
            ></textarea>
          </div>
          <a
            href={`mailto:${contact.email}?Subject=${listing.name}&body=${message}`}
          >
            <button className="px-7 py-3 bg-blue-600 text-white text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center mb-6" type="button">Mesaj Gönder</button>
          </a>
        </div>
      )}
    </>
  );
}
