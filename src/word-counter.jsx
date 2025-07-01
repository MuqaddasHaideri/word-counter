import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Word & Character Counter</h2>
      <textarea
        style={styles.textarea}
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleChange}
      />
      <div style={styles.controls}>
        <button 
          onClick={handleClear} 
          style={styles.clearButton}
          disabled={!text}
        >
          Clear Text
        </button>
        <div style={styles.counters}>
          <span style={styles.counter}>Words: {wordCount}</span>
          <span style={styles.counter}>Characters: {charCount}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1.5rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
  },
  title: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontWeight: '500'
  },
  textarea: {
    width: '100%',
    minHeight: '150px',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    marginBottom: '1rem',
    resize: 'vertical',
    outline: 'none',
    transition: 'border 0.3s',
    fontFamily: 'inherit',
    ':focus': {
      borderColor: '#646cff'
    }
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  clearButton: {
    padding: '8px 16px',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#cc0000'
    },
    ':disabled': {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed'
    }
  },
  counters: {
    display: 'flex',
    gap: '1.5rem'
  },
  counter: {
    fontSize: '15px',
    color: '#555'
  }
};

export default WordCounter;