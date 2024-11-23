import React, { useContext } from 'react';
import { contextForm } from '../Auth Contect/Authcontext';
import { Navigate } from 'react-router-dom';

const Privet = ({children}) => {
const {user,loader} = useContext(contextForm)
if(loader){
    return <span className="loading loading-bars loading-lg"></span>;
}

 if(user){
    return children;
 }
    return (
        <div>
            <Navigate to="/"></Navigate>

        </div>
    );
};

export default Privet;