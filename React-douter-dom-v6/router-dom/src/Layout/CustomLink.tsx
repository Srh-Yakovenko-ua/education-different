import React from 'react';
import {Link, useMatch} from 'react-router-dom';

const CustomLink = ({children,to,...restProps} : any ) => {
    const match = useMatch(to)
    console.log(match)  // match возвращает null или какой-то обьект если он есть
    return (
        <Link to={to}
              {...restProps}
            style={{
                color : match ? 'aqua' : 'white'
            }}>
            {children}
        </Link>
    );
};

export default CustomLink;