import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      paddingVertical: 24,
      paddingHorizontal: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    title: {
      fontSize: 31,
      fontWeight: '700',
      color: '#1D2A32',
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '500',
      color: '#929292',
    },
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
    /** Form */
    form: {
      marginBottom: 24,
      paddingHorizontal: 24,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    textFailed: {
      alignSelf: 'flex-end',
      color: 'red',
    },
    formAction: {
      marginTop: 4,
      marginBottom: 16,
    },
    formLink: {
      fontSize: 16,
      fontWeight: '600',
      color: '#075eec',
      textAlign: 'center',
    },
    formFooter: {
      fontSize: 15,
      fontWeight: '600',
      color: '#222',
      textAlign: 'center',
      letterSpacing: 0.15,
    },
    /** Input */
    input: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: '600',
      color: '#222',
      marginBottom: 8,
    },
    inputControl: {
      height: 50,
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: '500',
      color: '#222',
      borderWidth: 1,
      borderColor: '#C9D3DB',
      borderStyle: 'solid',
    },
    /** Button */
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      backgroundColor: '#228B22',
      borderColor: '#228B22',
    },
    btnText: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
      color: '#fff',
    },
  });