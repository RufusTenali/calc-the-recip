/**
 * Scaler Utility
 * Responsible for mathematical conversions and ratio calculations.
 * 
 * Implementation Idea:
 * 1.  Scaling by Factor:
 *     -   Simple multiplication: newQuantity = originalQuantity * scalingFactor.
 * 
 * 2.  Scaling by Target Ingredient:
 *     -   User wants "Flour" to be 500g (originally 250g).
 *     -   Calculate factor: factor = targetAmount / originalAmount (500/250 = 2.0).
 *     -   Apply this derived factor to all other ingredients.
 * 
 * 3.  Unit Formatting (Optional but recommended):
 *     -   After scaling, 0.3333... cups might be better displayed as "1/3 cup".
 *     -   Large teaspoons might convert to tablespoons? (Advanced feature).
 */

export const calculateScalingFactor = (originalQty, targetQty) => {
  // TODO: Safety check for divide by zero
  return targetQty / originalQty;
};

export const scaleIngredient = (ingredient, factor) => {
  if (!ingredient.scalable) return ingredient;

  const newQuantity = ingredient.quantity * factor;

  return {
    ...ingredient,
    quantity: newQuantity,
    // potentially format the quantity here or in the UI component
  };
};

export const scaleRecipe = (parsedIngredients, factor) => {
  return parsedIngredients.map(ing => scaleIngredient(ing, factor));
};
