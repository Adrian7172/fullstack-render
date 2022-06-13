import React from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { Inputs } from "../Form/Form";
import { AddInfoComponent, Content, TextArea } from "./styles";

const AddInfo = ({
  name,
  errors,
  register,
}: {
  name: Path<Inputs>;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}) => {
  return (
    <AddInfoComponent>
      <Content>
        <h1>ADDITIONAL INFORMATION</h1>
        <TextArea
        className={errors[name] ? "border": ""}
          {...register(`${name}`, {
            required: false,
            pattern: /^[a-zA-Z0-9, .-=+()&]{10,50}$/i,
          })}
          placeholder="Add a cover letter or anything else you want to share."
        ></TextArea>
        {errors[name] && <div className="error">Should be greater than 10 characters and should not include any unnecessary Special Character </div>}

        <hr />
      </Content>
    </AddInfoComponent>
  );
};

export default AddInfo;
