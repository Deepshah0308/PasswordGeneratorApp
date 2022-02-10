import React from "react";
import styles from "../styles/default.module.css";

function GeneratePassword(maxLength, uppercase, number, symbols) {
    let lenght = maxLength,
        charset = "abcdefghijklmnopqrstuvwxyz",
        value = "";

    if (uppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (number) {
        charset += "1234567890";
    }

    if (symbols) {
        charset += "~`!@#$%^&*()_-+={[}]|:;<,>.?/";
    }

    for (var i = 0, n = charset.length; i < lenght; i++) {
        value += charset.charAt(Math.floor(Math.random() * n));
    }

    return value;
}

class PasswordGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxCharacter: 12,
            uppercase: true,
            number: true,
            symbols: true,
            password: GeneratePassword(12, true, true, true),
        };
    }


    handleChange(evt, isNumber) {
        const { value, maxLength } = evt.target;

        isNumber
            ? this.setState({
                maxCharacter: value.slice(0, maxLength),
            })
            : this.setState({
                password: value,
            });
    }

    render() {
        const { PasswordGenerator } = this.props;
        const { character_qtd, uppercase, numbers, symbols, generate, copyTocliboard } = PasswordGenerator;
        return (


            <form className={styles.form}>
                <input
                    className={styles.password_text}
                    value={this.state.password}
                    type="text"
                    onChange={(evt) => this.handleChange(evt)}
                />

                <div className={styles.options}>
                    <input
                        className={styles.character_qtd}
                        value={this.state.maxCharacter}
                        type="number"
                        id="character_qtd"
                        maxLength="2"
                        onChange={(evt) => this.handleChange(evt, true)}
                    />
                    <label htmlFor="character_qtd">{character_qtd}</label>

                    <input
                        onChange={(evt) => this.setState({ uppercase: evt.target.checked })}
                        className={styles.uppercases}
                        type="checkbox"
                        id="uppercases"
                        name="uppercases"
                        checked={this.state.uppercase}
                    />
                    <label htmlFor="uppercases">{uppercase}</label>

                    <input
                        onChange={(evt) => this.setState({ number: evt.target.checked })}
                        className={styles.number}
                        type="checkbox"
                        id="number"
                        name="number"
                        checked={this.state.number}
                    />
                    <label htmlFor="number">{numbers}</label>

                    <input
                        onChange={(evt) => this.setState({ symbols: evt.target.checked })}
                        className={styles.symbols}
                        type="checkbox"
                        id="symbols"
                        name="symbols"
                        checked={this.state.symbols}
                    />
                    <label htmlFor="symbols">{symbols}</label>
                </div>

                <button
                    onClick={() => {
                        this.setState({
                            password: GeneratePassword(this.state.maxCharacter, this.state.uppercase, this.state.number, this.state.symbols),
                        });
                    }}
                    className={styles.generate_btn}
                    type="button"
                >
                    {generate}
                </button>
                <button
                    onClick={(e) => navigator.clipboard.writeText(this.state.password)}
                    className={styles.copy_btn}
                    type="button"
                >
                    {copyTocliboard}
                </button>
            </form>
        );
    }
}

export default PasswordGenerator;
