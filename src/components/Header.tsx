import React from 'react';
import { ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ 
        padding: '2rem 0', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      <div style={{
        backgroundColor: 'var(--color-emerald-100)', 
        padding: '0.75rem', 
        borderRadius: '50%',
        color: 'var(--color-emerald-900)',
        display: 'inline-flex',
        marginBottom: '0.5rem'
      }}>
        <ChefHat size={40} strokeWidth={1.5} />
      </div>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '700',
        letterSpacing: '-0.02em',
        background: 'var(--gradient-main)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.25rem'
      }}>
        Calc The Recip
      </h1>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
        Perfect portions, every time.
      </p>
    </motion.header>
  );
};

export default Header;
