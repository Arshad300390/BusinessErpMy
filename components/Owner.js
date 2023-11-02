import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput, } from 'react-native-paper';

const Owner = ({formData, setFormData}) => {
  return (
    <>
      <TextInput style={styles.textInput}
      mode="outlined" label="Prefix"
      placeholder="Type something" value={formData.prefix}
      onChangeText={(prefix) => {
        setFormData({ ...formData, prefix })
      }}
    />
      <TextInput style={styles.textInput}
      mode="outlined" label="First Name"
        placeholder="Type something" value={formData.first_name}
        onChangeText={(first_name) => {
          setFormData({ ...formData, first_name })
        }}
    />
       <TextInput style={styles.textInput}
         mode="outlined" label='Last Name'
         placeholder='Enter last name' value={formData.last_name}
         onChangeText={(last_name) => {
           setFormData({ ...formData, last_name })
         }}
       />
     <TextInput style={styles.textInput}
         mode="outlined" label='User Name' 
         placeholder='Enter user name' value={formData.user_name}
         onChangeText={(user_name) => {
           setFormData({ ...formData, user_name })
         }}
       />
       <TextInput style={styles.textInput}
        mode="outlined" label='Email' 
         placeholder='Enter email' value={formData.email}
         onChangeText={(email) => {
           setFormData({ ...formData, email })
         }}
       />
     <TextInput style={styles.textInput}
        mode="outlined" label='Password'
         placeholder='Enter password' value={formData.password}
         onChangeText={(password) => {
           setFormData({ ...formData, password })
         }}
         right={<TextInput.Icon icon="eye" />}
       />
       <TextInput style={styles.textInput}
        mode="outlined" label='Confirm Password'
         placeholder='Confirm password' value={formData.confirm_password}
         onChangeText={(confirm_password) => {
           setFormData({ ...formData, confirm_password })
         }}
         right={<TextInput.Icon icon="eye" />}
       />
    </>
  )
}

export default Owner

const styles = StyleSheet.create({
  
 
  textInput: {
    height: 30,
    width: 340,
  },
})