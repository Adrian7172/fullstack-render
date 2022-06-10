import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mantine/core";
import InputForm from "../InputForm/InputForm";
import { FormComponent, ButtonContainer } from "./styles";
import { Data } from "../../Data/FormData";
import AddInfo from "../AddInfo/AddInfo";
import SelectComponent from "../SelectComponent/SelectComponent";
import Recaptcha from "../Rechaptcha/Recaptcha";

enum GenderEnum {
  select = "select",
  female = "female",
  male = "male",
  other = "prefer not to say",
}

export interface Inputs {
  fullName: string;
  email: string;
  phone: number;
  currentCompany: string;
  linkdIn: string;
  twitter: string;
  gitHub: string;
  portfolio: string;
  otherWebsite: string;
  option: GenderEnum;
  AddtionalInfo: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //Handles the submit button
  const HandleSubmit = handleSubmit((data: any) => {
    console.log(data);
  });

  // console.log(errors.fullName)

  return (
    <FormComponent onSubmit={HandleSubmit}>
      {Data.map((items: any) => {
        return (
          <InputForm
            key={items.id}
            {...items}
            errors={errors}
            register={register}
          />
        );
      })}
      {/* <AddInfo name={'AddtionalInfo'}  Focus= {Focus} onChange={onChange} handleFocus={handleFocus}/>
      <SelectComponent  Focus= {Focus} onChange={onChange} handleFocus={handleFocus}/>

      <Recaptcha setVarified= {setVarified}/> */}
      <ButtonContainer>
        <Button type="submit" className="button" color="indigo" size="md">
          Submit Application
        </Button>
      </ButtonContainer>
    </FormComponent>
  );
};

export default Form;
