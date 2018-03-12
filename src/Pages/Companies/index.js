import React from 'react';


import List from "../../Components/Companies/List"

import * as companiesActions from "../../Actions/companiesActions";
import {connect} from "react-redux";

class Companies extends React.Component{

    // onOpenNew = () =>{
    //     this.props.onOpenNew();
    // }

    componentDidMount(){
        this.props.getCompanies();
    }
    render(){

        const style = {
            header: {
                display: 'flex',
                paddingTop: 20,
                //justifyContent: 'flex-end',
            },
        };

        return (
            <div >
                <div >
                    <List/>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    //onOpenNew: () => dispatch(companiesActions.onOpenForm()),
    getCompanies: () => dispatch(companiesActions.getCompanies()),
});




const withConnect = connect(null, mapDispatchToProps)(Companies);

export default withConnect;