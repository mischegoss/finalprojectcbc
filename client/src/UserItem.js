import React, {Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';

const options = {
  autoStart: false,
  continuous: false
}

const phone = "Phone"

class Dictaphone extends Component {

 handleTranscript = (ev) => {
    
    const transcriptMessage  =  ev.target.value;
    console.log(transcriptMessage);
    console.log(phone);
 }
  render() {
    const { transcript, resetTranscript, startListening, stopListening, browserSupportsSpeechRecognition } = this.props
    

    if (!browserSupportsSpeechRecognition) {
      console.log("No support")
      return null
    }

   

    return (
      <div>
        <button onClick={startListening}>Start</button>
        <button onClick={stopListening}>Stop</button>

        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>

        <button value = {transcript}  onClick={this.handleTranscript} >SAVE</button>
      </div>
    )
  }
}

export default SpeechRecognition(options)(Dictaphone)
  


