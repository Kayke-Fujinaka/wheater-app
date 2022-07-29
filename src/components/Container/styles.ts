import styled from 'styled-components'
export const ContainerDiv = styled.div`
  display: flex;
  width: 63rem;
  height: 32rem;
  margin: 9.375rem auto;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.6rem;
  opacity: 1;
  padding: 1rem;

  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    height: 60rem;
    width: 90%;
    margin: 2rem auto;
  }
`
