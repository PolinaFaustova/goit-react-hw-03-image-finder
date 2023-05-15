import React, {Component} from "react";
import { Searchbar } from './Searchbar/index';

import {AppStyled} from './App.styled';

export class App extends Component {

  state = {
    
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.search.value;
    console.log(value);

  }
  

  // componentDidMount() {
  //   this.setState({loading: true});

  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=34956140-3027e5abb464d64a1ffd53e5a&image_type=photo&orientation=horizontal&per_page=12')
  //   .then(res => res.json())
  //   .then(pixabay => this.setState({pixabay}))
  //   .finally(()=> this.setState({loading: false}));

  // }

  render() {


    return (
    <AppStyled>
    {/* {this.state.pixabay && (<div>{this.state.pixabay.name}</div>)}
    {this.state.loading && <h1>Loading</h1>} */}
     <Searchbar onSubmit={this.handleSearchSubmit}/>
     {/* <ImageGallery/>
     <ImageGalleryItem/>
     <Loader/>
     <Button/>
     <Modal/>  */}

    </AppStyled>
    )
    
  }
  
};
