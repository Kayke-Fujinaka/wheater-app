import React from 'react'
import { Container } from './styles'

export interface InputSearchProps {
  htmlFor: string
  name: string
  id: string
  type: string
  placeholder: string
}

export const Search = (props: InputSearchProps) => (
  <Container>
    <label htmlFor={props.htmlFor}>Cidade</label>
    <input
      name={props.name}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
    />
  </Container>
)
