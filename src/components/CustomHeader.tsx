import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CustomHeader = ({ onLogout }: any) => {
    return (
        <View style={styles.headerContainer}>
            <Image
                source={{ uri: 'https://i.pinimg.com/originals/66/f7/72/66f77296282b5ab7c2780724802614c0.png' }}
                style={styles.logo}
            />
            <TouchableOpacity onPress={onLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    logoutText: {
        color: 'red',
        fontSize: 16,
    },
});

export default CustomHeader;
