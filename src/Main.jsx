import React from 'react';
import AddItem from './AddItem';
import ListItems from './ListItems';
import Search from './Search';

const Main = ({items, checkItem, deleteItem, newItem, setNewItem, handleSubmit, search, setSearch, fetchError, loadTime, setLoadTime}) => {
    return (
        <main>
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            /> 
            <Search
                search={search}
                setSearch={setSearch}
            />
            <>
            
            {loadTime && <p style={{color:'green', fontSize:'35px'}}>Is Loading...</p> }
            {fetchError  && <p style={{color:'red', fontSize:"30px"}} >{`Error : ${fetchError}`}</p>}
                
            {!fetchError && !loadTime && <ListItems
                items={items.filter(item=> ((item.title).toLowerCase()).includes(search.toLowerCase()))}
                checkItem={checkItem}
                    deleteItem={deleteItem}
                />}
            </>
        </main>
    );
};

export default Main;