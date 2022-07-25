import React from 'react'
import { Container } from './styles'

interface SearchProps {
  htmlFor: string
  name: string
  id: string
  type: string
  location?: string
  placeholder: string
}
export const Search = (props: SearchProps) => (
  <Container>
    <label htmlFor={props.htmlFor}>Cidade</label>
    <input
      name={props.name}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      ref={props.location}
      autoComplete="on"
    />
  </Container>
)
