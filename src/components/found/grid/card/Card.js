import React from "react"
import "./Card.css"

export default function Card({ property }) {
  const { img, title, type, location, price } = property

  return (
    <div className="card-content">
      <img
        src="https://images.pexels.com/photos/892618/pexels-photo-892618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="img"
      />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p>{type}</p>
        <p>{location}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}
