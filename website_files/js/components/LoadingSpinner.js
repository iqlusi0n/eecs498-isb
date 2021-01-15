import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadingSpinner.module.css';
import Loading from '../images/loading.svg';


const SpinnerThickness = {
    normal: '3px',
    thick: '5px',
};

/** 
 * ISB Client LoadingSpinner Component 
 * @module LoadingSpinner 
 * @exports module:LoadingSpinner */
export default function LoadingSpinner({
    size,
    thickness,
    margin
}) {
    const containerStyle = {
        '--spinnerSize': size,
        '--spinnerThickness': SpinnerThickness[thickness] || SpinnerThickness.normal,
        '--spinnerMargin': margin || 0
    };

    return ( <
        div className = {
            styles.container
        }
        style = {
            containerStyle
        } >
        <
        img className = {
            styles.spinner
        }
        src = {
            Loading
        }
        alt = "loading spinner" / >
        <
        /div>
    );
}

LoadingSpinner.propTypes = {
    size: PropTypes.string,
    thickness: PropTypes.oneOf(['normal', 'thick']),
};

LoadingSpinner.defaultProps = {
    size: '24px',
    thickness: 'normal',
};