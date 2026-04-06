import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const Navbar = ({ setCategory }) => {
  const [active, setActive] = useState('general');

  const handleCategoryClick = (category) => {
    setActive(category);
    setCategory(category);
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.85)', 
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
        color: '#0f172a'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex flex-col md:flex-row justify-between items-center py-3">
          <Box 
            className="flex items-center gap-3 cursor-pointer group w-full md:w-auto justify-center md:justify-start mb-3 md:mb-0" 
            onClick={() => handleCategoryClick('general')}
          >
            <Box className="bg-gradient-to-br from-red-500 to-rose-600 p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              <NewspaperIcon sx={{ color: 'white' }} />
            </Box>
            <Typography variant="h5" component="div" className="font-extrabold tracking-tight">
              News<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">Hub</span>
            </Typography>
          </Box>
          <Box className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 px-1 scroll-smooth no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryClick(category)}
                variant={active === category ? "contained" : "text"}
                sx={{
                  borderRadius: '9999px', // fully rounded pills
                  padding: '6px 16px',
                  textTransform: 'capitalize',
                  fontWeight: active === category ? 'bold' : '600',
                  backgroundColor: active === category ? '#ef4444' : 'transparent',
                  color: active === category ? 'white' : '#64748b',
                  boxShadow: active === category ? '0 4px 14px 0 rgba(239, 68, 68, 0.39)' : 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  '&:hover': {
                    backgroundColor: active === category ? '#dc2626' : 'rgba(239, 68, 68, 0.1)',
                    color: active === category ? 'white' : '#ef4444',
                  },
                }}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;