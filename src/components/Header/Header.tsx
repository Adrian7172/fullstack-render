import { Header, HeaderContent } from "./styles";

import Logo from "../../assets/logo.png";

const HeaDer = () => {
  return (
    <Header>
      <HeaderContent>
        <img src={Logo} alt="logo" />
      </HeaderContent>
    </Header>
  );
};

export default HeaDer;
