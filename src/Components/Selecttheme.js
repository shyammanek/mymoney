import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class Selecttheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.route.params.data,
    };
  }

  componentDidMount() {
    console.log(this.props.route.params.data);
  }

  render() {
    return (
      <View>
        <Text>Selecttheme</Text>
        <Text>{this.props.route.params.data} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
