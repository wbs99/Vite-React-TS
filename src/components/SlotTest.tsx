import React, { ReactNode } from "react"

type Props = {
  slotA: ReactNode
  slotB: ReactNode
}

export const SlotTest: React.FC<Props> = ({ slotA, slotB }) => {
  return (
    <div>
      {slotA}
      <br />
      {slotB}
    </div>
  )
}