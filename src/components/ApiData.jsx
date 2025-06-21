import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

/**
 * API Data component for fetching and displaying data from JSONPlaceholder
 * @returns {JSX.Element} - API Data component
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const postsPerPage = 8;

  // Sample English posts to enhance the content
  const samplePosts = [
    {
      id: 101,
      title: "Getting Started with React Development",
      body: "React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage application state. This post covers the basics of React, including JSX syntax, components, props, and state management.",
      category: "Programming",
      author: "John Developer"
    },
    {
      id: 102,
      title: "Mastering Tailwind CSS for Modern Web Design",
      body: "Tailwind CSS is a utility-first CSS framework that makes styling web applications faster and more efficient. Learn how to use Tailwind's utility classes to create beautiful, responsive designs without writing custom CSS.",
      category: "Design",
      author: "Sarah Designer"
    },
    {
      id: 103,
      title: "Building RESTful APIs with Node.js and Express",
      body: "Create robust and scalable APIs using Node.js and Express.js. This comprehensive guide covers routing, middleware, error handling, authentication, and best practices for building production-ready APIs.",
      category: "Backend",
      author: "Mike Backend"
    },
    {
      id: 104,
      title: "The Future of Web Development: Trends to Watch",
      body: "Explore the latest trends in web development, including AI-powered tools, WebAssembly, progressive web apps, and the growing importance of performance and accessibility in modern web applications.",
      category: "Technology",
      author: "Tech Expert"
    }
  ];

  // Fetch posts from JSONPlaceholder API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Enhance the posts with better titles and content
        const enhancedPosts = data.slice(0, 20).map((post, index) => ({
          ...post,
          title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
          body: post.body.charAt(0).toUpperCase() + post.body.slice(1),
          category: ["Programming", "Technology", "Web Development", "Design", "Tutorial"][index % 5],
          author: ["John Developer", "Sarah Designer", "Mike Backend", "Tech Expert", "Code Master"][index % 5],
          readTime: Math.ceil(post.body.length / 200) + " min read"
        }));
        
        // Combine sample posts with API posts
        setPosts([...samplePosts, ...enhancedPosts]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search term
  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.category && post.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.author && post.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when searching
  }, [posts, searchTerm]);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Loading state
  if (loading) {
    return (
      <Card title="API Data" className="text-center">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-4 text-lg text-gray-600 dark:text-gray-400">Loading posts...</span>
        </div>
      </Card>
    );
  }

  // Error state
  if (error) {
    return (
      <Card title="API Data" className="text-center">
        <div className="py-8">
          <div className="text-red-600 dark:text-red-400 mb-4">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-lg font-semibold">Error loading data</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <Button
            variant="primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card title="📚 Featured Articles & Posts">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="Search articles by title, content, category, or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {currentPosts.length} of {filteredPosts.length} articles
          {searchTerm && (
            <span className="ml-2 text-blue-600 dark:text-blue-400">
              matching "{searchTerm}"
            </span>
          )}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-500">
          {totalPages > 1 && `Page ${currentPage} of ${totalPages}`}
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-6 mb-8">
        {currentPosts.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {searchTerm ? 'No articles found' : 'No articles available'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {searchTerm ? 'Try adjusting your search terms.' : 'Check back later for new content.'}
            </p>
          </div>
        ) : (
          currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {post.category && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {post.category}
                      </span>
                    )}
                    {post.author && (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {post.author}
                      </span>
                    )}
                    {post.readTime && (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {post.readTime}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 ml-4">
                  #{post.id}
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {post.body.length > 200
                  ? `${post.body.substring(0, 200)}...`
                  : post.body}
              </p>
              
              <div className="flex items-center justify-between">
                <Button
                  variant="primary"
                  size="sm"
                  className="text-sm"
                >
                  Read More
                </Button>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Previous
          </Button>
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const page = i + 1;
            return (
              <Button
                key={page}
                variant={currentPage === page ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            );
          })}
          
          {totalPages > 5 && (
            <span className="text-gray-500 dark:text-gray-400">...</span>
          )}
          
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="flex items-center"
          >
            Next
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ApiData; 