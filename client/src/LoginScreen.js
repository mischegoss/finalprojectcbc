import React, { Component } from 'react';
import './App.css';
import FirebaseLogin from './FirebaseLogin';
import firebase from 'firebase';
import textinggrandma from './images/textinggrandma.png';



export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  componentDidMount() {
    // Check if Firebase login has been completed.
    setTimeout(() => {
      if (firebase.auth().currentUser) {
        if (this._elFirebaseLogin)
          this._elFirebaseLogin.saveCurrentUserDataInApp();
        
        this.props.appActions.goToScreen('welcome');
        
      }
    }, 50);
  }

  onClick_elText3 = (ev) => {
    window.open('https://mischegoss.github.io/Final-CMS/', '_blank');
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elFirebaseLogin_outer = {
        pointerEvents: 'auto',
     };
    const style_elText2 = {
        fontSize: 23.7,
        color: '#793700',
        textAlign: 'center',
        marginTop: '20px'
     };
    const style_elText = {
        fontSize: 40.9,
        color: '#793700',
        textAlign: 'center',
        
     };
    const style_elImage = {
        backgroundColor: '#fffaea',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        opacity: 0.00,
     };
    const style_elText3 = {
        color: '#793700',
        textAlign: 'center',
     };
    const style_elText3_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };

   

     
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          
          
          </div>
          
         
          
         
          <div className='elText'>
            <div className='font-markerFeltThin' style={style_elText}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.login_text_942905.replace(/\n/g, '<br>')}}></div></div>
            </div>
            
          </div>

          <div className='elText2'>
            <div className='font-markerFeltThin' style={style_elText2}>
              <div>{this.props.locStrings.login_text2_975654}</div>
            </div>
          
          </div>

          
          <div> {this.props.value_AddressCopy}</div>
         
          <div className='style_icon'>
          <img src={textinggrandma} alt="" style={{width: '200px', display: 'block', margin: 'auto', padding: '10px'}} />
          </div>
          
          <div className='elFirebaseLogin' style={style_elFirebaseLogin_outer}>
            <div className=''>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          
          <div className='elText3' style={style_elText3_outer}>
            <div className='baseFont' style={style_elText3} onClick={this.onClick_elText3} >
              <div>{this.props.locStrings.loginmain_text3_188557}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
