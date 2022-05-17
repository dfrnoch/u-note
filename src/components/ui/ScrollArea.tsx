import { FC } from "react"; 
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { styled } from "theme";

const Container = styled("div", {
  flex: 1,
  height: "100%", 
});

const StyledScrollArea = styled(RadixScrollArea.Root, {
  width: "100%",
  height: "100%",
});

const StyledViewport = styled(RadixScrollArea.Viewport, {
  width: "100%",
  height: "100%",
});


const StyledThumb = styled(RadixScrollArea.Thumb, {
  flex: 1,
  background: "rgba(0, 0, 0, 0.5)",
  maxWidth: 3,
  transition: "max-width 100ms ease-out",
});

const StyledScrollbar = styled(RadixScrollArea.Scrollbar, {
  zIndex: 1000,
  display: "flex",
  justifyContent: "flex-end",
  background: "rgba(0, 0, 0, 0)",
  width: 10,
  "&:hover": {
    background: "rgba(0, 0, 0, 0.1)",
    [`& ${StyledThumb}`]: {
      maxWidth: 10,
    },
  },
  transition: "all 100ms ease-out",
});

export const ScrollArea: FC<{ children: any, id?: string }>= ({ children, id }) => (
  <Container>
    <StyledScrollArea scrollHideDelay={0}>
      <StyledViewport id={id}>{children}</StyledViewport>
      <StyledScrollbar>
        <StyledThumb />
      </StyledScrollbar>
    </StyledScrollArea>
  </Container>
);
