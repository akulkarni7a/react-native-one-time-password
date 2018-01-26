import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import axios from 'axios';

class SignUpForm extends Component {
	state = {phone:''};

	handleSubmit = async () => {
		try{
			await axios.post('https://us-central1-authentication-2f71a.cloudfunctions.net/createUser',{phone: this.state.phone});
			await axios.post('https://us-central1-authentication-2f71a.cloudfunctions.net/requestOneTimePassword',{phone:this.state.phone})
		} catch(err){
				console.log(err);
				this.setState({error:"Something went wrong"});
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
				<Button 
					title="Submit" 
					onPress={this.handleSubmit.bind(this)}
				/>
			</View>
		);
	}
}

export default SignUpForm;