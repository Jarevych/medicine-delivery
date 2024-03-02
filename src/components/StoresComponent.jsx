import React from 'react';

const Stores = ({ stores, onSelect }) => {
    console.log(stores);
    return (
        <div>
            <ul>
                {stores.map(store => (
                    <li key={store.id} onClick={() => onSelect(store.id)}>
                        {store.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stores;
