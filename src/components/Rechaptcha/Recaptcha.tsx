import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RecaptchaCompo } from "./styles";

const Recaptcha = ({setVarified}: {setVarified: any}) => {
  const [token, setToken] = useState();


  function onChange(value:any) {
    setVarified(true);
  }
  return (
    <RecaptchaCompo>
      <ReCAPTCHA sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
    </RecaptchaCompo>
  );
};

export default Recaptcha;
