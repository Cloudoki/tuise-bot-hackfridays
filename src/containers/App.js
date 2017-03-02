/**
 * # App.js
 *  Display startup screen
 *
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

/**
 * Project actions
 */
import * as botActions from '../reducers/bot/botActions'

/**
 * The components we need from ReactNative
 */
import React from 'react'
import
{
  StyleSheet,
  View,
  Text
}
from 'react-native'

import InputField from '../components/InputField'
import LanguagePicker from '../components/LanguagePicker'
import Spinner from 'react-native-loading-spinner-overlay'

/**
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    bot: state.bot
  }
}

/**
 * Bind all the actions from botActions and any others created
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...botActions }, dispatch)
  }
}

let styles = StyleSheet.create({
  centered: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

/**
 * ## App class
 */
let reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'

let App = React.createClass({

  render () {
    return (
        <View style={{padding: 20}}>

          <View style={styles.centered}>
            <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>TUISE BOT</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Spinner visible={this.props.bot.isLoading}></Spinner>
          </View>

          <View>
            <LanguagePicker language={this.props.bot.language}
                            setLanguage={this.props.actions.setLanguage}/>

            <InputField command="translate"
                        language={this.props.bot.language}
                        actions={this.props.actions}
                        isLoading={this.props.bot.isLoading}/>
          </View>

          <View style={{marginTop: 40}}>
            <InputField command="question"
                        language={this.props.bot.language}
                        actions={this.props.actions}
                        isLoading={this.props.bot.isLoading}/>
          </View>

          <Text style={{marginTop: 20}}>Result:</Text>
          <Text>{this.props.bot.result}</Text>

      </View>
    )
  }
})
// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin)
/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)
