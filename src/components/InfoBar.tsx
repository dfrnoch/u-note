import { useStore } from "hooks/store";
import { keyframes, styled } from "theme";

const Side = keyframes({
  "0%": { transform: "translateX(50px)", opacity: 0 },
  "100%": { transform: "translateX(0)", opacity: 1 },
});

const InfoBarStyled = styled("div", {
  backgroundColor: "#1a1a1a",
  fontFamily: "Monserrat",
  height: "100%",
  paddingTop: 30,
  animation: `.1s ${Side}`,
  color: "white" 
});

const Section = styled("div", {
  padding: 10,
  fontSize: 12,
});

const Button = styled("div", {
  fontFamily: "Montserrat",
  textAlign: "center",
  border: "1px solid #101010",
  cursor: "pointer",
  padding: 7,
  borderRadius: 3,
  "&:hover": {
    backgroundColor: "#ddd",
    borderColor: "#ccc",
  },
});

export const InfoBar = () => {
  const paths = useStore((s) => s.currentFilePaths);
  const content = "";
  const cc = content.length;


  return (
    <InfoBarStyled>
      <Section>
        <Button>Ahoj</Button>
        {cc}
        {paths}
      </Section>
    </InfoBarStyled>
  );
};
