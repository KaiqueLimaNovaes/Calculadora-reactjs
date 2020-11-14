import React from 'react';
import './calculadora.css';
import clickSound from './click2.mp3';
import sonic from './sonicMusic.mp3';
import easter from './sonicGif.gif';
import {Howl} from 'howler';

class Calculadora extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            resultado: 0,
            operador: "(op)",
            img: 0
        };

        this.manipulador01 = this.manipulador01.bind(this);
        this.manipulador02 = this.manipulador02.bind(this);
        this.somar = this.somar.bind(this);
        this.subtrair = this.subtrair.bind(this);
        this.multiplicar = this.multiplicar.bind(this);
        this.dividir = this.dividir.bind(this);
    }

    manipulador01(event){
        this.setState({ num1: event.target.value });
    }
    manipulador02(event){
        this.setState({ num2: event.target.value });
    }

    somar(){
        this.setState({resultado: (parseFloat(this.state.num1) + parseFloat(this.state.num2)), operador:"+"});
        //Essa constante chama o arquivo de som
        const sound = new Howl ({
            src: [clickSound],
        })
        sound.play();

        if(this.state.resultado == 1991){
            const sMusic = new Howl ({
                src: [sonic],
                autoplay: true,
            })
            this.state.img = easter
        }
    }
    subtrair(){
        this.setState({resultado: (parseFloat(this.state.num1) - parseFloat(this.state.num2)), operador:"-"});
        const sound = new Howl ({
            src: [clickSound],
        })
        sound.play();

        if(this.state.resultado == 1991){
            const sMusic = new Howl ({
                src: [sonic],
                autoplay: true,
            })
        }
    }
    multiplicar(){
        this.setState({resultado: (parseFloat(this.state.num1) * parseFloat(this.state.num2)), operador:"*"});
        const sound = new Howl ({
            src: [clickSound],
        })
        sound.play();

        if(this.state.resultado == 1991){
            const sMusic = new Howl ({
                src: [sonic],
                autoplay: true,
            })
        }
    }
    dividir(){
        this.setState({resultado: (parseFloat(this.state.num1) / parseFloat(this.state.num2)), operador:"/"});
        const sound = new Howl ({
            src: [clickSound],
        })
        sound.play();

        if(this.state.resultado == 1991){
            const sMusic = new Howl ({
                src: [sonic],
                autoplay: true,
            })
        }
    }

    render(){
        return (
            <div class="row">
                <div class="col">
                    <div id="corpo">
                        <div class="col">
                            <div id="tela">
                                <p id="textoTela">{this.state.num1} {this.state.operador} {this.state.num2} = {this.state.resultado}</p>
                                <img src={this.state.img} width="80px"></img>
                            </div>
                        </div>
                        <form>
                            <h2>Valor 1:</h2>
                            <input type="text" onChange={this.manipulador01} />
                            <br />

                            <h2>Valor 2:</h2>
                            <input type="text" onChange={this.manipulador02} />
                            <br /><br />

                            <div class="row">
                                <div class="col">
                                    <input id="botaoS" type="button" value="Somar" onClick={this.somar} />
                                    <br /><br />
                                    <input id="botaoSu" type="button" value="Subtrair" onClick={this.subtrair} />
                                </div>
                                <div class="col">
                                    <input id="botaoM" type="button" value="Multiplicar" onClick={this.multiplicar} />
                                    <br /><br />
                                    <input id="botaoD" type="button" value="Dividir" onClick={this.dividir} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculadora