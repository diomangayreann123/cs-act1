import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://i.imgur.com/6VBx3io.png' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Hello, Student! 👋</Text>
        <Text style={styles.subtitle}>CS Student • Activity 2</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>My Courses</Text>
          <Text style={styles.cardText}>3 Active Subjects</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Progress</Text>
          <Text style={styles.cardText}>85% Complete</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fa', padding: 24 },
  profileSection: { alignItems: 'center', marginTop: 40, marginBottom: 32 },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#1a1a2e' },
  subtitle: { fontSize: 14, color: '#6b7280', marginTop: 4 },
  cardContainer: { flexDirection: 'row', gap: 12, marginBottom: 32 },
  card: { flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 20 },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  cardText: { fontSize: 13, color: '#6b7280' },
  button: { backgroundColor: '#4f46e5', borderRadius: 12, paddingVertical: 16, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});
