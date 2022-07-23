import styled from 'styled-components'

export interface CardsProps {
  bgColor?: string
  color?: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10em;
  padding-block: 1rem 1.25rem;
  border-radius: 0.1875rem;
  user-select: none;
  cursor: pointer;

  h1 {
    font-size: var(--normal-font-size);
    font-weight: var(--bold);
    text-align: center;
    margin-bottom: 0.5rem;
  }

  h3,
  p {
    font-size: var(--normal-font-size);
    font-weight: var(--light);
    margin-top: 0.5rem;
  }
`
