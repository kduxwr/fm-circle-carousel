type Props = {
  cardNum: number
  cardScrollHeight: number
}

export const DummyHeight: React.FC<Props> = ({ cardNum, cardScrollHeight }) => {
  return <div style={{ height: `${cardNum * cardScrollHeight}px` }}></div>
}
