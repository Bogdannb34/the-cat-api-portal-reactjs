import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  TopWrapper,
  ImageDiv,
  OwnImg,
  DelBtn,
  ImageTitle,
} from "../styles/MyImages.style";

const myImagesUrl = "https://api.thecatapi.com/v1/images/?limit=10";
const delImgUrl = "https://api.thecatapi.com/v1/images";
const key = "70a140d6-a3c3-42f0-a7a0-954e5966763d";

const MyImages = () => {
  const [myImages, setMyImages] = useState([]);

  useEffect(() => {
    getMyImages();
  }, []);

  const getMyImages = async () => {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": key,
      },
    };
    try {
      const response = await fetch(myImagesUrl, params);

      if (response.status !== 200) {
        const msg = `Something went wrong ${response.status}`;
        throw new Error(msg);
      }
      const json = await response.json();
      console.log(json);
      setMyImages(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeImgHandler = async (id) => {
    const params = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "x-api-key": key,
      },
      body: null,
    };
    try {
      const response = await fetch(`${delImgUrl}/${id}`, params);

      if (response.status !== 204) {
        const msg = `An error occured: ${response.status}`;
        throw new Error(msg);
      }

      getMyImages();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <TopWrapper>
      <ImageTitle>
        My &nbsp;
        <span role="img" aria-labelledby="emoji">
          &#128008;
        </span>
        &nbsp; Images
      </ImageTitle>
      <Carousel width={600} autoPlay={true} showThumbs={false}>
        {myImages &&
          myImages.map((image) => (
            <ImageDiv key={image.id}>
              <OwnImg src={image.url} alt="animal_picture" />
              <DelBtn
                className="legend"
                onClick={() => removeImgHandler(image.id)}
                type="button"
              >
                Delete
              </DelBtn>
            </ImageDiv>
          ))}
      </Carousel>
    </TopWrapper>
  );
};

export default MyImages;
