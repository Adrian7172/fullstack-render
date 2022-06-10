import React, { useState } from "react";
import { AttacherComponent, TakeInput } from "./styles";

const Attacher = ({
  pdfUpload,
  setPdfUpload,
}: {
  pdfUpload: any;
  setPdfUpload: any;
}) => {
  const [error, setError] = useState('');
  const [File, setFile] = useState("Attach Resume/cv");

  //Handle pdf file upload
  let filetype = ["application/pdf"];
  const HandlePdfChange = (e: any) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && filetype.includes(selectedFile.type)) {

        if(selectedFile.size > 5000 * 1024){
          setError("PDF file size should be below 5MB")
        }else{
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
              setPdfUpload(e.target?.result);
              setFile(selectedFile.name);
              setError('')
        };
      }
      }else{
        setPdfUpload(null)
        setError("Please select a valid Resume(PDF).")

      }
    } else {
      setPdfUpload(null);
    }
  };
  return (
    <AttacherComponent>
      <span className="label">
        Resume/CV <span className="star">✱</span>
      </span>
      <TakeInput>
        <input type={"file"} onChange={HandlePdfChange} />
        <span className={error ? "border attachButton": "attachButton"}>
          {File === "Attach Resume/cv" && (
            <svg width="1.6rem" height="1.6rem" viewBox="0 0 16 16">
              <path d="M5 5V9C5 10.7 6.3 12 8 12C9.7 12 11 10.7 11 9V4.5C11 2 9 0 6.5 0C4 0 2 2 2 4.5V10C2 13.3 4.7 16 8 16C11.3 16 14 13.3 14 10V4H12V10C12 12.2 10.2 14 8 14C5.8 14 4 12.2 4 10V4.5C4 3.1 5.1 2 6.5 2C7.9 2 9 3.1 9 4.5V9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5H5Z"></path>
            </svg>
          )}
          <span className="attachButton__text">{File}</span>
        </span>
        <span className={error ? "error" : "display error"}>{error}</span>
      </TakeInput>
    </AttacherComponent>
  );
};

export default Attacher;
