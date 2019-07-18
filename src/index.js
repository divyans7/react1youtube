import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import  SearchBar  from './components/search_bar';
import VideList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyA_jiu_OHEv24Yxd7vECRYwqT7daH2oDRk';



// crrate a new component & it should produce some HTML
class App extends Component  {
    constructor(props) {
        super(props)

            this.state = {videos: []}; 
            

           



    }

    componentDidMount() {
        YTSearch({key: API_KEY, term: 'tekken'}, (videos) => {
          this.setState({ videos });
        });
      }





    render() {
      return (
               <div>
                   <SearchBar />

                   <VideoDetail video={this.state.videos[0]} />
                   
                   <VideList videos={this.state.videos} />

               </div>
    
       );
    }


}


// thke this components HTML & put it in the DOM
ReactDOM.render(< App />, document.querySelector('.container'));