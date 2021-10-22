import React, { useState } from "react";
import { quotes } from "../assets/constants";
import { colors } from "../assets/constants";

export default function QuoteGenerator() {
  let index = Math.floor(Math.random() * quotes.length);

  const [message, setMessage] = useState({
    quote: quotes[index].quote,
    author: quotes[index].author,
  });

  function handleClick() {
    let i = Math.floor(Math.random() * quotes.length);
    setMessage({
      quote: quotes[i].quote,
      author: quotes[i].author,
    });
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
          {message.quote}
        </div>
        <div className="cite" id="author">
          {message.author}
        </div>
        <div className="buttonBox">
          <button
            onClick={() => {
              handleClick();
            }}
            className="button"
            id="new-quote"
          >
            Next cite
          </button>

          <a
            href={
              "https://twitter.com/intent/tweet?text=" +
              message.quote +
              "  " +
              message.author
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
