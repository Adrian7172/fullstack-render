import { useState } from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import Input from "../Input/Input";
import Attacher from "../PdfAttacher/Attacher";
import { InputFormComponent, Heading } from "./styles";
import { Inputs } from "../Form/Form";

const InputForm = ({
  title,
  data,
  Resume,
  handleFocus,
  register,
  errors,
}: {
  title: string;
  data: any;
  Resume: Boolean;
  handleFocus: any;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
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
            errors={errors}
            register={register}
            key={items.id}
            {...items}
            handleFocus={handleFocus}
          />
        );
      })}
    </InputFormComponent>
  );
};

export default InputForm;
