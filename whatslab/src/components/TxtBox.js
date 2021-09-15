import React from "react";
import styled from "styled-components";


const CaixaUsuario = styled.input`
    border: 1px solid black;
    height: 4%;
    width: 20%;
`
const CaixaMensagem = styled.input`
    border: 1px solid black;
    height: 4%;
    width: 80%;
`
const BotaoEnviar = styled.button`
    height: 5%;
`

const Box = styled.div`
    margin: 0 auto;
    display: flex;
    border: 1px solid black;
    max-height: 100vh;
    max-width: 100vw;
    height: 100vh;
    width: 50vw;
    justify-content: stretch;
    align-items: flex-end;
`


export class TxtBox extends React.Component {
    state = {
        valorUsuario: '',
        valorTexto: '' 
    }

    onChangeUsuario = (event) => {
        this.setState({valorUsuario: event.target.value})
        
    }

    onChangeMensagem = (event) => {
        this.setState({valorTexto: event.target.value})
    }

    onClickEnviar = (event) => {
        

    }

    render () {
        return (
            <Box>  

                <div>
                    <p>{this.state.valorUsuario}: {this.state.valorTexto} </p>
                </div>

                <CaixaUsuario 
                name={'usuario'} 
                placeholder ='Usuário' 
                onChange = {this.onChangeUsuario}
                value={this.state.valorUsuario}
                />

                <CaixaMensagem 
                name={'mensagem'} 
                placeholder='Mensagem' 
                onChange = {this.onChangeMensagem}
                value={this.state.valorTexto}
                />

                <BotaoEnviar>Enviar</BotaoEnviar> 

            </Box>
        )
    }
}