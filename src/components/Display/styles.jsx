import styled from 'styled-components'

export const DisplayContainer = styled.div`
  margin: 5px;
  width: 340px;
  border-radius: 5px;
`

export const DisplayLabel = styled.div`
  font-size: 1rem;
`

export const DisplayContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid var(--primary-border);
  background-color: var(--display);

  &:hover {
    border-color: var(--secondary-border);
    background-color: var(--display-hover);
  }
`
