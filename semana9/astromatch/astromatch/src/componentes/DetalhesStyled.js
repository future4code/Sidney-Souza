import styled from 'styled-components'

export const DivDetalhes = styled.div`
    padding: 15px;
    display: grid;
    grid-template-rows: 400px 1fr;
`

export const DivPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Blur = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${props => props.imagem});
    filter: blur(10px);
    z-index: 1;
    position: absolute;
    top: 0;
`

export const FotoPerfil = styled.img`
    max-width: 100%;
    max-height: 100%;
    z-index: 2;
`

export const DivDados = styled.div`
    margin: 8px;
    text-align: left;
    align-self: start;
    justify-self: left;
`

export const NomePerfil = styled.h2`
    margin: 0;
    display: inline-block;
`

export const IdadePerfil = styled.p`
    margin: 0 8px;
    font-size: 1.5em;
    display: inline-block;
`

export const Descricao = styled.p`
    margin: 8px 0;
    font-size: 1.2em;
`
export const DivApp = styled.div`
  margin: 0;
  padding: 0%;
  background-color: #d0d0d0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DivInterna = styled.div`
  width: 400px;
  height: 90vh;
  margin-top: 5px;
  border: 1px solid black;
  background-color: #fff;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 400px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  padding: 0 12px;
`

export const DivEspaco = styled.div`
  width: 1.4em;
  display: flex;
`

export const Logo = styled.img`
  height: 100%;
`
