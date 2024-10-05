
import { useEffect, useState } from 'react';
import './index.css';
import { fetchQuoteData } from './app/redux/features/quoteSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  // State to manage the quote index
  const [quoteIndex, setQuoteIndex] = useState(0);
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'cyan'];
  const color = colors[quoteIndex];



  // Fetch quotes on mount
  useEffect(() => {
    dispatch(fetchQuoteData());
  }, [dispatch]);

  // Update background color when the quote index changes
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  // Get quote data from Redux store
  const quotes = useSelector((state) => state.quote.data);

  // Cycle through quotes and colors
  const getQuoteIndex = () => {
    setQuoteIndex((prevState) => {
      const nextIndex = (prevState + 1) % colors.length; // Cycle through colors
      return nextIndex;
    });
  };

  const styles = {
    backgroundColor: color,
  };

  return (
    <>
      <div className="main"  >
        {quotes &&
          [quotes.jokes[quoteIndex]]?.map((quote) => (
            <div key={quote?.id}>
              <p className="text" style={{ color }}>{quote?.setup}</p>
              <em style={{ color }} id="author">
                {quote?.category}
              </em>
            </div>
          ))}

        <div className="navigation">
          <div className="links">
            <a style={styles} href="#">
              🐥
            </a>
            <a style={styles} href="#">
              T
            </a>
          </div>

          <button style={styles} onClick={getQuoteIndex}>
            New Quote
          </button>
        </div>
      </div>
      <blockquote>More Life</blockquote>
    </>
  );
}
