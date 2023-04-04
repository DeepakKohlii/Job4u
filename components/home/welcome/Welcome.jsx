import React from 'react'
import { useState } from 'react'
import { View, Text , TextInput , Image , TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import {icons , SIZES} from '../../../constants'

const Welcome = () => {
  const router = useRouter() ;
  return (
    <View>
      <View style = {styles.container}>
       <Text style = {styles.userName}>
          Hello David
       </Text>
       <Text style = {styles.welcomeMessage}>
          Search For Latest Job
       </Text>
      </View>

      <View style = {styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput
            style = {styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder="Search for jobs"
            placeholderTextColor="#000"
          />
          </View>
          <TouchableOpacity style = {styles.searchBtn} onPress={()=> {}}>
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
              />
          </TouchableOpacity>
          
        </View>
    </View>
  )
}

export default Welcome