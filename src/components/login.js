import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput } from 'react-native';
import FormInput from './utilities/formInput';
import Button from './utilities/button';
import { login } from '../publics/redux/actions/users';
import { connect } from 'react-redux';

const Login = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        const formData = {
            email,
            password
        }

        if (email !== '' && password !== '') {
            props.login(formData, props.navigation)
            setPassword('')
            setEmail('')
        } else {
            alert("Please fill data correctly!")
        }
    }

    const signUp = () => {
        props.navigation.navigate('Register')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.jumbotron}>Login</Text>
                
                <FormInput
                    label="Please Insert Your Email"
                    style={styles}
                    value={email}
                    returnKeyType="next"
                    onChangeText={(val) => setEmail(val)}
                    type="username"
                    name="email"
                />
                <FormInput
                    label="Please Insert Your Password"
                    style={styles}
                    value={password}
                    returnKeyType="next"
                    onChangeText={(val) => setPassword(val)}
                    type="password"
                    name="password"
                />
                <View style={styles.horizontalDisplay}>
                    <Button
                        title="Sign In"
                        onPress={submit}
                        styleButton={styles.btnSecondary}
                        styleLabel={styles.txtWhite}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    jumbotron: {
        fontSize: 24,
        marginBottom: 22,
        textAlign: 'center'
    },
    btnSecondary: {
        backgroundColor: '#000',
        elevation: 3,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        justifyContent: 'center',
        marginBottom: 22,
        alignSelf: 'center'
    },
    btnPrimary: {
        backgroundColor: 'blue',
        elevation: 3,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        justifyContent: 'center',
        marginBottom: 22,
        alignSelf: 'center'
    },
    txtWhite: {
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 2,
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    formGroup: {
        width: '100%',
        marginBottom: 22
    },
    formInput: {
        borderColor: '#aaa',
        borderWidth: 0.9,
        paddingHorizontal: 15,
        marginHorizontal: 22,
        borderRadius: 5
    },
    horizontalDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch'
    },
    textValidation: {
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5
    }
})

const mapStateToProps = s => {
    return {
        dataUser: s.UsersReducer.data
    }
}

const mapDispatchToProps = d => {
    return {
        login: (data, navigation) => {
            d(login(data, navigation));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);