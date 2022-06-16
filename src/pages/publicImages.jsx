import React, { useState, useEffect } from "react";

import {
  PublicImgWrapper,
  PublicImgTitle,
  Selection,
  ShowImgNumber,
  Category,
  GetImagesBtn,
  RenderPics,
  ImageWrapper,
  Image,
} from "../styles/PublicImages.style";

const categoryUrl = "https://api.thecatapi.com/v1/categories";
const theCatApiUrl = "https://api.thecatapi.com/v1/images/search/?category_ids";

const PublicImages = () => {
  const [imageNumber, setImageNumber] = useState();
  const [catType, setCatType] = useState();
  const [category, setCategory] = useState([]);
  const [pictures, setPictures] = useState([]);

  const getCategories = async () => {
    const params = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const response = await fetch(categoryUrl, params);
      if (response.status !== 200) {
        const msg = `Something went wrong ${response.status}`;
        throw new Error(msg);
      }
      const json = await response.json();
      setCategory(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllImages = async () => {
    const params = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const response = await fetch(
        `${theCatApiUrl}=${catType}&limit=${imageNumber}`,
        params
      );
      if (response.status !== 200) {
        const msg = `Something went wrong ${response.status}`;
        throw new Error(msg);
      }
      const json = await response.json();
      setPictures(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const selectedCategory = (value) => {
    setCatType(value);
  };

  const setImagePerPage = (value) => {
    setImageNumber(value);
  };

  return (
    <PublicImgWrapper>
      <PublicImgTitle>All Users Public Uploaded Images</PublicImgTitle>
      <Selection>
        <Category
          aria-label="Default select"
          onChange={(e) => selectedCategory(e.target.value)}
        >
          <option>Select a category...</option>
          {category &&
            category.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              );
            })}
        </Category>
        <ShowImgNumber
          aria-label="Default select"
          onChange={(e) => setImagePerPage(e.target.value)}
        >
          <option>Select number of pics...</option>
          <option value={3}>3</option>
          <option value={9}>9</option>
          <option value={15}>15</option>
        </ShowImgNumber>
      </Selection>
      <GetImagesBtn type="button" onClick={getAllImages}>
        Show Images
      </GetImagesBtn>

      <RenderPics>
        {pictures &&
          pictures.map((image) => (
            <ImageWrapper key={image.id}>
              <Image key={image.id} src={image.url} alt={image.id} />
            </ImageWrapper>
          ))}
      </RenderPics>
    </PublicImgWrapper>
  );
};

export default PublicImages;
