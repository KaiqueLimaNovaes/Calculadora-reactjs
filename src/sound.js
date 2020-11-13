import React from 'react';
import sound from './click2.mp3';
import ReactAudioPlayer from 'react-audio-player';

class Sound extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <ReactAudioPlayer
                src={sound}
                autoPlay
                controls
            />
        );
    }
}

export default Sound