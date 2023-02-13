import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";
import Slider from "../components/Slider";
import { db } from "../firebase";

export default function Home() {
  // Offers
  // const [offerListings, setOfferListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        //get refrence
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc")
        );
        //execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        // setOfferListings(listings);
      } catch (error) {
        //toast.error("")
        console.log(error);
      }
    }
    fetchListings();
  }, []);
   // Places for rent 
   const [packedListing, setPackedListing] = useState(null);
   useEffect(() => {
     async function fetchListings() {
       try {
         //get refrence
         const listingsRef = collection(db, "listings");
         // create the query
         const q = query(
           listingsRef,
           where("type", "==", "packed"),
           orderBy("timestamp", "desc")
         );
         //execute the query
         const querySnap = await getDocs(q);
         const listings = [];
         querySnap.forEach((doc) => {
           return listings.push({
             id: doc.id,
             data: doc.data(),
           });
         });
         setPackedListing(listings);
       } catch (error) {
         //toast.error("")
         console.log(error);
       }
     }
     fetchListings();
   }, []);
   // Places for sale 
   const [stackListings, setStackListings] = useState(null);
   useEffect(() => {
     async function fetchListings() {
       try {
         const listingsRef = collection(db, "listings");
         const q = query(
           listingsRef,
           where("type", "==", "stack"),
           orderBy("timestamp", "desc")
         );
         //execute the query
         const querySnap = await getDocs(q);
         const listings = [];
         querySnap.forEach((doc) => {
           return listings.push({
             id: doc.id,
             data: doc.data(),
           });
         });
         setStackListings(listings);
       } catch (error) {
         //toast.error("")
         console.log(error);
       }
     }
     fetchListings();
   }, []);
  return (
    <div>
      <Slider />
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {/* {offerListings && offerListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">İndirili ürünler</h2>
            <Link to="/offers">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                indirimli ürünleri göster
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {offerListings.map((listing) => (
                <ListingItem key={listing.id} id={listing.id} listing={listing.data} />
              ))}
            </ul>
          </div>
        )} */}
        {packedListing && packedListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Paketli ürünler</h2>
            <Link to="/category/packed">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Paketli ürünleri göster
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {packedListing.map((listing) => (
                <ListingItem key={listing.id} id={listing.id} listing={listing.data} />
              ))}
            </ul>
          </div>
        )}
        {stackListings && stackListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Dökme ürünler</h2>
            <Link to="/category/stack">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Dökme ürünleri göster
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {stackListings.map((listing) => (
                <ListingItem key={listing.id} id={listing.id} listing={listing.data} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
