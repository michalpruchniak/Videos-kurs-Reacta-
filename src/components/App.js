import React from 'react';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

import SearchBar from './SearchBar'

class App extends React.Component {
    state = { videos: [] };
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
    render(){
        return (
            <div className="ui container+">
                <SearchBar onFormSubmit={ this.onTermSubmit } />
                I have {this.state.videos.length} videos
                <VideoList videos = {this.state.videos} />
            </div>
        );
    }
}

export default App;