import React, { Component } from 'react';
import Currency from './Currency'

export default class CurrencyContainer extends Component {
    state = {
        currency: [],
            // {"ccy":"USD","base_ccy":"UAH","buy":"26.05000","sale":"26.40000"},
            // {"ccy":"EUR","base_ccy":"UAH","buy":"29.15000","sale":"29.90000"},
            // {"ccy":"RUR","base_ccy":"UAH","buy":"0.38000","sale":"0.42000"},
            // {"ccy":"BTC","base_ccy":"USD","buy":"10229.3419","sale":"11306.1147"}
        selectedCurrency: '',
        isError: false,
    };

    fetchCurrency =() => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(res => res.json())
            .then(res => {
                this.setState({currency: res})
            })
            .catch(() => {
                this.setState({isError: true})
            });
    };

    setSelectedCurrency = newValue => {
        this.setState({ selectedCurrency: newValue});
    };

    render() {
        const currentCurrency = this.state.currency.find((item) => item.ccy === this.state.selectedCurrency);

        return (
            <div>
                <Currency
                    fetchCurrency={this.fetchCurrency}
                    selectedCurrency={this.state.selectedCurrency}
                    currentCurrency={currentCurrency}
                    setSelectedCurrency={this.setSelectedCurrency}
                    isError={this.state.isError}
                />
            </div>
        );
    }
}
