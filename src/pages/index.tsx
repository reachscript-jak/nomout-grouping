import Container from "src/components/container";
import Header from "src/components/header";

const Home: React.VFC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>メイン画面</h1>
        </Container>
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
