import { StyleSheet } from 'react-native'
import React from 'react'
import { TextInput,  } from 'react-native-paper'
export default function Business({ formData, setFormData }) {
  return (
    <>
      <TextInput style={styles.textInput}
        mode="outlined" label='Business Name'
        placeholderTextColor="#C0C0C0"
        placeholder='Enter Business Name' value={formData.business_name}
        onChangeText={(business_name) => {
          setFormData({ ...formData, business_name })
        }}
      />
      <TextInput style={styles.textInput}
       mode="outlined" label='Start Date'
        placeholder='Enter Start date' value={formData.start_date}
        onChangeText={(start_date) => {
          setFormData({ ...formData, start_date })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='Currency '
        placeholder='currency' value={formData.currency}
        onChangeText={(currency) => {
          setFormData({ ...formData, currency })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='Logo'
        placeholder='upload logo' value={formData.upload_logo}
        onChangeText={(upload_logo) => {
          setFormData({ ...formData, upload_logo })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='Website'
        placeholder='Enter website' value={formData.website}
        onChangeText={(website) => {
          setFormData({ ...formData, website })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='Contact 1#'
        placeholder='Enter business contact number' value={formData.business_contact_number}
        onChangeText={(business_contact_number) => {
          setFormData({ ...formData, business_contact_number })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='Contact 2#'
        placeholder='Enter alternate contact number' value={formData.alternate_contact_number}
        onChangeText={(alternate_contact_number) => {
          setFormData({ ...formData, alternate_contact_number })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='Country'
        placeholder='Enter country' value={formData.country}
        onChangeText={(country) => {
          setFormData({ ...formData, country })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='State'
        placeholder='Enter state' value={formData.state}
        onChangeText={(state) => {
          setFormData({ ...formData, state })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='City'
        placeholder='Enter city' value={formData.city}
        onChangeText={(city) => {
          setFormData({ ...formData, city })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='Zip Code'
        placeholder='Enter zip code' value={formData.zip_code}
        onChangeText={(zip_code) => {
          setFormData({ ...formData, zip_code })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='Land Mark'
        placeholder='Enter land mark' value={formData.landmark}
        onChangeText={(landmark) => {
          setFormData({ ...formData, landmark })
        }}
      />
      <TextInput style={styles.textInput}
        mode="outlined" label='Time Zone'
        placeholder='Enter time zone' value={formData.time_zone}
        onChangeText={(time_zone) => {
          setFormData({ ...formData, time_zone })
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({

  textInput: {
    height: 30,
    width: 340,
    placeholderColor: 'red',
  },
})
