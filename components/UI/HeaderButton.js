import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons';


const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={22} color="white"/>
    )
}

export default CustomHeaderButton

const styles = StyleSheet.create({})
