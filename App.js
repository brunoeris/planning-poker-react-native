import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {br: 0}

    this.planningShow = this.planningShow.bind(this)
  }

  planningShow(number) {
    this.setState((prevState) => ({
      br: prevState.br = number
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenText}>{this.state.br}</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableHighlight 
            style={styles.button}
            onPress={() => this.planningShow(0)}>
              <Text style={styles.textButton}>0</Text>
            </TouchableHighlight>
          <TouchableHighlight 
            style={styles.button}
            onPress={() => this.planningShow(1)}>
              <Text style={styles.textButton}>1</Text>
            </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.planningShow(2)}>
              <Text style={styles.textButton}>2</Text>
            </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.planningShow(3)}>
              <Text style={styles.textButton}>3</Text>
            </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.planningShow(5)}>
              <Text style={styles.textButton}>5</Text>
            </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.planningShow(8)}>
              <Text style={styles.textButton}>8</Text>
            </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.planningShow(13)}>
              <Text style={styles.textButton}>13</Text>
            </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.planningShow('?')}>
              <Text style={styles.textButton}>?</Text>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  screenText: {
    fontSize: 250,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#114D94',
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  textButton: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
