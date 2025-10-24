import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Legal Rights in 2024",
      excerpt: "Learn about the latest changes in legislation and how they affect your rights...",
      date: "March 15, 2024",
      category: "Legal Updates"
    },
    {
      id: 2,
      title: "How to Choose the Right Lawyer for Your Case",
      excerpt: "A comprehensive guide to selecting legal representation that fits your needs...",
      date: "March 10, 2024",
      category: "Legal Advice"
    },
    {
      id: 3,
      title: "The Impact of Technology on Modern Law Practices",
      excerpt: "Exploring how digital transformation is changing the legal landscape...",
      date: "March 5, 2024",
      category: "Industry Insights"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay informed with the latest legal insights, updates, and expert advice from our team.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="badge badge-primary">{post.category}</div>
              <h2 className="card-title">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">{post.date}</span>
                <button className="btn btn-ghost btn-sm">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;