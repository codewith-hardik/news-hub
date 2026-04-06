import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const NewsItem = ({ title, description, src, url, author }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden bg-white">
      <Box className="relative">
        <CardMedia
          component="img"
          height="200"
          image={src || 'https://via.placeholder.com/400x200?text=No+Image+Available'}
          alt={title}
          sx={{ height: 200, objectFit: 'cover' }}
        />
        <Chip 
          label={new Date().toLocaleDateString('en-IN')} 
          color="error"
          size="small"
          className="absolute top-2 right-2 shadow-sm font-semibold"
        />
      </Box>
      <CardContent className="flex-grow">
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div" 
          className="font-bold line-clamp-2 leading-tight"
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          className="line-clamp-3 mt-2"
        >
          {description ? description : 'No description available for this news article. Click read more to view the full story...'}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between items-center px-4 pb-4 pt-0">
        <Box className="flex flex-col">
          <Typography variant="caption" className="text-gray-500 font-medium">
            By {author ? author.slice(0, 20) : 'Unknown'}
          </Typography>
        </Box>
        <Button 
          variant="outlined"
          color="error"
          size="small"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full shadow-sm hover:shadow-md"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string.isRequired,
  date: PropTypes.string,
  author: PropTypes.string
};

export default NewsItem;