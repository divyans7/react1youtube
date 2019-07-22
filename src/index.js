import _ from 'lodash'; 
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
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
        
      };
            
      this.videoSearch('mangalyaan 2');
           


    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
          this.setState({ 
            videos : videos,
            selectedVideo : videos[0]
          
          });
        });
      }





    render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);


      return (
               <div>
                   <SearchBar onSearchTermChange = { videoSearch } />

                   <VideoDetail video={this.state.selectedVideo} />
                   
                   <VideList
                      onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}
                      videos={this.state.videos} />

               </div>
    
       );
    }


}


// thke this components HTML & put it in the DOM
ReactDOM.render(< App />, document.querySelector('.container'));