import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {TextInput, Title, Headline, Button} from 'react-native-paper';
import {Colors} from '../Common/Colors';
import _ from 'lodash';

export default class Createbiodata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      city: '',
      address: '',
      fathersname: '',
      mothersname: '',
      fathersoccupation: '',
      mothersoccupation: '',
      occupation: '',
      education: '',
      hobbies: '',
      dob: '',
      tob: '',
      placeofbirth: '',
      height: '',
      weight: '',
      complexion: '',
      bloodgroup: '',
      maritalstatus: '',
      caste: '',
      income: '',
      aboutme: '',
      aboutmyfamily: '',
      aboutmypartner: '',
      aboutmylife: '',
      maternalgrandfathersname: '',

      personalDetails: [],
    };
  }

  setData = () => {
    this.setState({
      personalDetails: [
        this.state.name,
        this.state.email,
        this.state.phone,
        this.state.city,
        this.state.address,
        // this.state.fathersname,
        // this.state.mothersname,
        // this.state.fathersoccupation,
        // this.state.mothersoccupation,this.state.occupation,
        // this.state.education,this.state.hobbies,this.state.dob,
        // this.state.tob,this.state.placeofbirth,this.state.height,this.state.weight,this.state.complexion,
        // this.state.bloodgroup,this.state.maritalstatus,
        // this.state.caste,
        // this.state.income,
        // this.state.aboutme,
        // this.state.aboutmyfamily,
        // this.state.aboutmypartner,
        // this.state.aboutmylife,
        // this.state.maternalgrandfathersname
      ],
    });
  };

  createBioData() {
    this.setData();
    console.log('create bio data', this.state.personalDetails);

    if (!_.isEmpty(this.state.personalDetails)) {
      this.props.navigation.navigate('Selecttheme', {
        data: this.state.personalDetails,
      });
    }
  }

  componentDidMount() {
    console.log('create bio data screen');
  }

  componentWillUnmount() {
    console.log('create bio data screen');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 20}}>
          <TextInput
            label="Name"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onChangeText={name => this.setState({name})}
            placeholder="Enter your name"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />

          <TextInput
            label="Mobile Number"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onChangeText={text => this.setState({phone: text})}
            placeholder="Enter your Mobile Number"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />
          <TextInput
            label="height"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onChangeText={height => this.setState({height})}
            placeholder="Enter your height"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />
          <TextInput
            label="weight"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onChangeText={weight => this.setState({weight})}
            placeholder="Enter your weight"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />
          <TextInput
            label="complexion"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onChangeText={complexion => this.setState({complexion})}
            placeholder="Enter your complexion"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />

          <TextInput
            label="Cast"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onChangeText={caste => this.setState({caste})}
            placeholder="Enter your caste"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />

          <TextInput
            label="Address"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({address: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your Address"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
            multiline={true}
            numberOfLines={3}
          />

          <TextInput
            label="City"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onChangeText={city => this.setState({city})}
            placeholder="Enter your City"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />

          <TextInput
            label="State"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({state: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your State"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />

          <TextInput
            label="father's name"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onChangeText={fathersname => this.setState({fathersname})}
            placeholder="Enter your father's name"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />

          <TextInput
            label="mother's name"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onChangeText={text => console.log(text)}
            placeholder="Enter your mother's name"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />
          <TextInput
            label="father's occupation"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({fathersoccupation: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your father's occupation"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />

          <TextInput
            label="mother's occupation"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({mothersoccupation: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your mother's occupation"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
            // onSubmitEditing={}
          />

          <TextInput
            label="Date of Birth"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({dob: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your Date of Birth"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />
          <TextInput
            label="Time of Birth"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({tob: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your Time of Birth"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />

          <TextInput
            label="marital status"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({maritalstatus: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Unmarried/Married"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />
          <TextInput
            label="education"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({education: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your education"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />
          <TextInput
            label="occupation"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({occupation: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your occupation"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />
          <TextInput
            label="income"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e => this.setState({income: e.nativeEvent.text})}
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your income"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />
          <TextInput
            label="maternal grandfather's name"
            mode="outlined"
            style={styles.input}
            theme={{colors: {primary: Colors.myredTheme}}}
            onBlur={e =>
              this.setState({maternalgrandfathersname: e.nativeEvent.text})
            }
            onFocus={() => console.log('On Focus')}
            onChangeText={text => console.log(text)}
            placeholder="Enter your maternal grandfather's name"
            underlineColor={Colors.myredTheme}
            outlineColor={Colors.myredTheme}
          />

          <Button
            theme={{colors: {primary: Colors.myredTheme}}}
            mode="contained"
            style={styles.button}
            onPress={() => this.createBioData()}>
            Create Your Bio Data
          </Button>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
  },
  input: {
    margin: 5,
    marginHorizontal: 10,
    color: Colors.myredTheme,
    // backgroundColor: '#fff',
  },
  button: {
    // color: 'bluewhite',
    marginBottom: 70,
    margin: 10,
    marginHorizontal: 10,
    // borderRadius: 10,
  },
});
