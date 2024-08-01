
import { StyleSheet, Text, View} from 'react-native';
import MainNavigator from './src/Navigation/MainNavigator';
export default function App() {
  return (
    <>
      <MainNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
