import React, { Component } from 'react';
import './App.css';
import FriendItem from './FriendItem';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class FriendsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_SlotUserPhoto, ds_SlotUserID, ds_numberOfRestaurants

  onClick_elList = (ev) => {
    // Go to screen 'Text Page'
    this.props.appActions.goToScreen('textpage', { transitionId: 'fadeIn' });
  
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
    
    const dataSheet_sheet2 = this.props.dataSheets['sheet2'];
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#ffc800',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('sheet2').items);
    
    const style_elList_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    let cssClass_progressIndicator = 'circularProgressIndicator';
    if (this.props.appActions.isLoading()) 
      cssClass_progressIndicator += ' circularProgressIndicator-active';
    
    const style_elCardBG = {
        width: '100%',
        height: '100%',
     };
    const style_elCardBG_outer = {
        backgroundColor: '#ffc800',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elTextBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen FriendsScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elList' style={style_elList_outer}>
            <div className='' style={style_elList} onClick={this.onClick_elList} >
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols1_${index % 1} cols2_${index % 2} cols4_${index % 4}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <FriendItem dataSheetId={'sheet2'} dataSheetRow={row} {...{ 'img_Number': row['img_Number'], 'img_Name': row['img_Name'], 'img_URL': row['img_URL'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Friends</div></Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elProgressIndicator'>
              <svg className={cssClass_progressIndicator}>
                <circle className="circularProgress-animatedPath" style={{stroke: 'rgba(0, 0, 0, 0.8500)'}} cx="25" cy="25" r="17" fill="none" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </div>
            <div className='elCardBG' style={style_elCardBG_outer}>
              <div className='' style={style_elCardBG} />
            
            </div>
            
            <div className='baseFont elTextBlock' style={style_elTextBlock}>
              <div>{this.props.locStrings.friends_textblock_465473}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
