import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";


function ListingsContainer() {

  const [listings, setListings] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(listings => setListings(listings))
  }, []) 

  function handleDeleteListing (id) {
    const updateListingWithDelete = listings
    .filter((listing) => listing.id !== id)
    setListings(updateListingWithDelete)
  }

  const listingCards = listings
    .map((listingsObj) => 
      <ListingCard 
        key={listingsObj.id}
        listing={listingsObj} 
        onDelete={handleDeleteListing}/>
    )

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
