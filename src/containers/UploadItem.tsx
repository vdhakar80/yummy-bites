import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function UploadItem() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [itemType, setItemType] = useState("pizza");
  const [image, setImage] = useState("");

  const handleFileSelect = (event: any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    console.log("inside onchange", file, "\n", formData);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.imageUrl);
      })
      .catch((error) => console.error(error));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const body = {
      image: image,
      name: itemName,
      price: price,
      description: description,
      type: itemType,
    };
    axios
      .post("http://localhost:5000/items", body)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <>
          <h1>Upload Item</h1>
          <div className="=" style={{ width: "500px" }}>
            {" "}
            <form onSubmit={handleSubmit} className="form-group">
              <div className="form-group">
                <label htmlFor="itemName" className="form-label">
                  Item Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="itemName"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>{" "}
              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="itemType">Item Type</label>
                <select
                  className="form-select"
                  id="itemType"
                  onChange={(e) => setItemType(e.target.value)}
                  value={itemType}
                >
                  <option value={"pizza"}>pizza</option>
                  <option value={"paratha"}>paratha</option>
                  <option value={"burger"}>burger</option>
                  <option value={"springroll"}>springroll</option>
                  <option value={"dosa"}>dosa</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="formFile" className="form-label">
                  upload
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={handleFileSelect}
                />
              </div>
              <br />
              {image && <img src={image} height={300} width={500} />}
              <br />
              <br />
              <button type="submit">Upload</button>
            </form>
          </div>
        </>
      </div>
    </>
  );
}

export default UploadItem;
