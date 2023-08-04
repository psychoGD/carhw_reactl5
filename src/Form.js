import React, { useState } from 'react'

export default function Form({addCar}) {
    const [model, setModel] = useState("");
  const [vendor, setVendor] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any additional actions here, like submitting the form data to a server.
    // For this example, we'll just display the form data in the console.
    console.log("Form Data:");
    console.log("Model:", model);
    console.log("Vendor:", vendor);
    console.log("Price:", price);
    console.log("Image URL:", imageUrl);

    // Reset form fields after submission
    setModel("");
    setVendor("");
    setPrice("");
    setImageUrl("");
    let obj = 
      {
        id: 7,
        model: model,
        vendor: vendor,
        price: price,
        imageUrl: imageUrl,
    }
    
    addCar(obj);
    
  };
  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />

        <label htmlFor="vendor">Vendor:</label>
        <input
          type="text"
          id="vendor"
          name="vendor"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          step="0.01"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <button type="submit">Add to Cart</button>
      </form>
    </div>
  )
}
