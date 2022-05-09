import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as MuiIconSvg } from "./sharp.svg";

function SharpIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 28 28">
      <MuiIconSvg />
    </SvgIcon>
  );
}
// best personally tested view box ration for importing custom svg
//const goldenViewBoxRatio = "0 0 28 28"
export default SharpIcon;
