import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AttendanceRecordScreen({ navigation }) {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching from a database
  useEffect(() => {
    setTimeout(() => {
      // Placeholder "database" data
      const mockData = [
        { date: '2025-04-20', timeIn: '08:15 AM', timeOut: '10:45 AM' },
        { date: '2025-04-22', timeIn: '09:00 AM', timeOut: '11:00 AM' },
        { date: '2025-04-25', timeIn: '01:30 PM', timeOut: '03:10 PM' },
      ];
      setAttendanceData(mockData);
      setLoading(false);
    }, 1000); // 1 second delay to simulate database fetch
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Dashboard')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>STI</Text>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Library Attendance</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#0071BC" />
        ) : (
          attendanceData.map((entry, index) => (
            <View key={index} style={styles.attendanceItem}>
              <Text style={styles.text}>Date: {entry.date}</Text>
              <Text style={styles.text}>Time In: {entry.timeIn}</Text>
              <Text style={styles.text}>Time Out: {entry.timeOut}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0071BC',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 30,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  attendanceItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    elevation: 2,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});
