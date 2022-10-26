import { useParams } from 'react-router-dom'
import { useBearStore } from '../store/useCount'
import { SlotTest } from './SlotTest'

export const Test = () => {
  const { id } = useParams()
  const bears = useBearStore((state) => state.bears)
  const increment = useBearStore((state) => state.increment)
  const removeAllBears = useBearStore((state) => state.removeAllBears)
  const delayAdd = useBearStore((state) => state.delayAdd)

  return (
    <>
      这是路由 {id}
      <div>
        这是 bears {bears}
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={removeAllBears}>remove all</button>
      <button onClick={delayAdd}>666</button>
      <br />
      <div>
        <SlotTest
          slotA={
            <>
              这是 slot A 的内容
            </>
          }
          slotB={
            <>
              这是 slot b 的内容
            </>
          }
        />
      </div>
    </>
  )
}




