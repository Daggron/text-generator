import React from 'react';

class Output extends React.Component{
    
    render(){
        return(
            <p>
                {this.props.value}
            </p>
        )
    }
}

export default Output;