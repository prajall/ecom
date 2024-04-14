//@ts-nocheck
"use client";

import React, { useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState<File | null>(null);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "gagandemoapp");
    data.append("cloud_name", "dwjhsf65j");
    data.append("cloud_name", "realtime chatapp");

    try {
      console.log(image);
      const uploadedImage = await fetch(
        "https://api.cloudinary.com/v1_1/dwjhsf65j/image/upload ",
        {
          method: "post",
          body: data,
        }
      );
      console.log(uploadedImage);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            console.log(e.target.files[0]);
            setImage(e.target.files[0]);
          }
        }}
      />
      <button onClick={uploadImage}>upload</button>
    </div>
  );
};

export default UploadImage;
