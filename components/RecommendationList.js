import { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, FlatList, StyleSheet } from 'react-native';
import { useRecommendations } from '../logic/useRecommendations';

export default function RecommendationList() {
  const { recommendations, watched, toggleWatched, addRecommendation } = useRecommendations();
  const [newTitle, setNewTitle] = useState('');

  const handleAddRecommendation = () => {
    if (newTitle.trim()) {
      addRecommendation(newTitle);
      setNewTitle('');
    }
  }

  return (
    <View>
      <FlatList
        data={recommendations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => toggleWatched(item.id)}>
            <Text style={watched.includes(item.id) ? styles.checked : styles.item}>
              {item.title}
            </Text>
          </Pressable>
        )}
      />

      <View style={styles.form}>
        <TextInput
          value={newTitle}
          onChangeText={setNewTitle}
          placeholder="Nueva recomendación"
          style={styles.input}
        />
        <Button title="Añadir" onPress={handleAddRecommendation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { fontSize: 18, marginVertical: 5 },
  checked: {
    fontSize: 18,
    marginVertical: 5,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  form: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 16,
    color: 'black',
  },
});
