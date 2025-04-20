import { useState } from 'react';

const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={() => { onClick(value)}}
      style={{
        ...styles.button,
        backgroundColor: value === 'C' ? '#ff4d4d' : styles.button.backgroundColor,
      }}
    >
      {value}
    </button>
  );
};

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div style={styles.calculator}>
      <h2 style={styles.title}>🧮 React Calculator</h2>
      <input type="text" value={input} readOnly style={styles.display} />
      <div style={styles.grid}>
        {buttons.map((btn) => (
          <Button  value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={styles.app}>
      <Calculator />
    </div>
  );
};

const styles = {
  app: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: 'border-box',
  },
  calculator: {
    background: '#ffffff',
    padding: '1.5em',
    borderRadius: '1em',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '320px',
    maxHeight: '90vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1em',
    fontWeight: '600',
    fontSize: '1.2em',
    color: '#333'
  },
  display: {
    width: '100%',
    padding: '0.6em',
    fontSize: '1.2em',
    borderRadius: '0.4em',
    marginBottom: '1em',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
    textAlign: 'right',
    outline: 'none',
    boxSizing: 'border-box',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.5em',
    flexGrow: 1,
  },
  button: {
    padding: '0.7em',
    fontSize: '1em',
    borderRadius: '0.4em',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  }
};

export default App;
