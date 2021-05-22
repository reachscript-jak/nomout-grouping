import { useCallback, useState } from "react";
import Container from "src/components/container";
import Header from "src/components/header";
import { useMembers } from "src/hooks/use-members";

const Home: React.VFC = () => {
  // hooks メンバー
  const { members, addMember, setMembers } = useMembers();
  // メンバー名
  const [memberName, setMemberName] = useState("");

  //function
  // メンバー名変更ハンドラ
  const onChangeMemberName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberName(e.target.value);
  }, []);

  // メンバー追加フォームハンドラ
  const onSubmitAdd = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // 何も入力されていなければ終了
      if (!memberName) {
        return;
      }

      addMember(memberName);
      // メンバー名を初期化
      setMemberName("");
    },
    [memberName, addMember]
  );

  // メンバー削除クリックハンドラ
  const onClickRemove = useCallback(
    (mid: number) => {
      const newMember = members.filter((member) => member.mid !== mid);
      setMembers(newMember);
    },
    [members]
  );

  return (
    <>
      <Header />
      <main className="text-center">
        <Container>
          <div className="flex items-center justify-center mt-10">
            <div className="text-8xl pr-3">03</div>
            <span className="material-icons text-5xl">settings</span>
          </div>
          <div className="text-xl mt-10">
            <form onSubmit={onSubmitAdd}>
              <input
                name="memberName"
                type="text"
                className="py-0.5 px-1.5 border-gray-300 border-solid border-b-2 outline-none focus:border-b-2 focus:border-blue-200"
                value={memberName}
                onChange={onChangeMemberName}
              ></input>
              <button type="submit" className="p-0.5 ml-2 focus:outline-none">
                Add
              </button>
            </form>
          </div>
          {members.length > 0 && (
            <div className="mt-10 flex justify-center">
              <ul className="h-52 w-2/5 overflow-y-scroll list-disc py-2 scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {members.map((member) => (
                  <li className="h-8" key={member.mid}>
                    <div className="flex justify-center">
                      <div>・</div>
                      <div className="ml-2 text-left w-2/3 overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {member.name}
                      </div>
                      <div>
                        <button onClick={() => onClickRemove(member.mid)} className="pr-1.5 focus:outline-none">
                          remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {members.length > 0 && (
            <div className="mt-10 text-xl ">
              <button className="focus:outline-none">Start</button>
            </div>
          )}
        </Container>
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
