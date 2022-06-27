import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/layout";

function App({ Component, pageProps }: AppProps) {
  return (<ChakraProvider >
    <Layout>
      {/* <CmdPalette /> */}
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>)
}

export default App
