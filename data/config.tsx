import { Button } from '@chakra-ui/react'

import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaLinkedin, FaTwitter, FaVoicemail ,FaEnvelope } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'NeloVoice ',
    description: 'NELOVOICE Ai Phone Agent',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'Contact',
        label:<FaEnvelope size="14" />,
        href: 'mailto:contact@nelovoice.com',

      },
      {
        id:'X',
        href: 'https://x.com/nelovoice',
        label:<FaTwitter size="14" />,
      },
      {
        href: 'https://www.linkedin.com/company/nelovoice',
        label: <FaLinkedin size="14" />,
      },
      
    ],
  },
  footer: {
    
    links: [
      {
        href: 'mailto:contact@nelovoice.com',
        label: 'Contact',
      },
      {
        href: 'https://www.linkedin.com/company/nelovoice',
        label: <FaLinkedin size="14" />,
      },
      {
        href: 'https://x.com/nelovoice',
        label: <FaTwitter size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
