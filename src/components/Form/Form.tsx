import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import { FormComponent } from "./styles";
import { Data } from "../../Data/FormData";
import AddInfo from "../AddInfo/AddInfo";
import SelectComponent from "../SelectComponent/SelectComponent";

const Form = () => {

  //Focus
  const [Focus, setFocus] = useState(false);

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
  console.log(value);


  return (
    <FormComponent>
      {Data.map((items: any) => {
        return <InputForm key={items.id} {...items} onChange={onChange} Focus={Focus} handleFocus={handleFocus}/>;
      })}
      <AddInfo name={'AddtionalInfo'}  Focus= {Focus} onChange={onChange} handleFocus={handleFocus}/>
      <SelectComponent  Focus= {Focus} onChange={onChange} handleFocus={handleFocus}/>
    </FormComponent>
  );
};

export default Form;
