import React from 'react';
import { Ingredient } from '../utils/parser';

interface IngredientListProps {
  ingredients: Ingredient[];
  onIngredientChange: (newFactor: number) => void;
}

/**
 * IngredientList Component
 * Displays the list of ingredients and allows target scaling.
 * 
 * Props:
 * - ingredients (Array): List of ingredient objects { original, quantity, unit, ingredient }.
 * - onIngredientChange (function): Callback when a user manually edits a quantity.
 *   - Used for "Target Scaling" (e.g., user changes Flour from 100 to 200 -> implied 2x factor).
 * 
 * Implementation Idea:
 * 1.  Map through `ingredients` array.
 * 2.  Render a row for each:
 *     -   [Input: Quantity] (Editable)
 *     -   [Text: Unit]
 *     -   [Text: Ingredient Name]
 * 
 * 3.  Handling Edits:
 *     -   When user types into [Quantity], calculate the NEW factor immediately.
 *     -   New Factor = (Typed Value) / (Base Non-Scaled Value).
 *     -   Call `onIngredientChange(newFactor)` to update the whole app.
 * 
 * 4.  Formatting:
 *     -   Use a helper to display fractions nicely (e.g. 0.5 -> "1/2").
 */

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, onIngredientChange }) => {
  if (!ingredients || ingredients.length === 0) {
    return <p className="text-center text-muted">No ingredients found to display.</p>;
  }

  return (
    <div className="ingredient-list">
      <h3>Ingredients Placeholder</h3>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index} style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
            {/* TODO: Construct the smart inputs here */}
            {ing.original} (Qty: {ing.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
