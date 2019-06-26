import React, { Component } from 'react';

export default class Currency extends Component {
    handleClickButtonUSD = () => {
        const { fetchCurrency, setSelectedCurrency } = this.props;
        fetchCurrency();
        setSelectedCurrency('USD')
    };

    handleClickButtonEUR = () => {
        const { fetchCurrency, setSelectedCurrency } = this.props;
        fetchCurrency();
        setSelectedCurrency('EUR')
    };

    handleClickButtonRUR = () => {
        const { fetchCurrency, setSelectedCurrency } = this.props;
        fetchCurrency();
        setSelectedCurrency('RUR')
    };

    render() {
        const { isError, selectedCurrency, currentCurrency } = this.props;
        const loadingMessage = 'Loading...';
        const error = 'Something went wrong...'
        return (
            <div>
                <div>Currency {selectedCurrency}</div>
                <div>Buy {currentCurrency ? currentCurrency.buy : loadingMessage} UAH</div>
                <div>Sale {currentCurrency ? currentCurrency.sale : loadingMessage} UAH</div>
                <button onClick={this.handleClickButtonUSD}>USD</button>
                <button onClick={this.handleClickButtonEUR}>EUR</button>
                <button onClick={this.handleClickButtonRUR}>RUR</button>
                <p>{isError ? error : null}</p>
            </div>
        );
    }
}
