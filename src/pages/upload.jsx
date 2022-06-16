import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Title,
  UploadForm,
  FormInput,
  ShowSelected,
  UpImage,
  SumitBtn,
  FormLabel,
  ShowMessage,
} from "../styles/Upload.style";

const theCatUrl = "https://api.thecatapi.com/v1/images/upload";
const key = "70a140d6-a3c3-42f0-a7a0-954e5966763d";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [isFilePicked, setIsFiledPicked] = useState(false);
  const [showMsg, setShowMsg] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleChange = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setIsFiledPicked(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);

    const params = {
      method: "POST",
      headers: {
        //"Content-Type": "multipart/form-data",
        Accept: "application/json",
        "x-api-key": key,
      },
      body: formData,
    };
    try {
      const response = await fetch(theCatUrl, params);

      if (response.status !== 201) {
        setShowMsg("Oops...Something went wrong!");
        setTimeout(() => setShowMsg(""), 4000);
        const msg = `Something went wrong ${response.status}`;
        throw new Error(msg);
      }
      setShowMsg("Picture uploaded successfully!");
      setTimeout(() => setShowMsg(""), 3000);
      setSelectedFile();
      setIsFiledPicked(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Wrapper>
      <Title>Upload your image (gif/jpg/png)</Title>
      {isFilePicked && (
        <ShowSelected>
          <UpImage src={preview} />
          {/* <FileName>{selectedFile.name}</FileName> */}
        </ShowSelected>
      )}
      <UploadForm method="POST">
        <FormLabel htmlFor="upload-photo">
          <span role="img" aria-labelledby="attached">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-paperclip"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
            </svg>
          </span>
          &nbsp;
          {isFilePicked ? "Change Image..." : "Choose Image..."}
        </FormLabel>
        <FormInput
          type="file"
          name="file"
          id="upload-photo"
          onChange={(e) => handleChange(e)}
        />
      </UploadForm>
      <SumitBtn type="button" onClick={handleSubmit}>
        Upload &#8686;
      </SumitBtn>
      {showMsg && (
        <ShowMessage isFilePicked={isFilePicked}>{showMsg}</ShowMessage>
      )}
    </Wrapper>
  );
};

export default Upload;
