import { SideBar } from "./components/SideBar";
import { Box } from "./components/ui/Layout";
import { ScrollArea } from "./components/ui/ScrollArea";
import { useStore } from "./hooks/store";
import { reset } from "stitches-reset";
import { globalCss, styled } from "./theme";
import { TopBar } from "./components/TopBar";
import { FileOrfolder } from "./components/FileOrfolder";
import { Separator } from "./components/Separator";
import "@fontsource/montserrat";
import "@fontsource/merriweather/latin-300.css";
import "@fontsource/inconsolata";

const globalStyles = globalCss(reset);
const globalStylesExtension = globalCss({
  body: {
    borderRadius: 8,
    backgroundColor: "#212121",
    overflow: "hidden",
    "*::selection": {
      background: "#d4d4d4",
    },
  },
});

const AppContainer = styled(Box, {
  minHeight: "100vh",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
});

function App() {
  globalStyles();
  globalStylesExtension();

  const filePaths = useStore((s) => s.currentFilePaths);
  const showSide = useStore((s) => s.showSide);
  const scrollMode = useStore((s) => s.scrollMode);
  const set = useStore((s) => s.set);

  return (
    <AppContainer>
      <TopBar />
      <div style={{ display: "flex", flex: 1 }}>
        {true && (
          <div
            style={{
              position: "relative",
              minWidth: showSide ? 300 : 0,
              marginTop: -30,
              transition: "100ms min-width",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 300,
              }}
            >
              <SideBar />
            </div>
          </div>
        )}
        <div
          style={{
            flex: 1,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <ScrollArea id="main-scroll">
              <div
                style={{
                  padding: 20,
                  margin: "0 auto",
                  minHeight: "100%",
                  position: "relative",
                }}
              >
                {filePaths?.map((path, index) => (
                  <>
                    {index !== 0 && (
                      <Separator
                        title={path}
                        onClick={() => set({ currentFilePaths: [path] })}
                      />
                    )}
                    <FileOrfolder path={path} key={path} />
                  </>
                ))}
                {scrollMode && <Box style={{ height: 200 }} />}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
