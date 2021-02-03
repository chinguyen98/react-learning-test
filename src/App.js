import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';

function getUser() {
  return Promise.resolve({ id: '1', name: 'Robin' });
}

function App() {
  const [search, setSearch] = React.useState('');
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {user ? <p>Signed in as {user.name}</p> : null}
        <Search
          value={search}
          onChange={handleChange}
        >
        </Search>
        <p>Searches for {search ? search : '...'}</p>
      </header>
    </div>
  );
}

export default App;
