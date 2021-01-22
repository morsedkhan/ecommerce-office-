import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getDemoData} from '../../reducer/demo';

const Demo = ({ getDemoData, demo}) => {

    useEffect(() => {
        getDemoData();
    }, [])

    console.log(demo);
    
    return (
        <div>
            <h1>I am demo compoennt{demo && demo.names.map(el =>(
                <p>{el.name}</p>
            ))}</h1>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        // errors: state.error.errors,
        // isAuthenticated: state.auth.isAuthenticated,
        // isLoading: state.auth.isLoading,
        // loading: state.error.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDemoData: () => dispatch(getDemoData())
    }
}

export default connect(state => ({
    demo: state.demo.data
        // errors: state.error.errors,
        // isAuthenticated: state.auth.isAuthenticated,
        // isLoading: state.auth.isLoading,
        // loading: state.error.loading
    }), {getDemoData})(Demo);

