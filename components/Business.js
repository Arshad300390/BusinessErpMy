import { StyleSheet, TouchableOpacity, Modal, View, Text } from 'react-native'
import React, { useState , useEffect} from 'react'
import { TextInput, } from 'react-native-paper'
import CountryPicker from 'react-native-country-picker-modal';
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";


export default function Business({ formData, setFormData }) {

  //for country picker
  const [country, setCountry] = useState('');
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const onCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
    setCountryPickerVisible(false);
    setFormData({ ...formData, country: selectedCountry.name });
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  //end

  //date picker
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState(formData.start_date || '');
  const [startedDate, setStartedDate] = useState("12/12/2022");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);

  }
  useEffect(() => {
    setFormData({ ...formData, start_date: selectedStartDate });
  }, [selectedStartDate]);

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };
  //end
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

      <TouchableOpacity onPress={handleOnPressStartDate}>
        <TextInput style={styles.textInput}
          mode="outlined" label='Start Date' editable={false}
          right={<TextInput.Icon icon="calendar" size={15} />}
          placeholder='Enter Start date' value={selectedStartDate}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={selectedStartDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: "#080516",
                textHeaderColor: "#469ab6",
                textDefaultColor: "#FFFFFF",
                selectedTextColor: "#FFF",
                mainColor: "#469ab6",
                textSecondaryColor: "#FFFFFF",
                borderColor: "rgba(122, 146, 165, 0.1)",
              }}
            />

            <TouchableOpacity onPress={handleOnPressStartDate}>
              <Text style={{ color: "white" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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

      <TouchableOpacity onPress={toggleCountryPicker}  >
        <TextInput style={styles.textInput}
          mode="outlined" label='Country' editable={false}
          right={<TextInput.Icon icon="chevron-down" size={15} />}
          placeholder='Enter country' value={formData.country ? `${formData.country}` : ''}
        />
      </TouchableOpacity>
      {countryPickerVisible && (
        <CountryPicker
          withFilter
          withFlag
          withCountryNameButton
          withAlphaFilter
          withCallingCode
          withCurrency
          withEmoji
          onSelect={onCountrySelect}
          visible={countryPickerVisible}
          onOpen={toggleCountryPicker}
          onClose={toggleCountryPicker}
        />)
      }

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
  modalView: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
