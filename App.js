import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:"blue"}}> My Passion </Text>
      <Text>My passion is coding and and trying to learn how to. I also like gaming and thats where I got my interest for coding and wanted to make a small game myself.</Text>

      <Text style={{color:"blue"}}>My role</Text>
      <Text>I am the Developer for my team</Text>

      <Text style={{color:"blue"}}>My dream career</Text>
      <Text>My dream career is to code for a game that I made.</Text>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
