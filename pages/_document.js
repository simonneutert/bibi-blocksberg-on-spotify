import { Html, Head, Main, NextScript } from "next/document";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/bootstrap.min.css" rel="stylesheet" defer />
        <script src="/bootstrap.bundle.min.js" defer></script>
      </Head>

      <body>
        <Nav />

        <div className="container my-4">
          <h1>Bibi Blocksberg on Spotify</h1>
          <Main />
          <NextScript />
        </div>

        <Footer />
      </body>
    </Html>
  );
}
