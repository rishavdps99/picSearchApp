import React, { Component } from 'react';
import axios from 'axios';
import ImageResults from './imageResults';
import MenuItem from '@material-ui/core/MenuItem';
import SelectField from 'material-ui/SelectField';

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state={
          search:'',
          apiUrl:"https://pixabay.com/api",
          apKey:'17564282-82549b5a1da88b4c3f5e250e3',
          results:[],
          amount:5
        }
        
      }

      onClick=(e)=>{
          const val=e.target.value;
          this.setState({
              [e.target.name]:e.target.value
            }, ()=>{
                if(val==='')
                {
                    this.setState({
                        results:[]
                    })
                }
                else{
                axios
                .get(
                    `${this.state.apiUrl}/?key=${this.state.apKey}&q=${
                        this.state.search
                    }&image_type=photo&per_page=${this.state.amount}`
                )
                .then(
                    res=>this.setState({results:res.data.hits})
                )
                .catch(err=>console.log(err));
                }
            })
      }

      onAmountChange=(e,index,value)=>{
          this.setState({amount:value})
      }
    render() {
        console.log(this.state.results)
        return (
            <div>
           
			<input 
				type="text" 
				placeholder="What are you Looking For..." 
                className="searchbox" 
                name="search"
                value={this.state.search}
                onChange={this.onClick}
            />


           <br />
           {/*}
           <SelectField
           className="select"
           name="amount"
           floatingLabelText="Amount"
           value={this.state.amount}
           onChange={this.onAmountChange}
         >
         
           <MenuItem value={5} primaryText="5" />
           <MenuItem value={10} primaryText="10" />
           <MenuItem value={15} primaryText="15" />
           <MenuItem value={30} primaryText="30" />
           <MenuItem value={50} primaryText="50" />
        </SelectField>*/}
         <br />
        
            {this.state.results.length>0 && (typeof(this.state.search)!=undefined)?( <ImageResults results={this.state.results}/>) :null}
            </div>
        )
    }
}
