import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RecaptchaCompo } from "./styles";

const Recaptcha = ({setVarified}: {setVarified: any}) => {
  const [token, setToken] = useState(false);


  function onChange(value:any) {
    setVarified(true);
    setToken(false)
  }

  function onExpire(){
setVarified(false)
setToken(true)
  }
  return (
    <RecaptchaCompo>
      <ReCAPTCHA sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} onExpired = {onExpire} />
      {token && <div className="error">The Captcha is expired please retry.</div>}
    </RecaptchaCompo>
  );
};

export default Recaptcha;
