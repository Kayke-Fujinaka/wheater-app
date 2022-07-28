import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  .default {
    &.active {
      background-color: var(--card-blue-color);
      color: var(--white-color);
    }
  }
`
