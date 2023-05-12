import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';

const Cat = (props) => {
  if (props.name !== undefined)
    return <Text>Hello, I am your {props.name}!</Text>;

  return <Text>Hello, I am your cat!</Text>;
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Cat name={"Alberto"} />
      <Cat />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
