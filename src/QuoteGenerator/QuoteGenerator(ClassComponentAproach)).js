import React from "react";
import { proverbs } from "./constants";
import { colors } from "./constants";

class QuoteGenerator extends React.Component {
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
}
