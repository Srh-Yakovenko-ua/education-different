import React from 'react';
import {Link, useMatch} from 'react-router-dom';

const CustomLink = ({children,to,...restProps} : any ) => {
    const match = useMatch(to)
    console.log(match)
    return (
        <Link to={to}
              {...restProps}
            style={{
                color : match ? 'blue' : 'white'
            }}
        >
            {children}
        </Link>
    );
};

export default CustomLink;