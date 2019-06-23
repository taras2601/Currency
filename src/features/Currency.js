import React, { Component } from 'react';

export default class Currency extends Component {
    handleClickButtonUSD = () => {
        const { setSelectedCurrency } = this.props;
        setSelectedCurrency('USD')
    };

    handleClickButtonEUR = () => {
        const { setSelectedCurrency } = this.props;
        setSelectedCurrency('EUR')
    };

    handleClickButtonRUR = () => {
        const { setSelectedCurrency } = this.props;
        setSelectedCurrency('RUR')
    };

    render() {
        const {selectedCurrency, currentCurrency} = this.props;
        const loadingMessage = 'Loading...';
        return (
            <div>
                <div>Currency {selectedCurrency}</div>
                <div>Buy {currentCurrency ? currentCurrency.buy : loadingMessage} UAH</div>
                <div>Sale {currentCurrency ? currentCurrency.sale : loadingMessage} UAH</div>
                <button onClick={this.handleClickButtonUSD}>USD</button>
                <button onClick={this.handleClickButtonEUR}>EUR</button>
                <button onClick={this.handleClickButtonRUR}>RUR</button>
            </div>
        );
    }
}
