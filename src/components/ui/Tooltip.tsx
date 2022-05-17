import { styled } from "../../theme";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { FC, ReactNode } from "react";

const StyledContent = styled(RadixTooltip.Content, {
  borderRadius: 1,
  padding: "5px 10px",
  fontSize: 14,
  backgroundColor: "#222",
  color: "black",
});



export const Tooltip: FC<{ label: ReactNode | string, children: any }> = ({
  label,
  children,
}) => (
  <RadixTooltip.Root>
    <RadixTooltip.Trigger >{children}</RadixTooltip.Trigger>
    <StyledContent align="center">{label}</StyledContent>
  </RadixTooltip.Root>
);
