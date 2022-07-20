import styled from 'styled-components'

export const Container = styled.div`
  max-width: 300px;
`

export const Description = styled.div`
  text-align: center;
  h3 {
    margin-bottom: 2.125rem;
    font-weight: var(--normal);
    font-size: var(--normal-font-size);
    color: var(--text-grey-color);
  }
  h1 {
    font-weight: var(--bold);
    font-size: var(--bigger-font-size);
  }
`
export const ImageAling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.0625rem;
  gap: 1.25rem;
`
export const Footer = styled.div`
  margin-top: 2.0625rem;
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  text-align: center;
  h3 {
    font-weight: var(--normal);
    font-size: var(--normal-font-size);
    color: var(--text-grey-color);
  }
  p {
    font-weight: var(--normal);
    font-size: var(--normal-font-size);
    color: var(--text-black-color);
  }
`
