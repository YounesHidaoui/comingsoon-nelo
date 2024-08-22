import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

import Image from 'next/image'
import nelo from "public/static/images/nelo1.png"

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
   <>
      <Image src={nelo} alt='nelovoice logo' width={130} height={100} />
   </>
  )
}
