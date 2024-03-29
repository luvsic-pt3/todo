import { useCallback } from "react"
import { atomFamily, useRecoilState } from "recoil"

const openCloseAtomFamily = atomFamily({
  key: "openCloseAtomFamily",
  default: false,
})

export function useOpenClose(key: string) {
  const [opened, setOpened] = useRecoilState(openCloseAtomFamily(key))

  const open = useCallback(() => {
    setOpened(true)
  }, [setOpened])

  const close = useCallback(() => {
    setOpened(false)
  }, [setOpened])

  return {
    opened: opened,
    open: open,
    close: close,
  }
}
