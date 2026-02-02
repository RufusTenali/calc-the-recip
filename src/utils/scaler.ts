import { Ingredient } from './parser';

/**
 * Scaler Utility (TypeScript)
 * Responsible for mathematical conversions and ratio calculations.
 */

export const calculateScalingFactor = (originalQty: number, targetQty: number): number => {
  if (originalQty === 0) return 1; // Avoid divide by zero
  return targetQty / originalQty;
};

export const scaleIngredient = (ingredient: Ingredient, factor: number): Ingredient => {
  if (!ingredient.scalable) return ingredient;

  const newQuantity = ingredient.quantity * factor;

  return {
    ...ingredient,
    quantity: newQuantity,
  };
};

export const scaleRecipe = (parsedIngredients: Ingredient[], factor: number): Ingredient[] => {
  return parsedIngredients.map(ing => scaleIngredient(ing, factor));
};
