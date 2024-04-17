import React, { useState } from "react";
import "./ImageUploader.scss";

interface Props {
  handleAddImage: Function;
}

const ImageUploader: React.FC<Props> = ({ handleAddImage }: Props) => {
  const [over, setOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!over) setOver(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOver(false);
    const newFile = e.dataTransfer.files[0];

    if (newFile) {
      const imageUrl = URL.createObjectURL(newFile);

      handleAddImage(imageUrl);
    }
  };

  const handleUploadButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";

    fileInput.addEventListener("change", (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];

      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);

        handleAddImage(imageUrl);
      }
    });

    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  };
  return (
    <div
      className={`upload-box ${over ? "over" : ""}`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag and drop to upload</p>
      <button
        type="button"
        className="button"
        onClick={(e) => {
          handleUploadButtonClick(e);
        }}
      >
        Upload
      </button>
      <p>PNG, JPG, JPEG</p>
    </div>
  );
};

export default ImageUploader;
