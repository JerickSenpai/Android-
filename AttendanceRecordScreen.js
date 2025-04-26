import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AttendanceRecordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Attendance Record Screen</Text>
    </View>
  );
}

export function attendanceRecordScreenOptions() {
  const navigation = useNavigation();

  return {
    title: 'STI',
    headerStyle: { backgroundColor: '#0071BC' },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{ paddingLeft: 15 }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>← Back</Text>
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});
