import { Excalidraw, Footer, MainMenu, Sidebar } from "@excalidraw/excalidraw";
import { useState } from "react";
// import { isLocalLink } from "@excalidraw/excalidraw/types/data/url";
// import "@excalidraw/excalidraw/dist/excalidraw.min.css"; // Import styles

function App() {
  const UIOptions = {
    canvasActions: {
      changeViewBackgroundColor: true,
      clearCanvas: true,
      loadScene: true,
    },
  };
  const [docked, setDocked] = useState(false);

  return (
    <div style={{ height: "98vh" }}>
      <Excalidraw UIOptions={UIOptions}>
        <MainMenu>
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
        <Sidebar name="custom" docked={docked} onDock={setDocked}>
          <Sidebar.Header />
          <Sidebar.Tabs style={{ padding: "0.5rem" }}>
            <Sidebar.Tab tab="one">Tab one!</Sidebar.Tab>
            <Sidebar.Tab tab="two">Tab two!</Sidebar.Tab>
            <Sidebar.TabTriggers>
              <Sidebar.TabTrigger tab="one">One</Sidebar.TabTrigger>
              <Sidebar.TabTrigger tab="two">Two</Sidebar.TabTrigger>
            </Sidebar.TabTriggers>
          </Sidebar.Tabs>
        </Sidebar>

        <Footer>
          <Sidebar.Trigger
            name="custom"
            tab="one"
            style={{
              marginLeft: "0.5rem",
              background: "#70b1ec",
              color: "white",
            }}
          >
            Toggle Custom Sidebar
          </Sidebar.Trigger>
        </Footer>
      </Excalidraw>
    </div>
  );
}

export default App;
