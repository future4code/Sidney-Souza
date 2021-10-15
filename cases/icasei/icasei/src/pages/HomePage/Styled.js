import styled from 'styled-components'

export const SearchDiv = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 110px;
  button {
    cursor: pointer;
  }
`

export const InfoDiv = styled.div`
  display: flex;
  text-align: center;
  margin-top: 15px;
  h1 {
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

export const MainDiv = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`
