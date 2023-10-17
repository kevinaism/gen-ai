import { styled } from "@mui/material";
import logo from "../../images/logo192.png";

interface LogoProps {
  size: number;
  marginBottom?: boolean;
  marginRight?: boolean;
  marginLeft?: boolean;
}

export default function DbsLogo(props: LogoProps) {
  const LogoContainer = styled("div")`
    display: flex;
    justify-content: center;
  `;

  const Logo = styled("img")`
    width: ${props.size}px;
    height: ${props.size}px;
    margin-left: ${props.marginLeft ? 15 : 0}px;
    margin-right: ${props.marginRight ? 15 : 0}px;
    margin-bottom: ${props.marginBottom ? 15 : 0}px;
  `;

  return (
    <LogoContainer>
      <Logo src={logo} alt="dbs logo" />
    </LogoContainer>
  );
}
