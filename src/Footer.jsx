import React from 'react';

const Footer = ({items}) => {
    const date = new Date();
    return (
        <footer>
            <h1 className='num' >{items.length}--{items.length>1 ? "items" : "item"}</h1>
            <h2>Copy & {date.getFullYear()} </h2>
        </footer>
    );
};

export default Footer