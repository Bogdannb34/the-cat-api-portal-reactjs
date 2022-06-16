import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    font-weight: bold;
`;

export const UploadForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FormLabel = styled.label`
    cursor: pointer;
`;

export const FormInput = styled.input`
    opacity: 0;
    z-index: -1;
`;

export const ShowSelected = styled.div`
    width: 100%;
    height: auto;
`;

export const UpImage = styled.img`
    max-width: 25rem;
    height: auto;
`;

export const FileName = styled.p`
    font-size: 1rem;
`;

export const SumitBtn = styled.button`
    font-size: 1.1rem;
    height: 2.5rem;
    margin-top: 1rem;
    background-color: white;
    width: 10rem;
    padding: 0.5rem;
    color: black;
    outline: .1em solid black;
    outline-offset: 0.2rem;
    border-radius: 0.3rem;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: black;
    }
`;

export const ShowMessage = styled.div`
    font-size: 1.4rem;
    width: 50%;
    background-color: ${(props) => (props.isFilePicked ? "red" : "#34eb37")};
    color : white;
    border-radius: .5rem;
    margin-top: 1rem;
    padding: .5rem;
`;
