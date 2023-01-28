# 用于 vite + React + TS 项目基础配置

# Vite + React + TS  start 
- 已引入 react-router@6
- 已引入 sass
- 已引入 淘宝的 meta viewport
- 已设置部分 CSS Reset
- 已引入 styled-components 
- 已引入基础 zustand

- 已封装 Icon
- 
  使用方式：
  1. 在 assets/icons 目录下添加 xxx.svg 文件
  2. 组件中使用
  ```
  <Icon name='xxx' />
  ```
 - 已对 axios 进行基础封装，并引入 faker.js
 

 - 添加侧边滑出菜单，使用 react-spring 实现滑出动画
 ```
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
 ```