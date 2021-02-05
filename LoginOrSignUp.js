import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      userName:'',
      firstName:'',
      lastName:'',
      password: '',
      confirmPassword:'',
      emailId:'',
      contact:'',
      address:'',
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
     return Alert.alert("Login Succesful")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (userName, password,confirmPassword) =>{
    
    if (password !== confirmPassword ){
      return Alert.alert("Password and Confrim Password does'nt match")
    }
    else{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      db.collection('user').add({
        first_name:this.state.firstName,
        last_name:this.state.lastName,
        email_Id:this.state.emailId,
        contact:this.state.contact,
        address:this.state.address,
      })
      return Alert.alert("User Added Successfully",
      '',
          [
            {text:'OK',onPress:()=>this.setState({'isModalVisible':false})}
          ]
      );
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }
}
    
<Modal 
      animationType="fade"
      transparent={true}
      visible={this.state.isModalVisible}>
        <View >
          
          <TextInput 
              style={styles.formTextInput}
              placeholder={"First Name"}
              maxLength={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName:text,
                })
              }}
          />

          <TextInput 
              style={styles.formTextInput}
              placeholder={"Last Name"}
              maxLength={8}
              onChangeText={(text)=>{
                this.setState({
                  lastName:text,
                })
              }}
          />

          <TextInput 
              style={styles.formTextInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={(text)=>{
                this.setState({
                  password:text,
                })
              }}
          />

          <TextInput 
              style={styles.formTextInput}
              placeholder={"Confirm Password"}
              secureTextEntry={true}
              onChangeText={(text)=>{
                this.setState({
                  confirmPassword:text,
                })
              }}
          />

          <TextInput 
              style={styles.formTextInput}
              placeholder={"Contact"}
              maxLength={10}
              onChangeText={(text)=>{
                this.setState({
                  contact:text,
                })
              }}
          />

          <TextInput 
              style={styles.formTextInput}
              placeholder={"Address"}
              multiline={true}
              onChangeText={(text)=>{
                this.setState({
                  address:text,
                })
              }}
          />

          <TextInput 
              style={styles.formTextInput}
              placeholder={"Email"}
              onChangeText={(text)=>{
                this.setState({
                  emailId:text,
                })
              }}
          />

<View>
              <TouchableOpacity style={styles.registerButon}
              onPress={()=>
              this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}>
                <Text>Register</Text>
              </TouchableOpacity>
         
              <TouchableOpacity style={styles.cancelButton}
                                onPress={()=>this.setState({"isModalVisible":false})}>
                <Text style={{color:'red'}}>Cancel</Text>
              </TouchableOpacity>

              </View>
        </View>
    </Modal>


        
  

  render();{
    return(
     
        <View>
         <Text style={{color:'#ff5722', fontSize:18,fontWeight:'bold', marginLeft:55 }}> USERNAME </Text>
         <View style={{alignItems:'center'}}>
          <TextInput
          style={styles.loginBox}
          placeholder= "Username or Email"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              username: text
            })
          }}
        />
        </View>

        <Text style={{color:'#ff5722', fontSize:18,fontWeight:'bold', marginLeft:55 }}> Password </Text>
         <View style={{alignItems:'center'}}>
        <TextInput
          style={styles.loginBox}
          placeholder="Password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          </View>

          <View style={{alignItems:'center'}}>
          <TouchableOpacity
            style={[styles.button,{marginBottom:10,]}
            onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.setState({"isModalVisible":true})}
            >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

  }
}


const styles = StyleSheet.create({
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ff5722',
    fontWeight:'bold',
    fontSize:18
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
}