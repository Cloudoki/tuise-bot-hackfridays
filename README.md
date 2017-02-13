TuiseBot React Native
==================================
The TuiseBot React-Native App for Hackfridays.

## TuiseBot Installation

Clone and setup the TuiseBot:
* [Install TuiseBot](https://github.com/a31859/tuise-bot)

Once you have installed the TuiseBot, you will just need to use the following commands every time you want to run and test your app:
```
  cd tuise-bot
  export VENV=path-to-your-dir/venv
  . $VENV/bin/activate
  $VENV/bin/python api_dudebot.py
```

Use ngrok to test your local TuiseBot:
* Download [ngrok](https://ngrok.com/download) and place it in your `tuise-bot` directory
* Run ngrok by telling it what port your web server is listening on:
```
./ngrok http 8080
```


## React App Installation

1.  Follow the instructions on [React Native's official documentation](https://facebook.github.io/react-native/docs/getting-started.html#content) depending on your development operating system.

2.  Clone tuise-bot-hackfridays: `https://github.com/Cloudoki/tuise-bot-hackfridays.git`

3.  Install project dependencies

```
  npm install
```

## Testing your React Native Installation

### Run React Native Packager
```
react-native start
```

### Starting the Android Virtual Device (for Android only)
```
android avd
```

### Running the App
```
react-native run-android
react-native run-ios
```

## Project File Structure
```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .flowconfig               # Configures Flow
├── .gitignore                # Tells git which files to ignore
├── .gitattributes            # Gives attributes to pathnames
├── index.android.js          # Entry point for your Android app into the React Native code
├── index.ios.js              # Entry point for your IOS app into the React Native code
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── README.md                 # This file.
├── android                   # Directory with all your Android native code
├── ios                       # Directory with all your IOS native code
├── src                       # Source code
│   ├── components            # React components
│   ├── constants             # Application constants including constants for Redux
│   ├── containers            # High order component logic wrappers
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│       ├── index.js          # Combines all reducers into one
│   ├── store                 # Redux store configuration
│   ├── TuiseBot.js           # Entry point for your app
```


##Technologies

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [React Native](https://facebook.github.io/react-native/)  |   A framework for building native apps with React.    | [Egghead Course](https://egghead.io/courses/react-native-fundamentals)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6), [Egghead Course](https://egghead.io/courses/getting-started-with-redux)    |
|  [RN Router Flux](https://github.com/aksonov/react-native-router-flux) | React Native Router based on new React Native Navigation API | [Using react-native-router-flux](https://medium.com/differential/react-native-basics-using-react-native-router-flux-f11e5128aff9#.rgufob5ov) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |

##Suggestions

* [Native Base](http://nativebase.io/): Essential cross-platform UI components for React Native.
