import React from 'react';
import {FiTrash2} from 'react-icons/fi'


const Item = ({item, checkItem, deleteItem}) => {
    return (
        <li key={item.id} className="item">
        <input 
            checked={item.checked}
            type="checkbox" 
            onChange={()=>checkItem(item.id)}
        />
        
        <label 
            style={item.checked ? {textDecoration:'line-through'}: null}
            onDoubleClick={()=>checkItem(item.id)}
        >
            {item.title}
        </label>
        <FiTrash2
            role="button"
            onClick={()=>deleteItem(item.id)}
        />
    </li>
    );
};

export default Item;