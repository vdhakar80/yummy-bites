import axios from "axios";
import React, { useState } from "react";
import { Buffer } from "buffer";

function UploadImage() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [itemType, setItemType] = useState("");
  const [image, setImage] = useState<any>({});
  // const [file, setFile] = useState<any>({});
  const [imgUrl, setImgUrl] = useState("");
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
        console.log("imageUrl", data.imageUrl);
        setImage(data.temp);
        // setImgUrl(data.temp);
        // const img = new Buffer(data.imageUrl.data, "binary").toString("base64");
        // setImgUrl("data:" + data.imageUrl.contentType + ";base64," + img);
      })
      .catch((error) => console.error(error));
  };
  // const handleFormSubmit = (event: any) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   // formData.append("image", file);
  //   fetch("http://localhost:5000/upload", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("imageUrl", data.imageUrl);
  //       const img = new Buffer(data.imageUrl.data, "binary").toString("base64");

  //       setImgUrl("data:" + data.imageUrl.contentType + ";base64," + img);
  //     })
  //     .catch((error) => console.error(error));
  // };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const body = {
      image: image,
      name: itemName,
      price: price,
      description: description,
      type: itemType,
    };

    axios.post("http://localhost:5000/items", body);
  };
  console.log("image object in state", image);
  return (
    <div>
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
            Item Name
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
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemType">Example select</label>
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
        <button type="submit">Upload</button>
        <img src={image} />
      </form>
    </div>
  );
}

export default UploadImage;
