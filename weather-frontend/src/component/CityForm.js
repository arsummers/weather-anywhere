import React, { useReducer, useState } from 'react';

const formReducer = (state, event)=>{
    return {
        ...state,
        [event.name]: event.value
    }
}

function CityForm(){

    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event =>{
        event.preventDefault();
        setSubmitting(true);

        setTimeout(()=>{
            setSubmitting(false);
        }, 3000)
    }

    const handleChange = event =>{
        setFormData({
            name: event.target.name,
            value: event.target.value
        })
    }

    return(
        <div className='wrapper'>
            <h1>Enter your city and 2-letter state code to get your weather</h1>
            {submitting &&
            <div>Submitting the following...
                <ul>
                    {Object.entries(formData).map(([name, value])=>(
                        <li key={name}>{name}:{value.toString()}</li>
                    ))}
                </ul>
            </div>
            }
            <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    <p>City</p>
                    <input name='city-name' onChange={handleChange} value={formData.name || ''}/>
                </label>
                <label>
                    <p>State</p>
                    <input name='state' onChange={handleChange} value={formData.name || ''}/>

                </label>
            </fieldset>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CityForm;