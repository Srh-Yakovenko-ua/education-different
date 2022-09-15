import React from 'react';
import {Link} from 'react-router-dom';

const Notfoundpage = () => {
    return (
        <div>
            this page doesn't exists. Go <Link to="/">home</Link>
        </div>
    );
};

export default Notfoundpage;