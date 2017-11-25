/**
 * @flow
 */
import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import THEME from '../styles/variables';
import AppText from './appText';
function HeaderBar(props){
  return <View style={styles.headerContainer}>
    {props.title && <View style={styles.headerTitleContainer}>
      <AppText
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={styles.headerText}>
        {props.title}
      </AppText>
    </View>}
    {props.children}
  </View>;
}
let styles = StyleSheet.create({
  headerContainer :{
    alignItems: 'center',
    height: 60,
    paddingTop: 27,
    backgroundColor: THEME.mainBgColor,
    borderColor : THEME.contentBorderColor,
    borderBottomWidth :2
  },
  headerTitleContainer:{
    paddingHorizontal:60
  },
  headerText : {
    color: THEME.mainHighlightColor,
    fontSize: 16,
    fontWeight:'600'
  }
});
export default HeaderBar;
