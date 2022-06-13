import { useEffect, useState } from "react";
import { FieldErrors, Path, UseFormRegister, UseFormWatch } from "react-hook-form";
import Input from "../Input/Input";
import Attacher from "../PdfAttacher/Attacher";
import { InputFormComponent, Heading } from "./styles";
import { Inputs } from "../Form/Form";

const InputForm = ({
  title,
  data,
  Resume,
  register,
  errors,
  watch,
  file,
  setFile
}: {
  title: string;
  data: any;
  Resume: Boolean;
  file:any,
  setFile: any,
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  watch: UseFormWatch<Inputs>
}) => {


  return (
    <InputFormComponent>
      <Heading>{title}</Heading>
      {Resume && <Attacher  watch = {watch} errors={errors}  register={register}/>}
      {data.map((items: any) => {
        return (
          <Input
            errors={errors}
            register={register}
            key={items.id}
            {...items}
            File= {File}
            setFile = {setFile}
          />
        );
      })}
    </InputFormComponent>
  );
};

export default InputForm;
