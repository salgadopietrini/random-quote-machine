import React, { useState } from "react";
import { proverbs } from "./constants";
import { colors } from "./constants";
import "./style.css";

/* class QuoteGenerator extends React.Component {
  constructor(props) {
    let firstIndex = Math.floor(Math.random() * proverbs.length);
    super(props);
    this.state = {
      message: proverbs[firstIndex].message,
      cite: proverbs[firstIndex].cite,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let index = Math.floor(Math.random() * proverbs.length);
    this.setState({
      message: proverbs[index].message,
      cite: proverbs[index].cite,
    });
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        className="body"
      >
        <div className="citeBox" id="quote-box">
          <div className="mainVerse" id="text">
            {this.state.message}
          </div>
          <div className="cite" id="author">
            {this.state.cite}
          </div>
          <div className="buttonBox">
            <button
              onClick={this.handleClick}
              className="button"
              id="new-quote"
            >
              Next proverb
            </button>
            <button className="button2">
              <a
                href={
                  "https://twitter.com/intent/tweet?text=" +
                  this.state.message +
                  "  " +
                  this.state.cite
                }
                rel="noreferrer"
                target="_blank"
                id="tweet-quote"
              >
                <i class="material-icons">share</i>
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
} */

function QuoteGenerator() {
  let index = Math.floor(Math.random() * proverbs.length);

  const [message, setMessage] = useState(proverbs[index].message);
  const [cite, setCite] = useState(proverbs[index].cite);
  function handleClick() {
    let i = Math.floor(Math.random() * proverbs.length);
    setMessage(proverbs[i].message);
    setCite(proverbs[i].cite);
  }

  return (
    <div
      style={{
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      }}
      className="body"
    >
      <div className="citeBox" id="quote-box">
        <div className="mainVerse" id="text">
          {message}
        </div>
        <div className="cite" id="author">
          {cite}
        </div>
        <div className="buttonBox">
          <button
            onClick={() => {
              handleClick();
            }}
            className="button"
            id="new-quote"
          >
            Next proverb
          </button>

          <a
            href={
              "https://twitter.com/intent/tweet?text=" + message + "  " + cite
            }
            rel="noreferrer"
            target="_blank"
            id="tweet-quote"
          >
            <button className="button2">
              <i class="material-icons">share</i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <QuoteGenerator />
    </div>
  );
}

export default App;
