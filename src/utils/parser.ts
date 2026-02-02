/**
 * Parser Utility (TypeScript)
 * Responsible for converting raw recipe lines into structured data.
 */

export interface Ingredient {
  original: string;
  quantity: number;
  unit: string;
  ingredient: string;
  scalable: boolean;
}

// Map canonical unit -> list of variations
const UNIT_VARIANTS: Record<string, string[]> = {
  tbsp: ['tablespoon', 'tablespoons', 'tbsp', 'tbs', 'T'],
  tsp: ['teaspoon', 'teaspoons', 'tsp', 't'],
  cup: ['cup', 'cups', 'c'],
  oz: ['ounce', 'ounces', 'oz'],
  lb: ['pound', 'pounds', 'lb', 'lbs'],
  g: ['gram', 'grams', 'g'],
  kg: ['kilogram', 'kilograms', 'kg'],
  ml: ['milliliter', 'milliliters', 'ml'],
  l: ['liter', 'liters', 'l'],
};

// Flatten into a lookup map for O(1) access: { "tablespoon": "tbsp", "tbs": "tbsp" ... }
const UNIT_LOOKUP: Record<string, string> = Object.entries(UNIT_VARIANTS).reduce(
  (acc, [canonical, variants]) => {
    variants.forEach(variant => {
      acc[variant.toLowerCase()] = canonical;
    });
    // Ensure canonical itself is in the map
    acc[canonical] = canonical;
    return acc;
  }, 
  {} as Record<string, string>
);

export const normalizeUnit = (unit: string): string =>
  UNIT_LOOKUP[unit.toLowerCase()] || unit.toLowerCase();

export const parseIngredient = (line: string): Ingredient => {
  // TODO: Implement regex parsing here
  
  // Return placeholder for now
  return {
    original: line,
    quantity: 1, // Default to 1 to signify it wasn't parsed
    unit: '',
    ingredient: line,
    scalable: false 
  };
};

export const parseRecipeText = (fullText: string): Ingredient[] => {
  if (!fullText) return [];
  
  // Split by newline and filter empty lines
  return fullText.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(parseIngredient);
};
