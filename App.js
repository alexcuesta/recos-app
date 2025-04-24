import { View, Text, StyleSheet } from 'react-native';
import RecommendationList from './components/RecommendationList';

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis recomendaciones</Text>
      <RecommendationList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 24, marginBottom: 10 },
});
