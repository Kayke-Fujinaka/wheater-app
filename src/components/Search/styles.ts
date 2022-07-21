import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.75rem;

  h3 {
    font-weight: var(--normal);
    font-size: var(---medium-font-size);
    color: var(--text-black-color);
  }
  input {
    margin-left: 0.3125rem;
    padding: 0.25rem;
    font-size: var(---medium-font-size);
    width: 9em;
    height: 1.75rem;
    background: #ffffff;
    border: 0.0313rem solid #979797;
    border-radius: 0.3125rem;

    :focus {
      outline: none;
    }
  }
  @media (max-width: 970px) {
    flex-direction: column;
    input {
      width: 90%;
      margin-top: 20px;
    }
    h3 {
      font-size: var(--big-font-size);
    }
  }
`
