import React, { useContext, useState } from 'react';
import {
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

export default function Login({ navigation }) {

  const { user_login } = useAuth()

  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [form, setForm] = useState({
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

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }


    return null;
  };

  const handleLogin = () => {
    const { email, password } = form
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      user_login({
        email: email.toLocaleLowerCase(),
        password: password,
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

          <PageHeader text={'Login to'} />

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(email) => handleCheckEmail(email)}
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
                disabled={ form.email === '' || form.password === '' ? true : false }
                onPress={() => handleLogin()}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </KeyboardAwareScrollView>

        <View
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

