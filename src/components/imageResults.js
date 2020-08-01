import React, { Component } from 'react'
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
//import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
//import GridTile from 'material-ui/GridList/GridTile';

export default class ImageResults extends Component {

state={
    open:false,
    currentImage:' '

}

handleOpen=image=>{
    this.setState({open:true,currentImage:image})
}


handleClose=()=>{
    this.setState({open:false})
}

    render() {

  let resultarray;
  const {results}=this.props;

  if(results)
  {
      resultarray=(
          <GridList cols={3}>
{
        results.map(image=>(
            <GridTile
            title={image.tags}
            key={image.id}
            subtitle={
                <span>
                by {image.user}</span>
            }
            actionIcon={
                <IconButton onClick={()=>this.handleOpen(image.largeImageURL)}>
                <ZoomIn color="white"/>
                </IconButton>
            }
             >
             <img src={image.largeImageURL} alt=""/>

            </GridTile>
        ))
      
        }
        </GridList>
      )
  }
  else{
      resultarray=null
  }
const actions=[
    <FlatButton label="close" primary={true} onClick={this.handleClose}/>
]

        return (
            <div>
                {resultarray}
                <Dialog 
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                   image src={this.state.currentImage} style={{width:'100%'}}
                   />
                   
            </div>
        )
    }
}
