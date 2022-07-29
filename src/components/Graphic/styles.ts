import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37.5rem;
  height: 15rem;
  background: #ededed;
  border-radius: 0.3125rem;
  margin: 0 auto;
  margin-bottom: 1.25rem;
  overflow-x: auto;

  p {
    font-size: var(--big-font-size);
    font-weight: var(--bold);
    color: var(--text-black-color);
  }

  .cards-wrapper {
    display: flex;
  }

  @media (max-width: 732px) {
    width: 450px;
  }

  @media (max-width: 530px) {
    width: 300px;
  }

  @media (max-width: 364px) {
    width: 250px;
  }

  @media (max-width: 300px) {
    width: 200px;
  }
`
