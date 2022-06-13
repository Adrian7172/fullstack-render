import React from "react";
import Input from "../Input/Input";
import SelectType from "../Select/selectType";
import { UseFormRegister, FieldErrors, Path } from "react-hook-form";
import { Inputs } from "../Form/Form";
import { SelectComp, Content } from "./styles";
const SelectComponent = ({
  errors,
  register,
}: {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}) => {
  const options = [
    {
      id: "1",
      value: "",
      option: "Select ...",
    },
    {
      id: "2",
      value: "Male",
      option: "Male",
    },
    {
      id: "3",
      value: "Female",
      option: "Female",
    },
    {
      id: "4",
      value: "prefer not to say",
      option: "prefer not to say",
    },
  ];
  return (
    <SelectComp>
      <Content>
        <h1>
          U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION &nbsp; &nbsp;
          <span className="inner-text">
            (Completion is voluntary and will not subject you to adverse
            treatment)
          </span>
        </h1>

        <span className="inner-text">
          Our company values diversity. To ensure that we comply with reporting
          requirements and to learn more about how we can increase diversity in
          our candidate pool, we invite you to voluntarily provide demographic
          information in a confidential survey at the end of this application.
          Providing this information is optional. It will not be accessible or
          used in the hiring process, and has no effect on your opportunity for
          employment.
        </span>
        <br />
        <br />
        <SelectType
          title="Gender"
          errorMessage="Please select any one of them"
          required={false}
          options={options}
          register = {register}
          errors = {errors}
        />
      </Content>
    </SelectComp>
  );
};

export default SelectComponent;
