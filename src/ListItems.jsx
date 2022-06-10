import React from 'react';
import Item from './Item';


const ListItems = ({items, checkItem, deleteItem}) => {
    return (
        <>
        {items.length ? (
            <ul>
            
            {items.map(item=>(
                <Item
                    key={item.id}
                    item={item}
                    checkItem={checkItem}
                    deleteItem={deleteItem}
                />
    
            ))}
            </ul>            
        ) : (
            <p style={{color:'crimson', fontSize:'35px'}}>Your List Is Empty</p>
        )}
        </>

    );
};

export default ListItems;