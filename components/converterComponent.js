import React, { Component } from "react";
import styles from "../styles/Converter.module.css";

const BASE_URL =
  "http://api.exchangeratesapi.io/latest?access_key=4765a1656ae8d06b7184dbe64b7fe966";

class Converter extends Component {
  state = {
    currencies: [
      "USD",
      "AUD",
      "SGD",
      "PHP",
      "EUR",
      "BGN",
      "CHF",
      "CZK",
      "BAM",
      "AED",
    ],
    base: "EUR",
    amount: "",
    convertTo: "USD",
    result: "",
    date: "",
    currencyData: {},
  };

  handleSelect = (e) => {
    e.preventDefault();
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null,
      },
      this.calculate
    );
  };

  handleInput = (e) => {
    e.preventDefault();
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null,
      },
      this.calculate
    );
  };
  componentDidMount = () => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          currencyData: data,
          base: data.base,
        });
        console.log(this.state.currencyData);
        console.log(this.state.base);
      });
  };
  calculate = () => {
    const amount = this.state.amount;
    const theNumber = this.state.currencyData.rates[this.state.convertTo];
    //bug
    if (amount === null) {
      return;
    } else {
      const result = Number.parseFloat(theNumber * amount).toFixed(3);
      console.log(theNumber);
      console.log(amount);
      console.log(result);
      const date = this.state.currencyData.date;
      this.setState({
        result,
        date,
      });
    }
  };

  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <div className={styles.ConverterComponent}>
        <div className={styles.textComp}>
          <h2>
            {amount}
            <strong className={styles.currencyTXT}> {base}</strong> is
            equevalent to
          </h2>
          <h2>
            {amount === "" ? "0" : result === null ? "Calculating..." : result}{" "}
            <strong className={styles.currencyTXT}>{convertTo}</strong>
          </h2>
          <p>Date:{amount === "" ? "/ / /" : date === null ? "" : date}</p>
        </div>
        <div className={styles.InputConverter}>
          <form>
            <input
              id="formCon01"
              type="number"
              value={amount}
              onChange={this.handleInput}
            />
            <select
              id="convertSelect"
              name="base"
              value={base}
              onChange={this.handleSelect}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </form>

          <form>
            <input
              id="convInput02"
              disabled={true}
              value={
                amount === ""
                  ? "0"
                  : result === null
                  ? "Calculating..."
                  : result
              }
            />
            <select
              id="convertSelect"
              name="convertTo"
              value={convertTo}
              onChange={this.handleSelect}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className={styles.listCur1}>
          <ul>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>USD</strong>-American
                Dollar
              </h5>
            </li>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>EUR</strong>-Euro
              </h5>
            </li>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>AUD</strong>-Australian
                dollar
              </h5>
            </li>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>SGD</strong>-Singapore
                dollar
              </h5>
            </li>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>BGN</strong>-Bulgarian
                lev
              </h5>
            </li>
          </ul>
        </div>
        <div className={styles.listCur2}>
          <ul>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>PHP</strong>-Philippine
                Peso
              </h5>
            </li>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>CHF</strong>-Swiss Franc
              </h5>
            </li>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>CZK</strong>-Czech Koruna
              </h5>
            </li>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>BAM</strong>-Bosnian Mark
              </h5>
            </li>
            <li>
              <h5>
                <strong className={styles.currencyTXT}>AED</strong>-Emirati
                Dirham
              </h5>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Converter;
