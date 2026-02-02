/**
 * Parser Utility
 * Responsible for converting raw recipe lines into structured data.
 * 
 * Implementation Idea:
 * 1.  Input: A string line (e.g., "1 1/2 cups All-Purpose Flour").
 * 2.  Strategy:
 *     -   Use Regex to identify the leading quantity.
 *     -   Handle formats like integers ("2"), decimals ("1.5"), and fractions ("1/2", "1 1/2").
 *     -   Identify the "unit" if present (cup, tsp, tbsp, g, oz, etc.).
 *         -   Normalize units (e.g., "teaspoon", "tsp", "t" -> "tsp").
 *     -   The remainder of the string is the "ingredient".
 * 
 * 3.  Output Object:
 *     {
 *       original: "1 1/2 cups Flour",
 *       quantity: 1.5,
 *       unit: "cup",
 *       ingredient: "Flour",
 *       scalable: true // false if no quantity found (e.g. "Salt to taste")
 *     }
 */

// map of common unit abbreviations to a standard key
const UNIT_MAP = {
  // 'tbsp': ['tablespoon', 'tbsp', 'tbs'], 
  // ...
};

export const parseIngredient = (line) => {
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

export const parseRecipeText = (fullText) => {
  if (!fullText) return [];
  
  // Split by newline and filter empty lines
  return fullText.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(parseIngredient);
};
