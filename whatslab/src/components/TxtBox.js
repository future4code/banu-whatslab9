import React from "react";
import styled, { ThemeProvider } from "styled-components";


const CaixaUsuario = styled.input`
    border: none;
    background-color: #FF968A;
    
`
const CaixaMensagem = styled.input`
    border: none;
    grid-column: 2 / 10;
    background-color: #FF968A;
    
`
const BotaoEnviar = styled.button`
    background-color: #FF968A;
    border: none;
    color: white;       
    
`

const Box = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    max-height: 100vh;
    max-width: 100vw;
    height: 100vh;
    width: 50vw;
    justify-content: flex-end;
    background-color: #FEE1E8;
`
const MsgEnviada = styled.p ` 
    margin: 2% 1%;
    padding: 1%;
    background-color: #8FCACA;
    align-self: flex-start; 
    background-color: #55CBCD;
    color: white   

`
const BoxFormularios = styled.div` 
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 1fr;
    height: 5%;
    width: 100%;

`




export class TxtBox extends React.Component {
    state = {
        mensagem: [],
        valorUsuario: '',
        valorTexto: '' 
    }

    onChangeUsuario = (event) => {
        this.setState({valorUsuario: event.target.value}) 
    }

    onChangeMensagem = (event) => {
        this.setState({valorTexto: event.target.value})

    }

    onClickEnviar = () => {
        
        const msg = (this.state.valorUsuario + ": " + this.state.valorTexto);
        
        const m = [
            ...this.state.mensagem,
            {
            usuario: this.state.valorUsuario,
            texto: this.state.valorTexto,
            mensagemTexto: msg
            }
        ];     

        this.setState({mensagem: m})  
        this.setState({valorUsuario: ''})
        this.setState({valorTexto: ''})

             
    }


    render () {
        return (
            <Box>  
                
                {this.state.mensagem.map((elemento, indice) => {
                    return (
                        <MsgEnviada key={indice}>{elemento.mensagemTexto}</MsgEnviada>
                    )
                })}

                <BoxFormularios>
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

                    <BotaoEnviar onClick={this.onClickEnviar}>Enviar</BotaoEnviar> 
                </BoxFormularios>
            </Box>
        )
    }
}