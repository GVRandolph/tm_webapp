import {Component} from "react";
import "./styles.css";
import "./css/PageInputCode.css";

import traduction from "./traduction";
import idPage from "./idPage";
import codeButton from "./codeButton";
import CodeButton from "./codeButton";

class PageInputCode extends Component {
    render() {

        // initialize buttons
        let buttons = [];
        for (let i = 5; i > 0; i--) {
            for (let j = 0; j < 3; j++) {
                buttons.push(
                    <CodeButton
                        number={i}
                        digit={j}
                        codeValue={this.props.codeValue}
                        setCodeDigit={(number, digit) => this.props.setCodeDigit(number, digit)}
                    ></CodeButton>);
            }
            buttons.push(<br/>);
        }

        return (
            <div className="mainTab">

                <h2>{traduction[this.props.language]["CHECKCODE"]}</h2>

                {this.props.codeValue === '___' ? (
                    <div className="codeDisplayer">{traduction[this.props.language]["INPUTCODE"]}</div>
                ) : (
                    <div
                        className={
                            "codeDisplayer code "+
                            (this.props.wrongCode ? "wrongCode" : "") +
                            (this.props.correctCode ? "correctCode" : "")
                            }
                    >
                        {this.props.codeValue}
                    </div>
                )}

                { !this.props.wrongCode && !this.props.correctCode ? (
                    <span className="wrongCode">&nbsp;</span>
                ) : null}
               {this.props.wrongCode ? (
                    <span className="wrongCode">{traduction[this.props.language]["FALSECODE"]}</span>
                ) : null}
                {this.props.correctCode ? (
                    <span className="correctCode">{traduction[this.props.language]["GOODCODE"]}</span>
                ) : null}

                <div>
                    <span className="blueTriangle"></span>
                    <span className="yellowSquare"></span>
                    <span className="purpleCircle"></span>
                </div>
                <div className="codeInserter">
                    {buttons}
                </div>

                <input
                    className="fullgreen"
                    type="button"
                    value={traduction[this.props.language]["TESTCODE"]}
                    onClick={() => this.props.testCode()}
                />

                <div className="footer">
                    <a
                        id="homeBut"
                        className="backlink"
                        type="submit"
                        onClick={() => this.props.changePage(idPage["P_INGAME"])}
                    >
                        {traduction[this.props.language]["BACKTOGAME"]}
                    </a>
                </div>

            </div>
        );
    }
}

export default PageInputCode;