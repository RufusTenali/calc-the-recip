import React, { useState } from 'react';
import Header from './components/Header';
import RecipeInput from './components/RecipeInput';
import ScalerControls from './components/ScalerControls';
import IngredientList from './components/IngredientList';
import { parseRecipeText } from './utils/parser';
import { scaleRecipe } from './utils/scaler';

function App() {
  const [recipeData, setRecipeData] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [scalingFactor, setScalingFactor] = useState(1);

  const handleScaleRequest = (data) => {
    // 1. Parse the input text
    const parsed = parseRecipeText(data.content);
    setRecipeData(data);
    setIngredients(parsed);
    setScalingFactor(1); // Reset factor on new import
  };

  const handleFactorChange = (newFactor) => {
    setScalingFactor(newFactor);
    // Note: We don't change the 'ingredients' state itself, 
    // we derivation happens in render or we keep a 'baseIngredients' state.
    // simpler approach: keep baseIngredients and derivedIngredients.
  };

  // Derive displayed ingredients based on factor
  const displayedIngredients = scaleRecipe(ingredients, scalingFactor);

  return (
    <div className="container">
      <Header />
      <main>
        {!recipeData ? (
          <RecipeInput onScaleRequest={handleScaleRequest} />
        ) : (
          <div className="results-container" style={{ marginTop: '2rem' }}>
            
            <ScalerControls 
              currentFactor={scalingFactor} 
              onFactorChange={handleFactorChange} 
            />

            <IngredientList 
              ingredients={displayedIngredients} 
              // For now, we will just log changes from the list
              onIngredientChange={(newFactor) => setScalingFactor(newFactor)}
            />

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                onClick={() => {
                  setRecipeData(null);
                  setIngredients([]);
                }}
                style={{ 
                  padding: '0.5rem 1rem', 
                  background: 'none', 
                  border: '1px solid var(--color-text-muted)',
                  borderRadius: '8px'
                }}
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        <p>Calc The Recip © 2026 • Built with &hearts;</p>
      </footer>
    </div>
  );
}

export default App;
