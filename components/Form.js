import React, { useState } from 'react'
import { View,  StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-paper'
import Business from './Business';
import BusinessSettings from './BusinessSettings';
import Owner from './Owner';

function Form() {
    const [formData, setFormData] = useState({
        //signup
        business_name: '',
        start_date: '',
        currency: '',
        upload_logo: '',
        website: '',
        business_contact_number: '',
        alternate_contact_number: '',
        country: '',
        state: '',
        city: '',
        zip_code: '',
        landmark: '',
        time_zone: '',
        //business settings
        tax_1_name: '',
        tax_1_no: '',
        tax_2_name: '',
        tax_2_no: '',
        fiscal_year_starat_month: '',
        accounting_method: '',
        //Owner
        prefix: '',
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
        confirm_password: '',

    });
    const [screen, setScreen] = useState(0)
    const FormTitle = [
        'Business',
        'Business Settings',
        'Owner',
    ];
    const ScreenDisplay = () => {
        if (screen === 0) {
            return <Business formData={formData} setFormData={setFormData} />
        } else if (screen === 1) {
            return <BusinessSettings formData={formData} setFormData={setFormData} />
        } else {
            return <Owner formData={formData} setFormData={setFormData} />
        }
    }
    return (
        <View style={styles.outerBorder}>
            <View style={styles.wrapper}>
                <Text style={{ fontSize: 32, color: '#003f5c' }}>{FormTitle[screen]}</Text>
                <View>
                    {ScreenDisplay()}
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button  style={styles.button} icon="arrow-left" mode="contained"
                    disabled={screen === 0} onPress={() => {
                        setScreen((currScreen) => currScreen - 1)
                    }}>
                    Prev
                </Button>

                <Button style={styles.button} icon='arrow-right' mode="contained" onPress={() => {
                    if (screen === FormTitle.length - 1) {
                        console.log(formData);
                    } else {
                        setScreen((currScreen) => currScreen + 1)
                    }
                }} contentStyle={{ flexDirection: 'row-reverse' }}>
                    {screen === FormTitle.length - 1 ? 'Submit' : 'Next'}

                </Button>
            </View>


        </View>

    )
}
const styles = StyleSheet.create({
    outerBorder: {
        borderWidth: 5,
        padding: 2,
        borderRadius: 10,
        borderColor: '#706585',
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginVertical:5,
        marginHorizontal: 35,
        borderRadius: 5,
        backgroundColor: '#624d8a',
    }
})
export default Form