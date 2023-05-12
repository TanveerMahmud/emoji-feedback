import HappinessPicker from '../HappinessPicker/HappinessPicker'
import { useState } from 'react'
import { ButtonGroup, Container, Typography } from '@mui/material'

const FeedbackForm = () => {
  const emojis = ['😦', '😞', '😐', '🙂', '😁']
  const [foodScore, setFoodScore] = useState(null)
  const [serviceScore, setServiceScore] = useState(null)
  const [valueScore, setValueScore] = useState(null)

  const totalScore = foodScore + serviceScore + valueScore

  const handleScore = (index, func) => {
    func(index)
  }

  return (
    <>
      <Container>
        <Typography variant="h3" mt="20px" mb="10px">
          Let us know how we did!
        </Typography>

        <Typography variant="h5" mt="20px" mb="10px">
          Food
        </Typography>
        <ButtonGroup variant="outlined" size="large">
          <HappinessPicker
            emojis={emojis}
            handleScore={(index) => handleScore(index, setFoodScore)}
            selectedIndex={foodScore}
          />
        </ButtonGroup>

        <Typography variant="h5" mt="20px" mb="10px">
          Service
        </Typography>
        <ButtonGroup variant="outlined" size="large">
          <HappinessPicker
            emojis={emojis}
            handleScore={(index) => handleScore(index, setServiceScore)}
            selectedIndex={serviceScore}
          />
        </ButtonGroup>

        <Typography variant="h5" mt="20px" mb="10px">
          Value for money
        </Typography>
        <ButtonGroup variant="outlined" size="large">
          <HappinessPicker
            emojis={emojis}
            handleScore={(index) => handleScore(index, setValueScore)}
            selectedIndex={valueScore}
          />
        </ButtonGroup>

        <Typography variant="h5" fontWeight="700" mt="20px">
          Total Score: {totalScore}/12
        </Typography>
      </Container>
    </>
  )
}
export default FeedbackForm
