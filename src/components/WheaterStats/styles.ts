import styled from 'styled-components'

export const Container = styled.div`
  width: 20rem;
  margin-bottom: 1.25rem;
`

export const Stats = styled.div`
  text-align: center;
  h1,
  h2 {
    font-weight: var(--bold);
    font-size: var(--biggest-font-size);
    color: var(--text-black-color);
  }
  h2 {
    height: 90px;
  }
`
export const ImageAling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.0625rem;
  gap: 1rem;
`
export const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  text-align: center;

  h3,
  p {
    font-weight: var(--normal);
    font-size: var(--normal-font-size);
  }

  h3 {
    color: var(--text-grey-color);
  }

  p {
    color: var(--text-black-color);
  }
`
