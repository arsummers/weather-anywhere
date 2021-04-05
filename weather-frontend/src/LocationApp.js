import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Location from './component/Location';
import withListLoading from './component/withListLoading';

const LocationApp = () => {
    const ListLoading = withListLoading(Location);
    const [appState, setAppState] = useState({
      loading: false,
      locationData: null,
    });

    useEffect (() => {
      setAppState({ loading: true });
      const apiUrl = `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IPSTACK_API_KEY}`;
    
      axios.get(apiUrl).then((locationData)=>{
        const allLocationData = locationData.data;
        setAppState({ loading: false, locationData: allLocationData });
      })
    }, [setAppState]);
    return (
      <div className='App'>
        <div className='container'>
          <h1> Your location </h1>
        </div>
        <div className='location-container'>
            <ListLoading isLoading={appState.loading} locationData={appState.locationData} />
      </div>
      
      </div>

    )

}

export default LocationApp;
