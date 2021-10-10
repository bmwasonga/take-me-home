import { Container } from '@chakra-ui/layout'
import React from 'react'

export const InputLayout = ({children}) => {
  return (
    <div>
      <Container maxW="xl" maxH='xl' >
        {children}
      </Container>

    </div>
  )
}
