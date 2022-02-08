import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as MuiIconSvg } from "./mui-icon.svg";

function MuiIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 30 30">
      <MuiIconSvg />
    </SvgIcon>
  );
}
// best personally tested view box ration for importing custom svg
//const goldenViewBoxRatio = "0 0 28 28"
export default MuiIcon;
