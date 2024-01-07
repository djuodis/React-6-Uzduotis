import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Buttons from "./Buttons"

const Main = () => {
  const [cards, setCards]                 = useState([])
  const [filteredData, setFilteredData]   = useState([])

  useEffect(() => {
    const URL                             = "https://robust-safe-crafter.glitch.me/"

    const fetchData = async () => {
      try {
        const response                    = await fetch(URL)
        const data                        = await response.json()
        setCards(data)
        setFilteredData(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const filterDataByCity = (city) => {
    if (city !== "All") {
      const filter                        = cards.filter((x) => x.city === city)
      setFilteredData(filter)
    } else {
      setFilteredData(cards)
    }
  }

  return (
    <>
    
   
    <main>
      <p>Filter                           : </p>
      <div className                      = "filter-section">
        <Buttons filterDataByCity         = {filterDataByCity} />
        <Link to                          = "/form" className="add-property">
          Add Property +
        </Link>
      </div>
        </main>
        <div className                    = "cards">
  {filteredData.map((x, index) => (
    <div key                              = {`${x.city}-${index}`} className="card">
      <img src                            = {x.image} alt={x.city} />
      <div className                      = "text">
        <h3 className                     = "price">€{x.price}</h3>
        <p className                      = "city">{x.city}</p>
        <p>{x.description}</p>
      </div>
    </div>
  ))}
</div>
      </>
  )
}

export default Main
