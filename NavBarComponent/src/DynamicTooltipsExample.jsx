import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const DynamicTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme, bgcolor }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: bgcolor || theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: bgcolor || theme.palette.common.white,
  },
}));

const DynamicTooltipsExample = () => {
  const [tooltipContent, setTooltipContent] = React.useState("Hover over me!");
  const [tooltipBgColor, setTooltipBgColor] = React.useState("black");

  const handleButtonClick = () => {
    setTooltipContent("Dynamically Changed Tooltip Content!");
    setTooltipBgColor("black"); 
  };

  return (
    <div>
      <DynamicTooltip title={tooltipContent} bgcolor={tooltipBgColor} arrow>
        <Button onClick={handleButtonClick}>Hover or Click me</Button>
      </DynamicTooltip>
    </div>
  );
};

export default DynamicTooltipsExample;
