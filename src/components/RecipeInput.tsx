import React, { useState } from 'react';
import { Link2, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface RecipeInputProps {
  onScaleRequest: (data: { type: string; content: string }) => void;
}

const RecipeInput: React.FC<RecipeInputProps> = ({ onScaleRequest }) => {
  const [activeTab, setActiveTab] = useState<'paste' | 'url'>('paste'); // 'paste' or 'url'
  const [inputText, setInputText] = useState('');

  const handleScale = () => {
    if (!inputText.trim()) return;
    onScaleRequest({ type: activeTab, content: inputText });
  };

  return (
    <motion.div 
      className="recipe-input-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        border: 'var(--glass-border)',
        borderRadius: '24px',
        padding: '2rem',
        boxShadow: 'var(--shadow-xl)',
        marginTop: '1rem'
      }}
    >
      {/* Tabs */}
      <div className="tabs" style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '1.5rem', 
        borderBottom: '2px solid var(--color-cream-300)',
        paddingBottom: '0.5rem'
      }}>
        <button 
          onClick={() => setActiveTab('paste')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            color: activeTab === 'paste' ? 'var(--color-emerald-900)' : 'var(--color-text-muted)',
            borderBottom: activeTab === 'paste' ? '2px solid var(--color-emerald-900)' : '2px solid transparent',
            marginBottom: '-0.6rem',
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          <FileText size={18} />
          Paste Recipe
        </button>
        <button 
          onClick={() => setActiveTab('url')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            color: activeTab === 'url' ? 'var(--color-emerald-900)' : 'var(--color-text-muted)',
            borderBottom: activeTab === 'url' ? '2px solid var(--color-emerald-900)' : '2px solid transparent',
            marginBottom: '-0.6rem',
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          <Link2 size={18} />
          Import from URL
        </button>
      </div>

      {/* Input Area */}
      <div className="input-area" style={{ position: 'relative' }}>
        {activeTab === 'paste' ? (
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your ingredients list here...
Example:
2 cups flour
1/2 tsp salt
3 eggs"
            style={{
              width: '100%',
              minHeight: '200px',
              padding: '1rem',
              borderRadius: '16px',
              border: '2px solid var(--color-cream-300)',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              fontSize: '1rem',
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-emerald-600)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--color-cream-300)'}
          />
        ) : (
          <div style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Paste a URL from a recipe website. We'll try to extract the ingredients automatically.
            </p>
            <input
              type="url"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="https://example.com/recipe/..."
              style={{
                width: '100%',
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
        )}

        {/* Action Button */}
        <button
          onClick={handleScale}
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: 'var(--color-emerald-900)',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transform: 'translateY(50%)',
            marginTop: '1rem'
          }}
        >
          Let's Cook <ArrowRight size={18} />
        </button>
      </div>

      <div style={{ height: '2rem' }}></div> {/* Spacer for the button overhang */}
    </motion.div>
  );
};

export default RecipeInput;
