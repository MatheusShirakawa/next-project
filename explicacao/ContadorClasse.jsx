import React from "react";

export default class contadorClasse extends React.Component{
    constructor() {
        super();
        this.state = {
            count:0,
        };
    }

    render(){
        return (
            <div className="formatacao-geral">
                <p className="numero-principal">{this.state.count}</p>
                <div className="botoes">
                    <button className="botao cor1"
                        onClick={() => this.setState({ count: this.state.count - 1 })}
                    />
                    {this.state.count}
                    <button className="botao cor2"
                        onClick={() => this.setState({ count: this.state.count + 1 })}
                    />
                </div>
            </div>
        )
    }
}
