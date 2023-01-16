import { useRef, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  const handleMessage = (e) => {
    setToken('')
  }

  const email = 'test@flyttsmart.se'
  const password = 'test'
  // const url = 'https://dev-api.flyttsmart.se/service/provider/auth/login'

  const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ZDI1ZWFjLTQwZWYtNDkyMS1iYWQyLTNkNTNjNWZkZGVhOCIsImlhdCI6MTY3MjIyNDA1Mn0.52dUezn7Y4wXUjBNoryrYU4UbvoDp9ZS4-Sijlg3TEI'
  const providerId = '77d25eac-40ef-4921-bad2-3d53c5fddea8'


  const [token, setToken] = useState('')


  const doLogin = () => {
    // Simulation of login
    setTimeout(() => {
      setToken(validToken)
    }, 2000)
  }



  if (!token) {

    return (
      <View style={styles.container}>
        <Text>Email: {email}</Text>
        <Text>Password: {password}</Text>

        <Button title="Login" onPress={() => doLogin()} />
      </View>)
  }

  else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 850, marginBottom: 20, marginTop: 40 }}>
          <WebView
            source={{ uri: `localhost:3000?validToken=${token}&providerId=${providerId}` }}
            javaScriptEnabled
            originWhitelist={['*']}
            onMessage={(e) => handleMessage(e)}
            useWebKit
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
