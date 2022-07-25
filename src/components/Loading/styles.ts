import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Balls = styled.div`
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
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 500px;

  .progress-value {
    animation: load 3s normal forwards;
    box-shadow: 0 10px 40px -10px var(--white-color);
    border-radius: 100px;
    background: var(--white-color);
    height: 30px;
    width: 0;

    @keyframes load {
      0% {
        width: 0;
      }
      50% {
        width: 38%;
      }
      100% {
        width: 100%;
      }
    }
  }
`
