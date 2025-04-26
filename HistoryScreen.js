import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function HistoryScreen({ navigation }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the mock API
    axios
      .get('http://localhost:5000/api/transactions') // Replace with your backend API URL
      .then((response) => {
        // Handle response and set state
        setHistory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
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
      <ScrollView style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0071BC" />
        ) : (
          history.map((group, index) => (
            <View key={index}>
              <Text style={styles.dateHeader}>{group.date}</Text>
              <View style={styles.card}>
                <Text style={styles.description}>
                  {group.type}: <Text style={styles.bookTitle}>{group.book}</Text>
                </Text>
                <Text style={styles.time}>{group.time}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0071BC',
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    padding: 20,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
  },
  bookTitle: {
    color: '#0071BC',
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
});
