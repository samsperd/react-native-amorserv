import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import PageHeader from '../../components/PageHeader'
import { useAuth } from '../../context/AuthContext'

const Profile = () => {
const { user } = useAuth()
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <PageHeader text={'This is the profile of'} />
        <Text>Name: {user.name}</Text>
        <Text>Email: {user.email}</Text>
    </SafeAreaView>
  )
}

export default Profile