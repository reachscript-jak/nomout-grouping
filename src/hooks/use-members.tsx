import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

import type { Member } from "../model/member";

// atom
const membersState = atom<Member[]>({
  key: "membersState",
  default: [],
});

// メンバーリストフック
export const useMembers = () => {
  const [members, setMembers] = useRecoilState(membersState);

  // ユーザー追加関数
  const addMember = useCallback(
    (memberName: string) => {
      // メンバーリストをコピー
      const newMembers = [...members];
      // 新しいメンバーを追加
      newMembers.push({
        mid: members.length + 1,
        name: memberName,
      });
      // メンバーリストを更新
      setMembers(newMembers);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [members]
  );

  return [members, addMember, setMembers] as const;
};
