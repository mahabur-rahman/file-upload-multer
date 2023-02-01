import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [img, setImg] = useState("");

  // input change
  const handleChange = (e) => {
    setImg(e.target.files[0]);
  };

  //   file upload
  const uploadFile = async (e) => {
    e.preventDefault(); // no need cz of excluded of form

    // call api
    const url = `http://localhost:5000/api/file`;

    const formData = new FormData();

    formData.append("img", img);

    try {
      const res = await axios.post(url, formData);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main_div">
      <h1>Upload file</h1>

      <input multiple type="file" onChange={handleChange} />
      <br />
      <br />
      <button type="submit" onClick={uploadFile}>
        Submit File
      </button>

      <br />
      <h1>image preview</h1>

      <br />
      <br />

      <img src={img && URL.createObjectURL(img)} alt="img" width={300} />
    </div>
  );
};

export default Upload;
