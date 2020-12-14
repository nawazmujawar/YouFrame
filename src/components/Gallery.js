import React, { useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Gallery.css";
import uploadImg from "../images/upload.svg";

function Gallery() {
  const [data, setData] = useState([]);
  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };
  const onImageUpload = (event) => {
    console.log(event.target.files[0].name);

    setData((image) => [
      ...image,
      {
        picture: URL.createObjectURL(event.target.files[0]),
        picName: event.target.files[0].name.split(".")[0],
      },
    ]);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="content">
        <div className="header">
          <h1>Gallery</h1>
        </div>
        <Button onClick={onButtonClick} className="uploadBtn">
          {" "}
          <img src={uploadImg} />
          Upload
        </Button>
        <Container className="container">
          <Row>
            {(data || []).map((image, index) => (
              <Col xl={4} xs={12} key={index}>
                <div className="preview-image">
                  <img src={image.picture} />
                  <p>{image.picName}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="footer">
        Fullstack Challenge - 2020
        <input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          multiple
          ref={inputFile}
        />
      </div>
    </div>
  );
}

export default Gallery;
