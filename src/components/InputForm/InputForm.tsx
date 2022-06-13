import { useEffect, useState } from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
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
  File,
  setFile,
}: {
  title: string;
  data: any;
  Resume: Boolean;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  watch: UseFormWatch<Inputs>;
  File: any;
  setFile: any;
}) => {
  return (
    <InputFormComponent>
      <Heading>{title}</Heading>
      {Resume && (
        <Attacher
          errors={errors}
          register={register}
          File={File}
          setFile={setFile}
        />
      )}
      {data.map((items: any) => {
        return (
          <Input
            errors={errors}
            register={register}
            key={items.id}
            {...items}
          />
        );
      })}
    </InputFormComponent>
  );
};

export default InputForm;
