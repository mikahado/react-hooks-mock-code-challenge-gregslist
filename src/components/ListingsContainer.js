import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({search}) {

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

  const cardsToDisplay = listings
    .filter(card => 
        card.description.includes(search))
    .map((listingsObj) => 
      <ListingCard 
        key={listingsObj.id}
        listing={listingsObj} 
        onDelete={handleDeleteListing}/>
    )

  return (
    <main>
      <ul className="cards">
        {cardsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
