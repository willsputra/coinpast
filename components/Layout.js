import { Container, Header } from "semantic-ui-react";
import Head from "next/head";

export default props => {
  return (
    <Container textAlign="center">
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>

      <Header
        as="h1"
        style={{ marginTop: "2em", marginBottom: "1em" }}
      >
        Past Bitcoin
      </Header>
      {props.children}
    </Container>
  );
};
