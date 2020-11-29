import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAuthorsProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: SectionAuthorsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
