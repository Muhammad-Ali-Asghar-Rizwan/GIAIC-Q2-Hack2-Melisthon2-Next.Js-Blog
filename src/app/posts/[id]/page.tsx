
// import AuthorCard from '@/app/component/AuthoreCard';
// import CommentSection from '@/app/component/CommentSection';
// import Image from 'next/image';
// import React from 'react'
// const posts = [
//     {
//       id: '1',
//       title: 'Next.Js 15',
//       heading:'What’s New in Next.js 15: A Complete Guide to the Latest Features',
//       description: 'Next.js 15 has arrived, bringing with it a host of exciting features, improvements, and optimizations that elevate the developer experience. Heres a comprehensive guide to whats new in Next.js 15 and how you can leverage these features in your projects.',
//       date: '2024-11-28',
//       imageUrl: '/images/next.jpg',
//       alt: "Next.js 15",
//     },
//     {
//       id: '2',
//       title: 'Next.Js 15',
//       heading:'How to Set Up Your Next.js 15 Project: A Beginner-Friendly Guide',
//       description: 'Setting up a Next.js 15 project is incredibly simple and beginner-friendly! Start by installing Node.js and npm on your system, then use the command npx create-next-app@latest my-nextjs-app to create a new project. Navigate into the project directory using cd my-nextjs-app and start the development server with npm run dev to preview your app at http://localhost:3000. Next.js 15 comes with a well-structured default setup, including optimized routes, server components, and support for modern tools like TypeScript. Whether youre building a blog, portfolio, or complex web application, this framework has everything you need to kickstart your development journey!',
//       date: '2024-11-28',
//       imageUrl: '/images/next.jpg',
//       alt: "Next.js 15",

//     },
//     {
//       id: '3',
//       title: 'Next.js 15',
//       heading:'Mastering Dynamic and Nested Routing in Next.js 15',
//       description: 'Dynamic and nested routing in Next.js 15 empowers developers to create sophisticated and scalable applications effortlessly. With dynamic routes, you can handle paths with variables, like posts/[id], enabling you to render content dynamically based on the URL. Nested routing, on the other hand, allows you to build complex layouts by nesting pages within each other, enhancing code organization and reusability. Together, these features make Next.js 15 an excellent choice for building interactive and user-friendly web applications. Understanding and leveraging these routing techniques will take your Next.js skills to the next level!',
//       date: '2024-11-28',
//       imageUrl: '/images/next.jpg',
//       alt: "Next.js 15",

//     },
//     {
//       id: '4',
//       title: 'Next.Js 15',
//       heading:'Exploring Data Fetching Techniques in Next.js 15',
//       description: 'Data fetching is a cornerstone of modern web applications, and Next.js 15 offers a variety of techniques to handle it efficiently. Whether you need data at build time, runtime, or for static pages, Next.js provides tools like getStaticProps for static generation, getServerSideProps for server-side rendering, and getStaticPaths for dynamic routing. Additionally, the introduction of React Server Components in Next.js 15 allows seamless integration of server-side logic directly into your components. These features enable developers to optimize performance and deliver personalized, high-performing web experiences effortlessly.',
//       date: '2024-11-28',
//       imageUrl: '/images/next.jpg',
//       alt: "Next.js 15",

//     },
//     {
    
    
//       id: '5',
//       title: 'Next.Js 15',
//       heading:'Leveraging Middleware in Next.js 15 for Smarter Applications',

//       description: 'Middleware in Next.js 15 is a powerful tool that enables you to execute custom logic at the edge, before a request is completed. This allows you to modify responses, handle authentication, or serve localized content without adding unnecessary load to your server. With improved support in Next.js 15, middleware is faster, more flexible, and capable of delivering smarter applications that cater to diverse user needs. By using middleware effectively, you can enhance performance, improve security, and provide a personalized experience for your users—all at lightning-fast speeds.',
//       date: '2024-11-28',
//       imageUrl: '/images/next.jpg',
//       alt: "Next.js 15",

//     },
//     {
//       id: '6',
//       title: 'Next.Js 15',
//       heading:'10 Proven Tips to Optimize Your Next.js 15 Applications for Performance',
//       description: 'To optimize your Next.js 15 application for performance, start by using Static Site Generation (SSG) with getStaticProps for pre-rendering static pages and Incremental Static Regeneration (ISR) to update static content without rebuilding the entire site. Optimize images with the built-in <Image /> component, enabling resizing and modern formats like WebP. For dynamic content, use Server-Side Rendering (SSR) with getServerSideProps to ensure up-to-date content. Implement code splitting with next/dynamic to load only the necessary JavaScript for each page, and deploy your app on a CDN for faster delivery. Optimize web fonts with next/font for efficient font loading, minimize JavaScript and CSS bundles, and ensure API routes are efficient with serverless functions and caching. Finally, monitor performance using Next.js Analytics and consider using Edge Functions to reduce latency and improve response times. By incorporating these strategies, you’ll create a faster, more responsive, and scalable application.',
//       date: '2024-11-28',
//       imageUrl: '/images/next.jpg',
//       alt: "Next.js 15",

//     },
//     // Add more unique entries as needed
//   ];

//   export default function Post({ params }: { params: { id: string } }) {
//     const { id } = params;
//     const post = posts.find((p) => p.id === id);

//     if (!post) {
//         return (
//             <h2 className='h-screen flex items-center justify-center text-center font-bold text-5xl'>
//                 404 Post not Found
//             </h2>
//         );
//     }
//     const renderParagraph = (descrption: string) => {
//       return descrption.split("/n").map((para, index) => (
//         <p key={index} className='mt-4 text-justify'>
//           {para.trim()}
//         </p>
//       ))
//     };










//   return (
//     <div className='max-w-3xl mx-auto  p-5'>
//       <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center '>{post.title}</h1>

//       {post.imageUrl && (
//         <Image src={post.imageUrl} alt={post.alt} width={300} height={300} className='w-full h-auto rounded-lg mt-6 '/>
//       )}

//       <h1 className='text-2xl text-zinc-900 mt-6 font-bold'>  {post.heading}</h1>

//       <div className='mt-8 text-lg text-slate-700 '>
//         {renderParagraph(post.description)}

//       </div>


//       <CommentSection postId={post.id}/>
//       <AuthorCard/>
//     </div>
//   )
// }





import AuthorCard from '@/app/component/AuthoreCard';
import CommentSection from '@/app/component/CommentSection';
import Image from 'next/image';

const posts = [
  {
          id: '1',
          title: 'Next.Js 15',
          heading:'What’s New in Next.js 15: A Complete Guide to the Latest Features',
          description: 'Next.js 15 has arrived, bringing with it a host of exciting features, improvements, and optimizations that elevate the developer experience. Heres a comprehensive guide to whats new in Next.js 15 and how you can leverage these features in your projects.',
          date: '2024-11-28',
          imageUrl: '/images/next.jpg',
          alt: "Next.js 15",
        },
        {
          id: '2',
          title: 'Next.Js 15',
          heading:'How to Set Up Your Next.js 15 Project: A Beginner-Friendly Guide',
          description: 'Setting up a Next.js 15 project is incredibly simple and beginner-friendly! Start by installing Node.js and npm on your system, then use the command npx create-next-app@latest my-nextjs-app to create a new project. Navigate into the project directory using cd my-nextjs-app and start the development server with npm run dev to preview your app at http://localhost:3000. Next.js 15 comes with a well-structured default setup, including optimized routes, server components, and support for modern tools like TypeScript. Whether youre building a blog, portfolio, or complex web application, this framework has everything you need to kickstart your development journey!',
          date: '2024-11-28',
          imageUrl: '/images/next.jpg',
          alt: "Next.js 15",
    
        },
        {
          id: '3',
          title: 'Next.js 15',
          heading:'Mastering Dynamic and Nested Routing in Next.js 15',
          description: 'Dynamic and nested routing in Next.js 15 empowers developers to create sophisticated and scalable applications effortlessly. With dynamic routes, you can handle paths with variables, like posts/[id], enabling you to render content dynamically based on the URL. Nested routing, on the other hand, allows you to build complex layouts by nesting pages within each other, enhancing code organization and reusability. Together, these features make Next.js 15 an excellent choice for building interactive and user-friendly web applications. Understanding and leveraging these routing techniques will take your Next.js skills to the next level!',
          date: '2024-11-28',
          imageUrl: '/images/next.jpg',
          alt: "Next.js 15",
    
        },
        {
          id: '4',
          title: 'Next.Js 15',
          heading:'Exploring Data Fetching Techniques in Next.js 15',
          description: 'Data fetching is a cornerstone of modern web applications, and Next.js 15 offers a variety of techniques to handle it efficiently. Whether you need data at build time, runtime, or for static pages, Next.js provides tools like getStaticProps for static generation, getServerSideProps for server-side rendering, and getStaticPaths for dynamic routing. Additionally, the introduction of React Server Components in Next.js 15 allows seamless integration of server-side logic directly into your components. These features enable developers to optimize performance and deliver personalized, high-performing web experiences effortlessly.',
          date: '2024-11-28',
          imageUrl: '/images/next.jpg',
          alt: "Next.js 15",
    
        },
        {
        
        
          id: '5',
          title: 'Next.Js 15',
          heading:'Leveraging Middleware in Next.js 15 for Smarter Applications',
    
          description: 'Middleware in Next.js 15 is a powerful tool that enables you to execute custom logic at the edge, before a request is completed. This allows you to modify responses, handle authentication, or serve localized content without adding unnecessary load to your server. With improved support in Next.js 15, middleware is faster, more flexible, and capable of delivering smarter applications that cater to diverse user needs. By using middleware effectively, you can enhance performance, improve security, and provide a personalized experience for your users—all at lightning-fast speeds.',
          date: '2024-11-28',
          imageUrl: '/images/next.jpg',
          alt: "Next.js 15",
    
        },
        {
          id: '6',
          title: 'Next.Js 15',
          heading:'10 Proven Tips to Optimize Your Next.js 15 Applications for Performance',
          description: 'To optimize your Next.js 15 application for performance, start by using Static Site Generation (SSG) with getStaticProps for pre-rendering static pages and Incremental Static Regeneration (ISR) to update static content without rebuilding the entire site. Optimize images with the built-in <Image /> component, enabling resizing and modern formats like WebP. For dynamic content, use Server-Side Rendering (SSR) with getServerSideProps to ensure up-to-date content. Implement code splitting with next/dynamic to load only the necessary JavaScript for each page, and deploy your app on a CDN for faster delivery. Optimize web fonts with next/font for efficient font loading, minimize JavaScript and CSS bundles, and ensure API routes are efficient with serverless functions and caching. Finally, monitor performance using Next.js Analytics and consider using Edge Functions to reduce latency and improve response times. By incorporating these strategies, you’ll create a faster, more responsive, and scalable application.',
          date: '2024-11-28',
          imageUrl: '/images/next.jpg',
          alt: "Next.js 15",
    
        },
  // Your posts array

];

export default function Post({ params }: { params: Record<string, string> }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="h-screen flex items-center justify-center text-center font-bold text-5xl">
        404 Post not Found
      </h2>
    );
  }

  const renderParagraph = (description: string) => {
    return description.split('\n').map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          alt={post.alt}
          width={300}
          height={300}
          className="w-full h-auto rounded-lg mt-6"
        />
      )}

      <h1 className="text-2xl text-zinc-900 mt-6 font-bold">{post.heading}</h1>

      <div className="mt-8 text-lg text-slate-700">
        {renderParagraph(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}

