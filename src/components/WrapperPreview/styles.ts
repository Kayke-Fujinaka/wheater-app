import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .default {
    flex: none;
    flex-wrap: nowrap;
    &.active {
      background-color: var(--card-blue-color);
      color: var(--white-color);
    }
  }
`
export const Carrousel = styled.div`
  display: flex;
  max-width: 600px;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: none;
  padding-bottom: 20px;
  @media (max-width: 720px) {
    margin: 0 auto;
    max-width: 550px;
  }
  @media (max-width: 627px) {
    max-width: 450px;
  }
  @media (max-width: 531px) {
    max-width: 350px;
  }
  @media (max-width: 395px) {
    max-width: 250px;
  }
`
