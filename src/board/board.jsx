import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './board.css';

export function Board(props) {
  const userName = props.userName;
  const [quoteInput, setQuoteInput] = React.useState('');
  const [imageFile, setImageFile] = React.useState(null);

  const quotesPlaceholder = [
        { id: 1, name: 'Friend 1', value: 'This is text. (1)', type: 'text'},
        { id: 2, name: 'Friend 2', value: '/Green-frog.png', type: 'image' },
        { id: 3, name: 'Friend 3', value: 'This is text. (2)', type: 'text'},
        { id: 4, name: 'Friend 4', value: '/Green-frog.png', type: 'image' },
    ];

  const [quotes, setQuotes] = React.useState(() => {
      const storedQuotes = localStorage.getItem("quotes");
      if (storedQuotes) {
          return JSON.parse(storedQuotes);
      } else {
          return quotesPlaceholder;
      }
    }
  );

  React.useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);


  const handleInput = (event) => {
    setQuoteInput(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleNewQuote = (newQuote) => {
    setQuotes((prevQuotes) => {
      let newQuotes = [newQuote, ...prevQuotes];
      if (newQuotes.length > 20) {
        newQuotes = newQuotes.slice(0, 20);
      }
      return newQuotes;
    });
  };

  const submitQuote = (event) => {
    event.preventDefault();
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newQuote = {
          id: Date.now(),
          name: userName,
          value: reader.result,
          type: 'image',
        };
        handleNewQuote(newQuote);
        setImageFile(null);
      };
      reader.readAsDataURL(imageFile);
    } else if (quoteInput.trim()) {
      const newQuote = {
        id: Date.now(),
        name: userName,
        value: quoteInput.trim(),
        type: 'text',
      };
      handleNewQuote(newQuote);
      setQuoteInput('');
    }
  };


  const quoteRows = [];
    if (quotes.length) {
      for (const [, quote] of quotes.entries()) {
        quoteRows.push(
          <div className="col-sm-6 col-md-4 col-lg-3" key={quote.id}>
            <div className="card h-100 shadow-sm border-success">
              <div className="card-body text-center">
                <h6 className="card-title text-success mb-2">{quote.name}</h6>
                {quote.type === 'text' ? (
                  <p className="card-text">{quote.value}</p>
                ) : (
                  <img
                    src={quote.value}
                    className="img-fluid rounded"
                    style={{ maxHeight: '150px', objectFit: 'contain' }}
                  />
                )}
              </div>
            </div>
          </div>
        );
      }
    };

  React.useEffect(() => {
    document.title = 'Create'; 
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const value = `${Math.floor(Math.random() * 5000)}`;
      let newQuote = {
        id: Date.now(),
        name: `user${value}`,
      };
      if (value >= 4000) {
        newQuote.value = '/Green-frog.png';
        newQuote.type = 'image';
      } else {
        newQuote.value = `text${value}`;
        newQuote.type = 'text';
      }  
      handleNewQuote(newQuote);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <main className="container py-4" id="mainBoard">
      <h2 className="text-center mb-4">Quote Board</h2>
      <div className='quoteArray mb-5'>
        <div className="row g-3">
          {quoteRows}
        </div>
      </div>

      <div className="card shadow-sm p-4 mx-auto mb-5 border-success" atyle={{ maxWidth: '600px '}}>
        <h5 className="text-center mb-3">Add a Quote or Image</h5>
        <form onSubmit={submitQuote}>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Type quote here"
              value={quoteInput} 
              onChange={handleInput} 
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="form-control"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-success btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}