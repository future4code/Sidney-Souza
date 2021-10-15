import styled from 'styled-components'

export const ContainerVideo = styled.section`
  
  @media(min-width:769px){
      
    display:flex;
    justify-content: center;
}
    padding: 25px;
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    h4{
        margin-top: -2px;
        margin-left: 10px;
    }
    button {   
    cursor: pointer;
    }
`

export const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
h3{
    font-size: 15px;
}
`
