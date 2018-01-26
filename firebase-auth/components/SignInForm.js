import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

class SignInForm extends Component {
	state = {phone:'', code:''};

	handleSubmit = async () => {
		try{
			let {data} = await axios.post('https://us-central1-authentication-2f71a.cloudfunctions.net/verifyOneTimePassword',{phone: this.state.phone, code:this.state.code});
			firebase.auth().signInWithCustomToken(data.token);
		} catch (err){
			console.log(err);
		}
	}
	

	render(){
		return (
			<View>
				<View style={{marginBottom:10}}>
					<FormLabel> Enter Phone Number </FormLabel>
						<FormInput 
							value={this.state.phone}
							onChangeText={phone => this.setState({phone:phone})}
						/>
				</View>

				<View style={{marginBottom:10}}>
					<FormLabel> Enter Code </FormLabel>
						<FormInput 
							value={this.state.code}
							onChangeText={code => this.setState({code:code})}
						/>
				</View>
				<Button 
					title="Submit" 
					onPress={this.handleSubmit.bind(this)}
				/>
			</View>
		);
	}
}

export default SignInForm;