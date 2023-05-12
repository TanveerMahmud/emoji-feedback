import { Button } from '@mui/material'

const HappinessPicker = ({ emojis, handleScore, selectedIndex }) => {
  return (
    <>
      {emojis.map((emoji, index) => (
        <Button
          key={index}
          onClick={() => handleScore(index)}
          variant={selectedIndex === index ? 'contained' : 'outlined'}
        >
          {emoji}
        </Button>
      ))}
    </>
  )
}
export default HappinessPicker
