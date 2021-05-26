import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { Group } from "src/model/group";
import { Member } from "src/model/member";

// atom
const groupsState = atom<Group[]>({
  key: "groupsState",
  default: [],
});

// グループリストフック
export const useGroups = () => {
  const [groups, setGroupsState] = useRecoilState(groupsState);

  const setGroups = useCallback(
    (members: Member[], number: number) => {
      // メンバーリストをランダムに並び替え
      const shuffleMember = [...members]
        .map((m) => {
          return { weight: Math.random(), member: m };
        })
        .sort((a, b) => a.weight - b.weight)
        .map((m) => m.member);

      // グルーピング数で分割
      const length = Math.ceil(shuffleMember.length / number);
      const groups: Group[] = [...Array(length)].map((_, i) => {
        const group: Group = { members: [] };
        group.members = shuffleMember.slice(i * number, (i + 1) * number);
        return group;
      });

      setGroupsState(groups);
    },
    [setGroupsState]
  );

  return { groups, setGroups };
};
