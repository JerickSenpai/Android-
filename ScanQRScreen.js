import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function ScanQRScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const mockDatabase = {
    "12345": { title: "Intro to React", author: "Dan Abramov", year: 2022 },
    "67890": { title: "Data Structures", author: "Robert Lafore", year: 2020 },
    "qrcode-book-01": { title: "The QR Chronicles", author: "Libby Readwell", year: 2021 }
  };

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    const book = mockDatabase[data];
    if (book) {
      Alert.alert("Book Info", `📘 ${book.title}\n✍️ ${book.author}\n📅 ${book.year}`);
    } else {
      Alert.alert("Not Found", "No matching book in the database.");
    }
    setTimeout(() => setScanned(false), 3000);
  };

  if (hasPermission === null) return <Text>Requesting camera permission…</Text>;
  if (hasPermission === false) return <Text>No camera access</Text>;

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Text style={styles.instruction}>Scan a QR code to view book info</Text>
    </View>
  );
}

export function scanQRScreenOptions() {
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
  container: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  instruction: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    borderRadius: 10,
  },
});
