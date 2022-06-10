import React from "react";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import apiRequest from "./apiRequest";


const Content=()=>{
    const [items, setItems] = useState([]);

    const [fetchError, setFetchError] = useState(null);

    const [loadTime, setLoadTime] = useState(true);

    const API_URL = '  http://localhost:3500/items';

    useEffect(() => {
      const fetchItems = async ()=>{
        try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error('did not receive expected data')
          const listItems = await response.json();
          setItems(listItems)
          setFetchError(null);
        }
        catch(err){
          
          setFetchError(err.message)
        }
        finally{
          setLoadTime(false)
        }
      }

      setTimeout(()=>{
        (async ()=> await fetchItems())();

      }, 2000)

    }, []);

    const [newItem, setNewItem] = useState('');

    const addItem = async(item)=>{
      const id = items.length ? items[items.length - 1 ].id + 1 : 1;
      const myNewItem = {id, checked:false, title: item };
      const listItems = [...items, myNewItem];
      setItems(listItems);
      
      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(myNewItem)
      }

      const result = await apiRequest(API_URL, postOptions)

      if(result) setFetchError(result);
    }

    const handleSubmit =(e)=>{
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      setNewItem(''); 
    }



    const checkItem = async(id)=>{
        const listItems = items.map(item=> item.id === id ? {...item, checked:!item.checked}: item);
        setItems(listItems)

        const myItem = listItems.filter(item=> item.id === id);
        const updateOptions = {
          method: 'PATCH',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({checked : myItem[0].checked})
        };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if(result) setFetchError(result);
    }

    const deleteItem = async(id)=>{
        const listItems = items.filter(item=> item.id !== id);
        setItems(listItems)

        const deleteOptions = {
          method : 'DELETE'
        }

        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, deleteOptions);
        if(result) setFetchError(result);
        

    }

    const[search, setSearch] = useState('');

    return(
       <>
        <Header/>
        <Main
          loadTime={loadTime}
          setLoadTime={setLoadTime}
          fetchError={fetchError}
          search={search}
          setSearch={setSearch}
          newItem={newItem}
          setNewItem={setNewItem}
          items={items}
          checkItem={checkItem}
          deleteItem={deleteItem}
          handleSubmit={handleSubmit}
        />

        <Footer

            items={items}
        />
       </>
    )
}

export default Content;