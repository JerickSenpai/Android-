import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DueScreen, { dueScreenOptions } from './DueScreen';
import HistoryScreen, { historyScreenOptions } from './HistoryScreen';
import ScanQRScreen, { scanQRScreenOptions } from './ScanQRScreen';
import AttendanceRecordScreen, { attendanceRecordScreenOptions } from './AttendanceRecordScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
             initialRouteName="Login"
             screenOptions={{
               headerStyle: { backgroundColor: '#0071BC' },
               headerTintColor: '#fff',
               headerTitleAlign: 'center',
               headerTitle: 'STI',
              }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Due" component={DueScreen} options={dueScreenOptions()} />
        <Stack.Screen name="History" component={HistoryScreen} options={historyScreenOptions()} />
        <Stack.Screen name="ScanQR" component={ScanQRScreen} options={scanQRScreenOptions()} />
        <Stack.Screen name="AttendanceRecord" component={AttendanceRecordScreen} options={attendanceRecordScreenOptions()} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
