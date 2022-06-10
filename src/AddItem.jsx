import React from 'react';
import {BiPlusMedical} from 'react-icons/bi'
import { useRef } from 'react';

const AddItem = ({handleSubmit, newItem ,setNewItem}) => {

    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit} >
            <input 
                ref={inputRef}
                name='addInput'
                className='addInput'
                type="text" 
                placeholder='Add items...'
                required
                autoFocus
                value = { newItem }
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button 
                type='submit'
                className='addBtn'
                onClick={()=> inputRef.current.focus()} 
                >
                
                <BiPlusMedical/>
            </button>
        </form>
    );
};

export default AddItem;