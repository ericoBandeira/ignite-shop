import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { Container } from "../styles/pages/app"
import { Header } from "../components/Header"
import { PurchaseProvider } from "../contexts/Purchase"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
     <PurchaseProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </PurchaseProvider>
  )
}
