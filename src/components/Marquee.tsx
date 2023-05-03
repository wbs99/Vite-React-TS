import { CSSProperties, ReactElement, useEffect, useRef, useState } from "react"
import s from './Marquee.module.scss'
import c from 'classnames'

type Props = {
  delay?: CSSProperties['animationDelay'],
  gradientWidth?: CSSProperties['width'],
  direction?: 'right' | 'left',
  gradientColor?: string,
  pauseOnHover?: boolean,
  speed?: number,
  children: ReactElement,
  className: string
}

export const Marquee = (props: Props) => {
  const { children, className, direction = 'right', gradientColor, gradientWidth, pauseOnHover, speed = 100, delay = '1s', } = props

  // 计算滚动速率
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  useEffect(() => {
    if (!contentRef.current) { return }
    setContentWidth(contentRef.current.getBoundingClientRect().width)
  }, [])
  const duration = contentWidth / speed

  const contentStyles = {
    animationDelay: delay,
    animationDirection: direction === 'right' ? 'reverse' : undefined,
    animationDuration: `${duration}s`
  }

  return (
    <div className={c(s.marquee, className, { [s.paseOnHover]: pauseOnHover })} >
      <div ref={contentRef} className={s.content} style={contentStyles}>
        {children}
      </div>
      <div ref={contentRef} className={s.content} style={contentStyles}>
        {children}
      </div>
      {gradientColor && <>
        <div className={c(s.overlay, s.leftOverlay)}
          style={{
            background: `linear-gradient(90deg, ${gradientColor} 0%,rgba(255,255,255,0) 100%)`,
            width: gradientWidth
          }}
        />
        <div className={c(s.overlay, s.rightOverlay)}
          style={{
            background: `linear-gradient(270deg, ${gradientColor} 0%,rgba(255,255,255,0) 100%)`,
            width: gradientWidth
          }}
        />
      </>}
    </div>
  )
}