import { atoms } from "common/recoil"
import { useRecoilState } from "recoil"


export function useUser(){
  const [user, setUser] = useRecoilState(atoms.user)
  return user
}