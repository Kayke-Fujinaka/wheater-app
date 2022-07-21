import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37.25rem;
  height: 15rem;
  background: var(--text-grey-color);
  border-radius: 0.3125rem;
  margin-bottom: 1.25rem;
  p {
    font-size: var(--big-font-size);
    font-weight: var(--bold);
    color: var(--text-black-color);
  }
  .cards-wrapper {
    display: flex;
  }
`
