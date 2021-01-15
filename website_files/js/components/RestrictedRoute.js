import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

/** 
 * ISB Client RestrictedRoute Component 
 * @module RestrictedRoute 
 * @exports module:RestrictedRoute */
export default function RestrictedRoute({
    isAllowed,
    path,
    render
}) {
    return <Route path = {
        path
    }
    render = {
        isAllowed ? render : () => < Redirect to = '/' / >
    }
    />
}