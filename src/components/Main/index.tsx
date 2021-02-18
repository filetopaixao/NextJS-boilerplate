import React from 'react'
import * as S from './styles'

const MainContext: React.FC = ({ title = 'React Avançado' }) => (
  <S.Container>
    <h1>{title}</h1>
  </S.Container>
)

export default MainContext
