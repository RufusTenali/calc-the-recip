import React from 'react';

interface ScalerControlsProps {
  currentFactor: number;
  onFactorChange: (factor: number) => void;
}

/**
 * ScalerControls Component
 * Validates and triggers scaling updates for the recipe.
 * 
 * Props:
 * - currentFactor (number): The currently applied scaling factor (default 1.0).
 * - onFactorChange (function): Callback to update the factor in parent App state.
 * 
 * Implementation Idea:
 * 1.  Slider Input:
 *     -   Range: 0.25 to 5.0 (or similar useful range).
 *     -   Step: 0.25 for clean increments.
 *     -   Value linked to `currentFactor`.
 * 
 * 2.  Direct Input:
 *     -   Number input to allow precise scaling (e.g. "1.33").
 * 
 * 3.  Quick Actions (Buttons):
 *     -   [Halve (0.5x)]
 *     -   [Double (2x)]
 *     -   [Reset (1x)]
 * 
 * 4.  Visuals:
 *     -   Container should be sticky or prominent at top/bottom of list.
 *     -   Use glassmorphism background to overlay content if sticky.
 */

const ScalerControls: React.FC<ScalerControlsProps> = ({ currentFactor, onFactorChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onFactorChange(value);
  };

  return (
    <div className="scaler-controls">
      <h3>What Ratios Do You Want?</h3>

      {/* Number input */}
      <div style={{ minHeight: '100px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="number"
              value={currentFactor}
              onChange={handleInputChange}
              placeholder={currentFactor.toString()}
              style={{
                width: '15%',
                padding: '1rem',
                borderRadius: '16px',
                border: '2px solid var(--color-cream-300)',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                fontSize: '1rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-emerald-600)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-cream-300)'}
            />
          </div>

      {/* Quick buttons */}
      {/* <div style={{ marginTop: "0.5rem" }}>
        <button onClick={() => onFactorChange(0.5)}>0.5x</button>
        <button onClick={() => onFactorChange(2)}>2x</button>
      </div> */}
    </div>
  );
};


export default ScalerControls;
