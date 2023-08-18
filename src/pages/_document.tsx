import { DocumentContext, Head, Main, Html, NextScript } from "next/document";
import Document from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body style={{ overflow: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
