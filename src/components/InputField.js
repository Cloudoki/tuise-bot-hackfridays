/**
 * # InputField.js
 *
 */
'use strict'
/**
 * ## Imports
 *
 * React
 */
import React from 'react'
import
{
  StyleSheet,
  View,
  Text,
  Keyboard
} from 'react-native'

import {Button, Input, Icon} from 'native-base';

/**
 * ## Styles
 */
let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  }
})

const address = 'https://7f4f8694.ngrok.io';


let InputField = React.createClass({

  getInitialState () {
    return {
      text: ''
    }
  },

  _onChangeText (text) {
    this.setState({
      text
    })
  },

  _makeRequest(text, command) {
    let selectedLanguage = this.props.language
    let sentence = command + ' ' + text

    this.props.actions.setLoading(true)
    Keyboard.dismiss()

    if(command === 'translate')
      sentence += ' to ' + selectedLanguage

    fetch(address + '/execute', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        command: command,
        content: [sentence],
      })
    }).then((response) => response.json())
      .then((responseJson) => {
          this.props.actions.setResult(responseJson.message)
          this.props.actions.setLoading(false)
          return responseJson;
    }).catch((error) => {
      console.error(error);
    });
  },


  render () {
    const isTranslate = this.props.command === 'translate'
    return (
      <View style={styles.container}>
        <Input value={this.state.text}
               placeholder={isTranslate ? 'Translate' : 'Question'}
               onChangeText={(text) => this._onChangeText(text)}
               onSubmitEditing={(event) =>  {
                    this._makeRequest(event.nativeEvent.text, this.props.command)
                  }
                }/>
        <Button style={{width: 40}} rounded onPress={() => this._makeRequest(this.state.text, this.props.command)}>
          <Icon name={isTranslate ? 'ios-chatboxes' : 'md-help'}></Icon>
        </Button>
      </View>
    )
  }
})

module.exports = InputField
