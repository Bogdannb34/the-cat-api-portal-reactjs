import styled from "styled-components";

export const PublicImgWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PublicImgTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
`;

export const Selection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const Category = styled.select`
    width: 12.5rem;
    margin: .7rem .7rem;
    cursor: pointer;
    padding: .6rem 1rem;
    border-radius: 0.3rem;
    background-color: black;
    color: white;
`;

export const ShowImgNumber = styled.select`
    width: 12.5rem;
    margin: .7rem .7rem;
    cursor: pointer;
    padding: .6rem 1rem;
    border-radius: 0.3rem;
    background-color: black;
    color: white;
`;

export const GetImagesBtn = styled.button`
    font-size: 1.5rem;
    background-color: white;
    border-radius: 0.5rem;
    margin: 1rem 0;
    padding: .8rem;
    outline: .1em solid black;
    outline-offset: 0.2rem;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }
`;

export const RenderPics = styled.div`
    max-width: 80%;
    //max-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 1.3rem;
    padding: .3rem;
    margin-bottom: 1rem;
    justify-content: center;
`;

export const ImageWrapper = styled.div`
    position: relative;
    flex: 1 1 auto;

    &:hover::after {
        content: "\u2764";
        padding: 5px 10px;
        background-color: white;
        color: red;
        /* display: block; */
        position: absolute;
        border: 1px solid white;
        border-radius: 50%;
        left: 14px;
        top: 13px;
        cursor: pointer;
    }
`;

export const Image = styled.img`
    max-width: 23vw;
    height: auto;
    object-fit: cover;
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3); 
    outline: .1em solid black;
    outline-offset: 0.2rem;
`;