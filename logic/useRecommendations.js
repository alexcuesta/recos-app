import { useState } from 'react';

export function useRecommendations() {
  const [recommendations, setRecommendations] = useState([
    { id: 1, title: 'Inception' },
    { id: 2, title: '1984' },
    { id: 3, title: 'The Last of Us' },
  ]);

  const [watched, setWatched] = useState([]);

  const toggleWatched = (id) => {
    setWatched((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addRecommendation = (title) => {
    const newId = Math.max(...recommendations.map((r) => r.id)) + 1;
    const newRec = { id: newId, title };
    setRecommendations((prev) => [...prev, newRec]);
  }

  return { recommendations, watched, toggleWatched, addRecommendation };
}
