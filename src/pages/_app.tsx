import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/GlobalStyle";

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <ChakraProvider>
              <GlobalStyle />
              <Component {...pageProps} />
            </ChakraProvider>
          </QueryClientProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
};

export default App;
