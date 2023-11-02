import { View,  StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, } from 'react-native-paper';
const BusinessSettings = ({formData, setFormData}) => {
  return (
    <>
      <TextInput style={styles.textInput}
        mode="outlined" label='Tax 1 Name'
        placeholder='Enter tax 1 name' value={formData.tax_1_name}
        onChangeText={(tax_1_name) => {
          setFormData({ ...formData, tax_1_name })
        }}
      />
    <TextInput style={styles.textInput}
       mode="outlined" label='Tax 1 Number'
        placeholder='Enter tax 1 number' value={formData.tax_1_number}
        onChangeText={(tax_1_number) => {
          setFormData({ ...formData, tax_1_number })
        }}
      />
       <TextInput style={styles.textInput}
         mode="outlined" label='Tax 2 Name'
         placeholder='Enter tax 2 name' value={formData.tax_2_name}
         onChangeText={(tax_2_name) => {
           setFormData({ ...formData, tax_2_name })
         }}
       />
     <TextInput style={styles.textInput}
         mode="outlined" label='Tax 2 Number'
         placeholder='Enter tax 2 number' value={formData.tax_2_number}
         onChangeText={(tax_2_number) => {
           setFormData({ ...formData, tax_2_number })
         }}
       />
       <TextInput style={styles.textInput}
         mode="outlined" label='Fiscal Year Start Month'
         placeholder='Fiscal year start month' value={formData.fiscal_year_starat_month}
         onChangeText={(fiscal_year_starat_month) => {
           setFormData({ ...formData, fiscal_year_starat_month })
         }}
       />
     <TextInput style={styles.textInput}
         mode="outlined" label='Accounting Method'
         placeholder='Enter accounting method' value={formData.accounting_method}
         onChangeText={(accounting_method) => {
           setFormData({ ...formData, accounting_method })
         }}
       />
    </>
  )
}

export default BusinessSettings

const styles = StyleSheet.create({
  
  textInput: {
    height: 30,
    width: 340,
  },
})