import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/FriendItem_elImage_56105.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class FriendItem extends Component {

  // Properties used by this component:
  // img_Number, img_Name, img_URL

 

  onClick_elButtonReviews = (ev) => {
    
    const phone  =  ev.target.value;
<<<<<<< HEAD
    console.log(phone);
    this.props.appActions.updateDataSlot("ds_PhoneNumber", phone);
=======
    const name = this.props.img_Name
    console.log(phone);
    this.props.appActions.updateDataSlot("ds_PhoneNumber", phone);
    this.props.appActions.updateDataSlot("ds_Messages", "");
    this.props.appActions.updateDataSlot( "ds_selectedFriendName", name)

>>>>>>> Changes
    
    // Go to screen 'Text Page'
    this.props.appActions.goToScreen('dictaphone', {...this.props, transitionId: 'fadeIn' }, );
  
  }
  
 
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackgroundShape = {
        background: 'rgba(255, 227, 96, 1.000)',
     };
    const style_elImage = {
        backgroundImage: 'url('+(this.props.img_URL || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };

 
    const style_elRestaurantName = {
        fontSize: 25.8,
        color: '#643200',
        textAlign: 'left',
     };
    const value_restaurantName = this.props.img_Name
    const value_addressCopy = this.props.img_Number
    
    
    const style_elAddressCopy = {
        fontSize: 19.4,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    
    const style_elButtonReviews = {
        display: 'block',
        fontSize: 35.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#643200',
     };
    const style_elButtonReviews_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elRectangleSpacer = {
        background: 'rgba(252, 253, 253, 1.000)',
     };

     
     
    
    return (
      <div className="FriendItem" style={baseStyle}>
        <div className="background">
          <div className='elBackgroundShape' style={style_elBackgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='elImage'>
            <div className='' style={style_elImage} />
          
          </div>
          
          <div className='elRestaurantName'>
            <div className='font-markerFeltWide' style={style_elRestaurantName}>
              <div>{value_restaurantName !== undefined ? value_restaurantName : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_textblockcopy2_495180}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elAddressCopy'>
            <div className='font-markerFeltThin' style={style_elAddressCopy}>
              <div>{value_addressCopy !== undefined ? value_addressCopy : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_addresscopy_1012676}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elButtonReviews' style={style_elButtonReviews_outer}>
            <Button className='' style={style_elButtonReviews} value ={value_addressCopy} onClick={this.onClick_elButtonReviews} >
              {this.props.locStrings.restaurantitem_button_813725}
            </Button>
          
          </div>
          
          <div className='elRectangleSpacer'>
            <div className='' style={style_elRectangleSpacer} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
