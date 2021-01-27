/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import codePush from 'react-native-code-push'


const App: () => React$Node = () => {
  useEffect(() => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }, [])
  const onRollbackPreVersion = () => {
    undefinedFunction()
  }
  return (
    <View style={styles.content}>
      <Text>Hello Code Push</Text>
      <TouchableOpacity onPress={onRollbackPreVersion}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0ccc'
  }
});

export default App;
