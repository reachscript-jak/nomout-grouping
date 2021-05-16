import React, { useState, useCallback } from "react";
import Link from "next/link";
import Container from "src/components/container";
import Header from "src/components/header";
import { useMembers } from "src/model/use-members";

const Home: React.VFC = () => {
  // hooks
  // メンバー
  const [members, addMember] = useMembers();
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
    [memberName]
  );

  return (
    <>
      <Header />
      <main className="text-center">
        <Container>
          <h1>メイン画面</h1>
          <div>
            <form onSubmit={onSubmitAdd}>
              <input
                name="memberName"
                value={memberName}
                onChange={onChangeMemberName}
                className="border-solid border-4"
              />
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="text-left">
            <ul>
              {members.map((member, i) => (
                <li key={i + member.name}>{`ID : ${member.mid},  Name: ${member.name}`}</li>
              ))}
            </ul>
          </div>
          <div>
            <Link href="/result">結果画面へ</Link>
          </div>
        </Container>
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
