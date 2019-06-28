import React, {Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
<<<<<<< HEAD
=======
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


>>>>>>> Changes

const options = {
  autoStart: false,
  continuous: false
}



class Dictaphone extends Component {

<<<<<<< HEAD
=======

>>>>>>> Changes
 handleTranscript = (ev) => {
    
    const transcriptMessage  =  ev.target.value;
    console.log(transcriptMessage);
    this.props.callbackFromParent(transcriptMessage);
    
<<<<<<< HEAD
 }

 


  render() {
    const { transcript, resetTranscript, startListening, stopListening, browserSupportsSpeechRecognition } = this.props
=======
    
 }


  render() {
    const { transcript, resetTranscript, startListening, stopListening, browserSupportsSpeechRecognition } = this.props

    const startStyle = {
      backgroundColor: 'green',
      height: '50px',
      width: '80vw',
      textAlign: 'center',
      color: 'white',
      marginBottom: '20px',
      marginTop: '30px'
      
    }

    const textStyle = {
      backgroundColor: 'yellow',
      height: '100px',
      width: '80vw',
      textAlign: 'center',
      color: '#643200',
      marginBottom: '20px'

      
    }

    const stopStyle = {
      backgroundColor: 'red',
      height: '50px',
      width: '80vw',
      textAlign: 'center',
      color: 'white',
      marginBottom: '20px'
      
    }

    

    
>>>>>>> Changes
    
    

    if (!browserSupportsSpeechRecognition) {
      console.log("No support")
      return null
    }

<<<<<<< HEAD
  

    return (
      <div>
        <button onClick={startListening}>Start</button>
        <button value={transcript} onClick={stopListening} onClick={this.handleTranscript}>Stop</button>

        <button onClick={resetTranscript}>Reset</button>
        <span >{transcript}</span>

      

      
        
      </div>
=======
   

    return (
      
      <Container>
        <ul className="mui-list--unstyled ">
        <li> <Button  variant="raised"  onClick={startListening} style={startStyle}> 1. PUSH TO START </Button> </li>
        
        <li> <Button  variant="raised"  aria-hidden="true" onClick={resetTranscript} style={textStyle}> {transcript} </Button></li>

        
        
        <li><Button variant= "raised" style={stopStyle} value={transcript} onClick={stopListening} onClick={this.handleTranscript}>2. PUSH TO STOP</Button> </li>

       

      

        </ul>

        
</Container>
      

      
        
     

      
>>>>>>> Changes
    )
  }
}

export default SpeechRecognition(options)(Dictaphone)

