import React from "react";
import { AddInfoComponent, Content, TextArea } from "./styles";

const AddInfo = ({
  Focus,
  onChange,
  handleFocus,
  name,
}: {
  Focus: any;
  onChange: any;
  handleFocus: any;
  name: string;
}) => {
  return (
    <AddInfoComponent>
      <Content>
        <h1>ADDITIONAL INFORMATION</h1>
        <TextArea
          onChange={onChange}
          name={name}
          onBlur={handleFocus}
          data-focused={Focus.toString()}
          placeholder="Add a cover letter or anything else you want to share."
        ></TextArea>

        <hr />
      </Content>
    </AddInfoComponent>
  );
};

export default AddInfo;
