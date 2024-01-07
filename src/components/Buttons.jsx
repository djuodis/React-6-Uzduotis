import React, { useState } from 'react'

const Buttons = ({ filterDataByCity }) => {
  const cities                        = ["Vilnius", "Kaunas", "Klaipeda", "All"]
  const [activeCity, setActiveCity]   = useState("All")

  const handleCityClick = (city) => {
    filterDataByCity(city)
    setActiveCity(city) 
  }

  return (
    <div className                    = "cities">
      {cities.map((city) => (
        <button
          key                         = {city}
          className                   = {activeCity === city ? "city-btn active" : "city-btn"}
          onClick                     = {() => handleCityClick(city)}
        >
          {city}
        </button>
      ))}
    </div>
  )
}

export default Buttons
