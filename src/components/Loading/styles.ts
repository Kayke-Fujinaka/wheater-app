import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Img = styled.div`
  display: flex;
  justify-content: center;
  animation: oscillate 1.75s ease-in forwards infinite;
  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`

export const Progress = styled.div`
  background: rgba(255, 255, 255, 0.1);
  justify-content: flex-start;
  border-radius: 6.25rem;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 2.5rem;
  width: 31.25rem;

  .progress-value {
    animation: load 1s normal forwards;
    box-shadow: 0 0.625rem 2.5rem -0.625rem #fbbf24;
    border-radius: 6.25rem;
    background: #fbbf24;
    height: 1.875rem;
    width: 0;

    @keyframes load {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }
  }
`
