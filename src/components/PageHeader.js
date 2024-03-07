import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function PageHeader({ text }) {
  return (
    <View style={styles.header}>
    <Image
      alt="App Logo"
      resizeMode="contain"
      style={styles.headerImg}
      source={{
        uri: 'https://media.licdn.com/dms/image/D560BAQFt2L6-oOciMw/company-logo_200_200/0/1665559117527/amorservllc_logo?e=2147483647&v=beta&t=Eal83xc-Fe3hEXSQVybiKNIMA0mE19aZsmuJ4t8_ozU',
      }} />

    <Text style={styles.title}>
      {text} <Text style={{ color: '#228B22' }}>Amorserv</Text>
    </Text>
  </View>

  )
}


const styles = StyleSheet.create({
/** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },

  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },


})