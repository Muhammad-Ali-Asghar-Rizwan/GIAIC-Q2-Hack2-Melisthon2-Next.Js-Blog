import React from 'react';
import BlogCard from './BlogCard';


const Mega = () => {
  const posts = [
    {
      id: '1',
      title: 'Next.Js 15',
      description: 'What’s New in Next.js 15: A Complete Guide to the Latest Features',
      date: '2024-11-28',
      imageUrl: '/images/next.jpg',
    },
    {
      id: '2',
      title: 'Next.Js 15',
      description: 'How to Set Up Your Next.js 15 Project: A Beginner-Friendly Guide',
      date: '2024-11-28',
      imageUrl: '/images/next.jpg',
    },
    {
      id: '3',
      title: 'Next.js 15',
      description: 'Mastering Dynamic and Nested Routing in Next.js 15',
      date: '2024-11-28',
      imageUrl: '/images/next.jpg',
    },
    {
      id: '4',
      title: 'Next.Js 15',
      description: 'Exploring Data Fetching Techniques in Next.js 15',
      date: '2024-11-28',
      imageUrl: '/images/next.jpg',
    },
    {
      id: '5',
      title: 'Next.Js 15',
      description: 'Leveraging Middleware in Next.js 15 for Smarter Applications',
      date: '2024-11-28',
      imageUrl: '/images/next.jpg',
    },
    {
      id: '6',
      title: 'Next.Js 15',
      description: '10 Proven Tips to Optimize Your Next.js 15 Applications for Performance',
      date: '2024-11-28',
      imageUrl: '/images/next.jpg',
    },
    // Add more unique entries as needed
  ];

  return (
    <div className="my-8 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mega;
