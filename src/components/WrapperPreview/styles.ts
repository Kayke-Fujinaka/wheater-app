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
  max-width: 37.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: none;
  padding-bottom: 1.25rem;
  @media (max-width: 720px) {
    margin: 0 auto;
    max-width: 34.375rem;
  }
  @media (max-width: 627px) {
    max-width: 28.125rem;
  }
  @media (max-width: 531px) {
    max-width: 21.875rem;
  }
  @media (max-width: 395px) {
    max-width: 15.625rem;
  }
`
