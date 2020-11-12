import React from 'react';
import './calculadora.css';

class Calculadora extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            resultado: 0,
            operador: "(op)",
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
        let audio1 = new Audio('./click.mp3');
        audio1.play();
    }
    subtrair(){
        this.setState({resultado: (parseFloat(this.state.num1) - parseFloat(this.state.num2)), operador:"-"});
    }
    multiplicar(){
        this.setState({resultado: (parseFloat(this.state.num1) * parseFloat(this.state.num2)), operador:"*"});
    }
    dividir(){
        this.setState({resultado: (parseFloat(this.state.num1) / parseFloat(this.state.num2)), operador:"/"});
    }

    /*
    sound(){
        let audio1 = new Audio('./click.mp3');
        audio1.play();
    }
    */

    render(){
        return (
            <div class="row">
                <div class="col">
                    <div id="corpo">
                        <div class="col">
                            <div id="tela">
                                <p id="textoTela">{this.state.num1} {this.state.operador} {this.state.num2} = {this.state.resultado}</p>
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