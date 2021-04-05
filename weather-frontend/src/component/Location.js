import React from 'react';

const Location = (props) =>{
    const { locationData } = props;
    if (!locationData) return <p>Couldn't find location data</p>;
    return (
        <ul>

            {Array.of(locationData).map((location)=>{
                return (
                    <p className='list'>
                        <span className='city-des'> City: {location.city}
                        </span>
                        <span className='lat'> Latitude: {location.latitude}</span>
                        <span className='lon'> Longitude: {location.longitude}</span>

                    </p>
                );
            })}

        </ul>
    );
};
export default Location