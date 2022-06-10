import { useState } from "react";
import Input from "../Input/Input";
import Attacher from "../PdfAttacher/Attacher";
import { InputFormComponent, Heading } from "./styles";

const InputForm = ({
  title,
  data,
  Resume,
  onChange,
  Focus,
  handleFocus
}: {
  title: any;
  data: any;
  Resume: Boolean;
  onChange: any;
  Focus: any;
  handleFocus:any;
}) => {
  //get pdf
  const [pdfUpload, setPdfUpload] = useState(null);

  return (
    <InputFormComponent>
      <Heading>{title}</Heading>
      {Resume && <Attacher pdfUpload={pdfUpload} setPdfUpload={setPdfUpload} />}
      {data.map((items: any) => {
        return (
          <Input
            key={items.id}
            {...items}
            onChange={onChange}
            Focus={Focus}
            handleFocus={handleFocus}
          />
        );
      })}
    </InputFormComponent>
  );
};

export default InputForm;
