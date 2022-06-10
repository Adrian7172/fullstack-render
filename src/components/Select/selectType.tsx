import React from "react";
import { InputComponent, TakeInput } from "./styles";
import { BsChevronDown} from "react-icons/bs"

const SelectType = ({
  title,
  errorMessage,
  required,
  onChange,
  Focus,
options,
handleFocus
}: {
  title: string;
  errorMessage: string;
  required: Boolean;
  onChange: any;
  Focus: any;
options: any;
handleFocus: any;
}) => {
  return (
    <>
      <InputComponent>
        <div>
          <span className="label">
            {title} {required && <span className="star">✱</span>}
          </span>

          <TakeInput>
            <select 
              className={errorMessage ? "input border" : "input"}
              onChange={onChange}
              onBlur={handleFocus}
              data-focused={Focus.toString()}
            >
              {options.map(({id, option}: {id:any, option: any}) =>{
                  return <option key={id} >{option}</option>
              })}

            </select>
            <BsChevronDown  className="right-icon"/>
          </TakeInput>
        </div>
        <div className={errorMessage ? "error" : "display error"}>
          Please Enter a valid email address
        </div>
      </InputComponent>
    </>
  );
};

export default SelectType;
