import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8.5rem;
  padding-block: 1rem 1.25rem;
  border-radius: 0.1875rem;
  cursor: pointer;
  h1 {
    font-size: var(--normal-font-size);
    font-weight: var(--bold);
    text-align: center;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: var(--normal-font-size);
    font-weight: var(--light);
    margin-top: 0.5rem;
  }
  h3 {
    font-size: var(--normal-font-size);
    font-weight: var(--light);
  }
`
