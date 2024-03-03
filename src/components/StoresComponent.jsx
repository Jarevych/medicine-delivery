import React from 'react';
import { StoresStyled } from './StoresComponentStylyd';

const Stores = ({ stores, onSelect }) => {
    console.log(stores);
    return (
        <StoresStyled>
            <ul>
                {stores.map(store => (
                    <li key={store.id} onClick={() => onSelect(store.id)}>
                        {store.name}
                    </li>
                ))}
            </ul>
        </StoresStyled>
    );
};

export default Stores;
