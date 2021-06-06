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
    groups.length == 0 && router.push("/");
  }, []);

  return (
    <>
      <Header />
      <main className="text-center">
        <Container>
          <h1 className="text-2xl font-bold">結果画面</h1>
          <div className="flex items-center justify-center mt-10">
            {groups.map((num, i) => {
              return (
                <div key={"グループ" + i} className="p-5">
                  <h2 className="text-xl font-bold">{`グループ${i + 1}`}</h2>
                  <ul className="p-3 text-left">
                    {num.members.map((people, j) => {
                      return (
                        <li key={j + people.name} className="text-lg">{`ID：${people.mid}   名前：${people.name}`}</li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <button
            className="... ring-0 focus:outline-none text-xl border-gray-300 border-solid border-b-2 "
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
