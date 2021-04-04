import React from 'react';
// converts JSON object into 

const Location = (props) =>{
    const { locationData } = props;
    if (!locationData) return <p>Couldn't find location data</p>;
    return (
        <ul>
            <h2 className='list-head'>Location data</h2>

            {Array.of(locationData).map((location)=>{
                return (
                    <li className='list'>
                        <span className='city-des'> City: {location.city}
                        </span>
                        <span className='lat'> Latitude: {location.latitude}</span>
                        <span className='lon'> Longitude: {location.longitude}</span>

                    </li>
                );
            })}

        </ul>
    );
};
export default Location