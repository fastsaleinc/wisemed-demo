import React from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import useFetchUsers from '../hooks/useFetchUsers';

const UserTable = () => {
  const { result: users, loading, error } = useFetchUsers();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Name</Text>
          <Text style={styles.headerText}>Email</Text>
        </View>
        {users.map((user) => (
          <View key={user.id} style={styles.row}>
            <Text style={styles.cell}>{user.name}</Text>
            <Text style={styles.cell}>{user.email}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default UserTable;
