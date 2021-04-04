import React from 'react';
// try this with the tutorial first, then rework

const List = (props) =>{
    const { repos } = props;
    if (!repos) return <p>Couldn't find location data</p>;
    return (
        <ul>
            <h2 className='list-head'>Available repos</h2>
            {repos.map((repo)=>{
                return (
                    <li key={repo.id} className='list'>
                        <span className='repo-text'>{repo.name}</span>
                        <span className='repo-description'>{repo.description}</span>
                    </li>
                );
            })}
        </ul>
    );
};
export default List;