import React from "react";
import { UseFormRegister, FieldErrors, Path } from "react-hook-form";
import { Inputs } from "../Form/Form";
import { InputComponent, TakeInput } from "./styles";
import { BsChevronDown } from "react-icons/bs";

const SelectType = ({
  title,
  errorMessage,
  required,
  register,
  errors,
  options,
}: {
  title: string;
  errorMessage: string;
  required: Boolean;
  options: any;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}) => {
  // const option = "option"
  console.log(errors.option)
  return (

    <>
      <InputComponent>
        <div>
          <span className="label">
            {title} {required && <span className="star">✱</span>}
          </span>

          <TakeInput>
            <select
             {...register("option", {
              required: true
           })}
              className={errors.option ? "select border" :  "select"}
            >
              {options.map(({ id, option, value }: { id: any; option: string; value: string }) => {
                return <option key={id} value= {value}>{option}</option>;
              })}
            </select>
            <BsChevronDown className="right-icon" />
          </TakeInput>
        </div>
        <div className={ errors.option ? "error" : "display error"}>
          {errorMessage}
        </div>
      </InputComponent>
    </>
  );
};

export default SelectType;
