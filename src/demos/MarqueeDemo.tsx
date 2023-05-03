import { useState } from "react"
import { Marquee } from "../components/Marquee"
import { Icon } from "../components/Icon"
import s from './MarqueeDemo.module.scss'

type Props = {

}
export const MarqueeDemo = (props: Props) => {
  const [icons] = useState([
    { name: 'mangosteen', id: 1 },
    { name: 'mangosteen', id: 2 },
    { name: 'mangosteen', id: 3 },
    { name: 'mangosteen', id: 4 },
    { name: 'mangosteen', id: 5 },
    { name: 'mangosteen', id: 6 },
    { name: 'mangosteen', id: 7 },
    { name: 'mangosteen', id: 8 },
    { name: 'mangosteen', id: 9 },
    { name: 'mangosteen', id: 10 }
  ])

  return (
    <Marquee className={s.marquee} gradientWidth={200} gradientColor='#f8f8fd' pauseOnHover>
      <div className={s.list}>
        {icons.map(item =>
          <Icon name={item.name} className={s.item} />
        )}
      </div>
    </Marquee>
  )
}