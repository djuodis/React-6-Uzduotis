import React, { useState } from 'react'
import Header from '../components/Header'

const Form = () => {
  const URL                             = "https://robust-safe-crafter.glitch.me/"
  const [image, setImage]               = useState('')
  const [price, setPrice]               = useState('')
  const [description, setDescription]   = useState('')
  const [city, setCity]                 = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (image && city && price && description) {
      const data = {
        image,
        city,
        price                           : Number(price),
        description
      }

      postData(data)
    } else {
      alert("Užpildykite visus laukelius")
    }
  }

  const postData = (data) => {
    fetch(URL, {
      method                            : 'POST',
      headers: {
        "Content-Type"                  : "application/json",
      },
      body                              : JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      alert(result.msg)
      window.location.href              = "/"
    })
    .catch(e => console.log(e))
  }

  return (
    <>
      <Header title                     = "Add your property for sale" subtitle="Yes, you can sell where you live and cash!" />
      <main id                          = "add">
        <form id                        = "form" onSubmit={handleSubmit}>

          <h3>Add Property</h3>
          <label htmlFor                = "image">Img</label>
          <input
            id                          = "image"
            type                        = "text"
            placeholder                 = "https://unsplash.com/"
            value                       = {image}
            onChange                    = {(e) => setImage(e.target.value)}
          />

          <label htmlFor                = "price">Price, Eur</label>
          <input
            id                          = "price"
            type                        = "text"
            placeholder                 = "50000"
            value                       = {price}
            onChange                    = {(e) => setPrice(e.target.value)}
          />

          <label htmlFor                = "description">Description</label>
          <textarea
            id                          = "description"
            rows                        = "10"
            placeholder                 = "anything you would like to say?"
            value                       = {description}
            onChange                    = {(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor                = "cities">City</label>
          <select
            id                          = "cities"
            name                        = "city"
            value                       = {city}
            onChange                    = {(e) => setCity(e.target.value)}
          >
            <option value               = "" disabled>Select City</option>
            <option value               = "Vilnius">Vilnius</option>
            <option value               = "Kaunas">Kaunas</option>
            <option value               = "Klaipeda">Klaipeda</option>
          </select>

          <button type                  = "submit" className="add-property">Add Property +</button>

        </form>
      </main>
    </>
  )
}

export default Form
