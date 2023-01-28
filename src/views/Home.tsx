import { useState } from "react"
import { AsideMenu } from "../components/AsideMenu"

export const Home = () => {
  const [visible, setVisible] = useState(false)
  const onClick = () => {
    setVisible(!visible)
  }
  return (
    <>
      <button onClick={onClick}>点击展开侧边按钮</button>
      <AsideMenu visible={visible} onClickMask={() => setVisible(false)} />
    </>
  )
}