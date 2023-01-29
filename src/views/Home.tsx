import { useState } from "react"
import { Popup } from "../components/Popup"

export const Home = () => {
  const [visible, setVisible] = useState(false)
  const onClick = () => {
    setVisible(!visible)
  }
  return (
    <>
      <button onClick={onClick}>点击展开侧边按钮</button>
      <Popup visible={visible} onClickMask={() => setVisible(false)} />
    </>
  )
}