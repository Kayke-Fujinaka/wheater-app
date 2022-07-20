import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7.225rem;
  padding-block: 1rem 1.25rem;
  border-radius: 0.1875rem;
  cursor: pointer;
  h1 {
    font-size: var(--normal-font-size);
    font-weight: var(--bold);
  }
  p {
    font-size: var(--normal-font-size);
    font-weight: var(--light);
  }
  h3 {
    font-size: var(--normal-font-size);
    font-weight: var(--light);
  }
`
