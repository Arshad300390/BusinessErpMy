import Form from './components/Form';
import { StyleSheet,  View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Form />
      </View>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
