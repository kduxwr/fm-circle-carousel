type Props = {
  index: number
  degreeOffset: number
  centerYOffset: number
  color: string
  handleClick: (index: number) => void
}

export const Card: React.FC<Props> = ({
  index,
  degreeOffset,
  centerYOffset,
  color,
  handleClick
}) => {
  return (
    <div className="relative" style={{ rotate: `${degreeOffset}deg` }}>
      <div
        className={`absolute -translate-y-1/2 left-1/2 -translate-x-1/2 w-[200px] aspect-[9/16] rounded-xl text-white text-5xl flex items-center justify-center cursor-pointer shadow-xl`}
        style={{ top: `calc(-50vh - ${centerYOffset}px)`, backgroundColor: color }}
        onClick={() => {
          handleClick(index)
        }}
      >
        {index + 1}
      </div>
    </div>
  )
}
