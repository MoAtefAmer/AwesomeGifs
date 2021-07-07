import React from 'react';
import { Route } from 'react-router-dom';

 
export const PublicRoute = (props) => (
    <Route
      
    
        render={() =>
         
                props.component
            
        }
    />
);