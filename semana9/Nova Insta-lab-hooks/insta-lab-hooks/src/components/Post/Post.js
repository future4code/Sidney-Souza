import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'
import  styled from "styled-components"
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const ComentContainer = styled.div`

`

const Post = (props) => {
  const[curtido, setCurtido] = useState(false)
  const[numeroCurtidas, setnumeroCurtidas] = useState(0)
  const[comentando, setcomentando] = useState(false)
  const[numeroComentarios, setnumeroComentarios] = useState(0)
  const[comentarios, setcomentarios] = useState([])



  const onClickCurtida = () => {
  };

  const onClickComentario = () => {
    setcomentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios =[...comentarios , comentario]
    setcomentarios(listaDeComentarios)
    setcomentando(false)
    setnumeroComentarios(numeroComentarios + 1)
  }
  const caixaDeComentario = comentando ?(
    <secaoComentario enviarComentario={enviarComentario}/>) : (comentarios.map((comentario) =>{
      return(
        <ComentContainer>
          <p>{comentario}</p>
        </ComentContainer>
      )
    }))
  
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          // icone={iconeCurtida}
          onClickIcone={onClickCurtida}
           valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      { caixaDeComentario }
    </PostContainer>
  )
}

export default Post