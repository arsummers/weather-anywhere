import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/List';
import withListLoading from './component/withListLoading';

function App() {
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
      loading: false,
      repos: null,
    });

    useEffect (() => {
      setAppState({ loading: true });
      const apiUrl = `https://api.github.com/users/arsummers/repos`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((repos) => {
          setAppState({ loading: false, repos: repos });
        });
    }, [setAppState]);
    return (
      <div className='App'>
        <div className='container'>
          <h1> The repos </h1>
        </div>
        <div className='repo-container'>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built {' '}
          <span role='img' aria-label='love'>
          💚
          </span>{' '}
          tutorial link: https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
        </div>
      </footer>
      </div>

    )

}

export default App;
