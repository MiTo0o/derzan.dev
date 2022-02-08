import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as ReactIconSvg } from './she.svg';

function ReactIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 -1.5 27 27" >
      <ReactIconSvg/>
    </SvgIcon>

  )
}

export default ReactIcon;