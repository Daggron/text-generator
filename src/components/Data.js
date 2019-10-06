import React from 'react'
import Axios from 'axios'
import Output from './output'
class Data extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            html:true,
            para:3,
            text:''
        }
    }

    getData(){
        Axios.get('https://cors-anywhere.herokuapp.com/http://hipsterjesus.com/api?paras='+this.state.para+'&html='+this.state.html)
        .then(response=>{
            this.setState({
                text:response.data.text
            },()=>{
                console.log(this.state);
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    componentDidMount(){
        this.getData()
    }

   

    render(){
        return (
            <div>
                <Output value={this.state.text} />
               
            </div>
        )
    }
}

export default Data;
