import React from 'react';
// converts JSON object into 

const List = (props) =>{
    const { locationData } = props;
    if (!locationData) return <p>Couldn't find location data</p>;
    return (
        <ul>
            <h2 className='list-head'>Location data</h2>

            {/* {Object.entries(locationData).map((location)=>{
                return (
                    <li className='list'>
                        <span className='city-des'>City name {location[0]}</span>

                    </li>
                );
            })} */}
            {Array.of(locationData).map((location)=>{
                return (
                    <li className='list'>
                        <span className='city-des'> {location.city}</span>

                    </li>
                );
            })}

        </ul>
    );
};
export default List