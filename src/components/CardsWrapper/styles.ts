import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.425rem;

  .default {
 
    color: var(--text-grey-color);
    &.active {
      background-color: var(--card-blue-color);
      color: var(--white-color);
    }
  }
`
