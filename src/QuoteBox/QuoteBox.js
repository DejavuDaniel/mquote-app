import './QuoteBox.css';


const QuoteBox = ({quote, author, fetchQuote, backImg}) => {

    return (
        <>
            <div className='quote-container' id='quote-container'>
                <div className='quote-text'>
                    <i className='fas fa-quote-left'></i>
                    <span id='quote'>{quote}</span>
                    <i className='fas fa-quote-right'></i>
                </div>
                <div className='quote-author'>
                    <span id='author'>{author}</span>
                </div>
                <div className='button-container'>
                    <button className='twitter-button' id='twitter' title='Tweet this!'>
                        <i className='fab fa-twitter'></i>
                    </button>
                    <button className='new-quote' onClick={fetchQuote} >New Quote</button>
                </div>
            </div>
        </>
    );

}

export default QuoteBox;
