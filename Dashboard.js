import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

export default function DashboardScreen({ navigation }) {
  const footerButtons = [
    { label: 'Due', screen: 'Due' },
    { label: 'History', screen: 'History' },
    { label: 'Scan QR', screen: 'ScanQR' },
    { label: 'Attendance Record', screen: 'AttendanceRecord' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageRow}>
          <View style={styles.imageBox}>
            <Text style={styles.label}>News</Text>
            <Image source={require('./assets/news.jpg')} style={styles.image} />
          </View>
          <View style={styles.imageBox}>
            <Text style={styles.label}>Dues</Text>
            <Image source={require('./assets/dues.jpg')} style={styles.image} />
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Due')}>
              <FontAwesome5 name="calendar-alt" size={24} color="#fff" />
              <Text style={styles.footerButtonText}>Due</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('History')}>
              <MaterialCommunityIcons name="history" size={24} color="#fff" />
              <Text style={styles.footerButtonText}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('ScanQR')}>
              <AntDesign name="qrcode" size={24} color="#fff" />
              <Text style={styles.footerButtonText}>Scan QR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AttendanceRecord')}>
              <Ionicons name="person-circle-outline" size={24} color="#fff" />
              <Text style={styles.footerButtonText}>Attendance</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  content: { flexGrow: 1, padding: 20 },
  imageRow: { flexDirection: 'row', justifyContent: 'space-between' },
  imageBox: {
    width: (width - 60) / 2,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 5,
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: '100%',
    height: '85%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  
  footerButton: {
    flex: 1,
    backgroundColor: '#0071BC',
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30, // Rounded button
    height: 80,
  },
  
  footerButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
    textAlign: 'center',
  },

});
