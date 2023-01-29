import { animated, useSpring } from "@react-spring/web"
import { useState } from "react"
import s from './Popup.module.scss'

type Props = {
  onClickMask?: () => void
  visible?: boolean
}

export const Popup: React.FC<Props> = (props: Props) => {
  const { onClickMask, visible } = props
  const [maskVisible, setMaskVisible] = useState(visible)
  const markStyle = useSpring({
    opacity: visible ? 1 : 0,
    onStart: ({ value }) => {
      if (value.opacity < 0.1) { setMaskVisible(true) }
    },
    onRest: ({ value }) => {
      if (value.opacity < 0.1) { setMaskVisible(false) }
    }
  })
  const markStyles = {
    ...markStyle,
    visibility: (maskVisible ? 'visible' : 'hidden') as 'visible' | 'hidden'
  }
  const mainStyles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0%)' : 'translateX(-100%)'
  })



  return (
    <>
      <animated.div className={s.mask} onClick={onClickMask} style={markStyles}
      />
      <animated.div className={s.content} style={mainStyles} >
        这是 Popup
      </animated.div>
    </>
  )
}