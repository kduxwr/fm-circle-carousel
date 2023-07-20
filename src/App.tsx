import { useScroll, useSpring, useTransform } from 'framer-motion'
import './App.css'
import { CardCenter } from './components/CardCenter'
import { Card } from './components/Card'
import { DummyHeight } from './components/DummyHeight'

function App() {
  const cardNum = 5
  const cardScrollHeight = 1000
  const centerYOffset = 1000
  const degreeInterval = 12
  const startDegree = 0
  const colorList = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff']

  const { scrollYProgress } = useScroll()
  const selectedDegree = useTransform(scrollYProgress, (progress) => {
    for (let i = 0; i < cardNum; i++) {
      if (progress >= i * (1 / cardNum) && progress <= (i + 1) * (1 / cardNum)) {
        return startDegree - i * degreeInterval
      }
    }

    return 0
  })
  const springDegree = useSpring(selectedDegree, { stiffness: 200, damping: 20 })

  const handleClick = (index: number) => {
    window.scrollTo(0, index * cardScrollHeight)
  }

  return (
    <>
      <DummyHeight cardNum={cardNum} cardScrollHeight={cardScrollHeight} />
      <div className="fixed top-0 left-0 flex w-full h-screen flex-col items-center justify-end bg-slate-100">
        <CardCenter centerYOffset={centerYOffset} degree={springDegree}>
          {Array(cardNum)
            .fill(0)
            .map((_, index) => (
              <Card
                key={index}
                index={index}
                degreeOffset={index * degreeInterval}
                centerYOffset={centerYOffset}
                color={colorList[index]}
                handleClick={handleClick}
              />
            ))}
        </CardCenter>
      </div>
    </>
  )
}

export default App
