import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Container from "src/components/container";
import Header from "src/components/header";
import { useGroups } from "src/hooks/use-groups";
import { useMembers } from "src/hooks/use-members";

const Result: React.VFC = () => {
  // hooks
  const [groupNumber] = useState(3);
  const { members } = useMembers();
  const { groups, setGroups } = useGroups();
  const router = useRouter();

  useEffect(() => {
    groups.length == 0 && router.push("");
  }, []);

  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>結果画面</h1>
          {groups.map((num, i) => {
            return (
              <div key={"グループ" + i}>
                <h2>{`グループ${i + 1}`}</h2>
                <ul>
                  {num.members.map((people, j) => {
                    return <li key={j + people.name}>{`ID：${people.mid}名前：${people.name}`}</li>;
                  })}
                </ul>
              </div>
            );
          })}
          <button
            className="... ring-0 focus:outline-none"
            onClick={() => {
              setGroups(members, groupNumber);
            }}
          >
            やり直す
          </button>
        </Container>
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Result;
