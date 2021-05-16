import Container from "src/components/container";
import Header from "src/components/header";
import { useMembers } from "src/model/use-members";

const Result: React.VFC = () => {
  // hooks
  const [members] = useMembers();

  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>結果画面</h1>
          <ul>
            {members.map((member, i) => {
              return <li key={i + member.name}>{`ID : ${member.mid} Name: ${member.name}`}</li>;
            })}
          </ul>
        </Container>
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Result;
