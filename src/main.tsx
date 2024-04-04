// React & Component
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Chakra & design System
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SwitchTheme, Sizes, Styles, Colors } from "./theme";
import "./index.css";

// State Management
import { RecoilRoot, useRecoilValue} from "recoil";
import { DevModeState } from "./state/devMode.ts";

// API & Services
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const theme = extendTheme({
  components: { Switch: SwitchTheme },
  sizes: Sizes.Default,
  radii: Sizes.BorderRadii,
  styles: {
    global: Styles.Global,
  },
  colors: Colors,
});

function Main() {
  
  return (
    <React.StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
