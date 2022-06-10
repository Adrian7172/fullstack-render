import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from '@mantine/core';
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
  other = "prefer not to say"
}

interface Inputs{
  fullName: string,
  email: string,
  phone: number,
  currentCompany: string,
  linkdIn: any,
  twitter: any,
  gitHub: any,
  portfolio: any,
  otherWebsite: any,
  option: GenderEnum,
  AddtionalInfo: string,

};

const Form = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  //Focus
  const [Focus, setFocus] = useState(false);

  //for captcha
  const [varified, setVarified] = useState(false)

  const [value, setValue] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentCompany: "",
    linkdIn: "",
    twitter: "",
    gitHub: "",
    portfolio: "",
    otherWebsite: "",
    select: "",
    AddtionalInfo: "",

  });

  //Handle the focus
  const handleFocus = () => {
    setFocus(true);
  };

  //store the change
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.name === ""){
      e.currentTarget.name = 'select';
    }
    setValue({ ...value, [e.currentTarget.name]: e.currentTarget.value });
  };
  // console.log(value);


  //Handles the submit button
  const HandleSubmit = handleSubmit((data: any) =>{
    // console.log(data)
  })

  // console.log(errors.fullName)



  return (
    <FormComponent onSubmit={HandleSubmit}>
      {Data.map((items: any) => {
        return <InputForm key={items.id} {...items} errors={errors} register={register}onChange={onChange} Focus={Focus} handleFocus={handleFocus}/>;
      })}
      {/* <AddInfo name={'AddtionalInfo'}  Focus= {Focus} onChange={onChange} handleFocus={handleFocus}/>
      <SelectComponent  Focus= {Focus} onChange={onChange} handleFocus={handleFocus}/>

      <Recaptcha setVarified= {setVarified}/> */}
      <ButtonContainer>
      <Button type="submit" className="button" color="indigo" size="md">Submit Application</Button>
      </ButtonContainer>
    </FormComponent>
  );
};

export default Form;
