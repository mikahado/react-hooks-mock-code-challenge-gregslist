import React, { useState } from "react";



function ListingCard({listing, onDelete}) {

  const [like, setLike] = useState(false)

  const { id, image, description, location } = listing

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`)
    .then (resp => resp.json())
    .then (() => {
      onDelete(id)
    })
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button onClick={()=>setLike(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=>setLike(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
