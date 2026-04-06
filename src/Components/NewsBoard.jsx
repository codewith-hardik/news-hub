import { useState, useEffect } from 'react'
import { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Box, Chip } from '@mui/material';
import NewsItem from './NewsItem'
import WhatshotIcon from '@mui/icons-material/Whatshot';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      try {
        // NewsAPI.org blocks free accounts on deployed sites (HTTP 426). This free proxy allows it to work on Vercel.
        fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/us.json`)
          .then(res => res.json())
          .then(data => {
            if (data.articles) {
              setArticles(data.articles)
            }
          })
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [category])

  return (
    <Container maxWidth="xl" className="py-8 min-h-screen">
      <Box className="flex justify-center items-center mb-8 gap-3">
        <Typography variant="h4" component="h2" className="font-bold text-gray-800 tracking-tight">
          Top Headlines
        </Typography>
        <Chip 
          icon={<WhatshotIcon sx={{ color: '#ef4444' }} />} 
          label={category.charAt(0).toUpperCase() + category.slice(1)} 
          variant="outlined" 
          color="error"
          className="font-semibold text-lg py-5 px-2"
        />
      </Box>

      {loading ? (
        <Box className="flex justify-center items-center py-20">
          <CircularProgress color="error" />
        </Box>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              author={news.author}
            />
          ))}
        </div>
      )}
    </Container>
  )
}

export default NewsBoard