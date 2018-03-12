import React from 'react';


import List from "../../Components/Jobs/List"


import * as jobsActions from "../../Actions/jobsActions";
import {connect} from "react-redux";




class Jobs extends React.Component{

    // onOpenNew = () =>{
    //     this.props.onOpenNew();
    // }

    componentDidMount(){
        this.props.getJobs();
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

                <div style={style.header}>
                    {/*<Button variant="raised" color="secondary" onClick={this.onOpenNew}>Add User</Button>*/}
                    {/*<Dialog open={this.props.open} aria-labelledby="form-dialog-title">*/}
                        {/*<CreateUser/>*/}
                    {/*</Dialog>*/}
                </div>

                <div >
                    <List/>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    //onOpenNew: () => dispatch(usersActions.onOpenForm()),
    getJobs: () => dispatch(jobsActions.getJobs()),
});

const mapStateToProps = (state) => ({
    //open: state.usersR.openForm,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(Jobs);

export default withConnect;
