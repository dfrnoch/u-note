import { FC } from "react";
import { css, styled } from "../../theme";

export type BoxProps = {
  style?: any;
  children?: any;

  className?: string;
};

export const Box: FC<BoxProps> = ({ children, className, style, ...props }) => {
  return (
    <div
      className={
        css({
          ...props,
        })() +
        " " +
        className
      }
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export const Flex = styled(Box, {
  display: "flex",
});
