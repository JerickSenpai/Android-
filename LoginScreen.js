import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('Dashboard');
  };

  const handleForgetPassword = () => {
    Alert.alert("Notice", "Contact the librarian.");
  };

  return (
    <View style={styles.container}>
      {/* Background Layers */}
      <ImageBackground
        source={require('./assets/sti.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <ImageBackground
          source={require('./assets/back.png')}
          style={styles.overlay}
          resizeMode="cover"
        >
          {/* Login Box */}
          <View style={styles.loginBox}>
            <Text style={styles.title}>Login</Text>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#999"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity onPress={handleForgetPassword}>
              <Text style={styles.forgotPassword}>Forget Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.contactText}>
              Contact the library for an account
            </Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width,
    height,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 25,
    width: '90%',
    maxWidth: 400,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    color: 'red',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  contactText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#444',
  },
});
