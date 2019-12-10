import React from 'react';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import SearchBar from './SearchBar'

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
                        params: {
                            q: term,
                            part: 'snippet',
                            maxResults: 5,
                            key: 'AIzaSyBaCg22ryD1wHTONTbB17acvuERBhTZpN8'
                        }
        });
        
        this.setState({ videos: response.data.items })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }
    render(){
        return (
            <div className="ui container+">
                <SearchBar
                    onFormSubmit={ this.onTermSubmit }
                />
                I have {this.state.videos.length} videos
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={this.onVideoSelect}
                    videos = {this.state.videos}
                />
            </div>
        );
    }
}

export default App;