import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore((state) => ({
    recommendations: state.recommendations,
    generateRecommendations: state.generateRecommendations,
  }));

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (!recommendations || recommendations.length === 0)
    return <p>No recommendations available.</p>;

  return (
    <div style={{ marginTop: '24px' }}>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '12px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
