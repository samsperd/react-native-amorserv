import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PageHeader from '../../components/PageHeader';
import { useAuth } from '../../context/AuthContext';
import styles from '../../styles';

export default function Signup({ navigation }) {

  const { user_register } = useAuth()


  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleCheckEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setForm({ ...form, email });
    if (re.test(email) || regex.test(email)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }
    return null;
  };



  const handleSignup = () => {
    const { fullname, email, password } = form
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      user_register({
        name: fullname,
        email: email.toLocaleLowerCase(),
        password: password,
      })
        .then(result => {
          if (result.status == 201) {
            console.log("access token", result)
            // AsyncStorage.setItem('AccessToken', result.data.token);
            // navigation.replace('Home');
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert(checkPassword);
    }
  };







  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <PageHeader text={'Sign up on'} />

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Name</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                onChangeText={fullname => setForm({ ...form, fullname })}
                placeholder="Obinna Iloeje"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.fullname} />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="iloejeobinna@gmail.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email} />
            </View>
            {checkValidEmail ? (
              <Text style={styles.textFailed}>Wrong format email</Text>
            ) : (
              <Text style={styles.textFailed}> </Text>
            )}


            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => handleSignup()}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign up</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </KeyboardAwareScrollView>

        <View
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Have an account?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ textDecorationLine: 'underline' }}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
