import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [quoteInfo, setQuoteInfo] = useState({});

    useEffect(() => {
        getQuote();
    }, []);
    const getQuote = () => {
        fetch('https://api.quotable.io/random')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setQuoteInfo({
                    text: data.content,
                    author: data.author,
                });
                console.log(data);
            });
    };
    return (
        <div className="App">
            <div id="quote-box">
                <p id="text">
                    <i class="fa-solid fa-quote-left"></i>
                    {quoteInfo.text}
                </p>
                <p id="author">{`by ${quoteInfo.author}`}</p>
                <div className="quote-buttons">
                    <button id="new-quote" onClick={getQuote}>
                        New Quote
                    </button>
                    <a
                        id="tweet-quote"
                        target={'_blank'}
                        rel="noreferrer"
                        href={
                            `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=` +
                            quoteInfo.text +
                            quoteInfo.author
                        }>
                        <i class="fa-brands fa-twitter fa-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
