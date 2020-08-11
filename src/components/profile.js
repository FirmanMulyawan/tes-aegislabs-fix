import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import { connect } from 'react-redux';

const Profile = props => {
    const backHome = () => {
        props.navigation.goBack();
    }
    return (
        <View style={StyleSheet.container}>
            <Text>Welcome To MyApp </Text>
            <Button
                title="Logout"
                onPress={() => backHome()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center'
    }
})

const mapStateToProps = s => {
    return {
        dataUser: s.UsersReducer.data
    }
}

export default connect(mapStateToProps, null)(Profile);