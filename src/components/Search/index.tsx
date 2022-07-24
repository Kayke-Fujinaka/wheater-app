import { Container } from './styles'

interface SearchProps {
  location?: string
}
export const Search = ({ location }: SearchProps) => (
  <Container>
    <h3>Cidade</h3>
    <input
      type="search"
      ref={location}
      placeholder="Insira cidade"
      autoComplete="on"
    />
  </Container>
)
