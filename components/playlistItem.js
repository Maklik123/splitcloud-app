import React, { PropTypes, Component } from 'react';
import { StyleSheet, View,Image,TouchableOpacity  } from 'react-native';
import THEME from '../styles/variables';
import AppText from './appText';
import { formatDurationExtended } from '../helpers/formatters';

function getSmallArtworkUrl(url){
  if(!url)return;
  return url.replace('-large', '-t67x67');
}

export default function PlaylistItem(props){
  const rowTextStyle = [],
    artworkImage = {url:getSmallArtworkUrl(props.item.artwork)};
  return <View style={styles.row}>
      <TouchableOpacity onPress={props.onSelected.bind(false,props.item)}>
        <View style={styles.rowArtworkContainer}>
          <Image style={styles.rowArtworkImage} source={artworkImage} resizeMode={'cover'}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowLabel} onPress={props.onSelected.bind(false,props.item)}>
          <AppText bold={true} numberOfLines={1} ellipsizeMode={'tail'} style={[styles.rowTitleText].concat(rowTextStyle)} >
            {props.item.label}
          </AppText>
          <AppText bold={true} numberOfLines={1} ellipsizeMode={'tail'} style={[styles.rowAuthorText].concat(rowTextStyle)} >
            {props.item.username}
          </AppText>
          <AppText numberOfLines={1} ellipsizeMode={'tail'} style={[styles.rowDescText].concat(rowTextStyle)} >
            {props.onDescRender(props.item)}
          </AppText>
      </TouchableOpacity>
  </View>;
}

PlaylistItem.defaultProps = {
  emptyLabel : 'No items :(',
  onDescRender: (item) => {
    return `${item.trackCount} songs •  ${formatDurationExtended(item.duration,{milli:true})}`
  }
};
PlaylistItem.propTypes = {
  item : PropTypes.object.isRequired,
  onSelected: PropTypes.func.isRequired,
  onDescRender: PropTypes.func
};
const styles = StyleSheet.create({
  itemText : {
    color: THEME.mainColor,
    fontSize: 14,
    paddingRight:20
  },
  row : {
    flex: 1,
    flexDirection:'row',
    marginBottom:5,
    marginTop:5,
    paddingLeft: 20,
    paddingRight: 0
  },
  rowArtworkImage:{
    width:50,
    height:50,
    backgroundColor: THEME.listBorderColor,
    borderRadius:4
  },
  rowArtworkContainer:{
    width:60,
    paddingTop:5
  },
  rowLabel : {
    flex: 10,
    height: 72,
    borderColor: THEME.listBorderColor,
    borderBottomWidth:0
  },
  rowContainerPlaceholder:{
    flex: 1,
    flexDirection:'row',
    marginBottom:5,
    marginTop:5
  },
  rowPlaceholder :{
    flex : 1,
  },
  loadingIndicator:{
    paddingVertical:10
  },
  rowLabelText: {
    color: THEME.mainHighlightColor,
    lineHeight:20,
    fontSize: 15,
    fontWeight:'500'
  },
  rowTitleText:{
    color: THEME.mainHighlightColor,
    lineHeight:20,
    fontSize: 15
  },
  rowAuthorText:{
    color: THEME.mainHighlightColor,
    lineHeight:18,
    fontSize: 13
  },
  rowDescText :{
    color: THEME.mainColor,
    fontSize: 13,
    lineHeight:20
  },
  hightlightText : {
    color: THEME.mainActiveColor
  },
  placeholderRowText:{
    color:THEME.mainColor,
    lineHeight:30,
    textAlign:'center',
    fontSize: 17
  },
  rowAction : {
    flex: 2,
    paddingRight:20
  },
  rowActionText :{
    color: THEME.mainColor,
    opacity:0.8,
    fontSize: 45,
    fontWeight:'200',
    lineHeight:55,
    textAlign : 'right'
  },
  footer : {
    borderColor : THEME.contentBorderColor,
    borderTopWidth :1,
    backgroundColor: THEME.mainBgColor
  },
  closeAction : {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: '300',
    height: 40,
    padding: 10
  }
});