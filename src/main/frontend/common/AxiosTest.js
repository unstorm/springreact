import React, {Component}  from 'react';
import Axios from 'axios';

class AxiosTest extends Component{
    constructor(props){
        super(props);
        Axios.get('http://localhost:8080/api/employees').then(
            function(response){
                console.log(response.data);
            }
        )

    }

    render(){
        return(
            <div>
                <h2>Axios test!!!!</h2>
            </div>
        );
    }
}

export default AxiosTest;
