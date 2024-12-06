import React from 'react'
//
const Feature = () => {
  return (
    <div className=''>
      <section className='max-w-7xl mx-auto py-8 bg-neutral-100 mb-40 mt-10'>
        <h1 className='text-center text-3xl font-bold font-mono md:text-4xl  animate-fade-in-up  transition-all duration-500 ease-out transform hover:translate-y-[-5px] hover:text-black text-red-600'>
          Ali Asghar : Navigating the secrets of Technology in Tech Chronicles Blog
        </h1>
        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
          Joín Ali Asghar as she delves into the dynamic world of web developer&apos;s journey. From foundational concepts to advanced techniques, this blog is packed with insights, tutorials, and tips to empower aspiring developers in crafting stunning and functional websites. Explore, learn, and elevate your web developer journey!
        </p>
        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-red-500 animate-color-change '>Exploring our Categories</h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Artificial Intelligence",
              "Html",
              "Virtual Reality",
              "Next Js",
              "Web Development",
            ].map((category, index) => (
              <div key={index} className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer flex items-center justify-center text-neutral-600'>
                <p className='text-center text-lg font-semibold'>{category}</p>
                <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg  transition duration-300 ease-in-out gap-2'></div>
              </div>
            ))}
          </div>
        </div>
        <p className='text-sm font-mono md:text-base text-black mb-6 px-6 animate-fade-in-down delay-100 mt-10'>
          Dive into a diverse range of categories, where you&apos;ll discover a wealth of knowledge and insights tailored to your interests. Each category features carefully curated blogs that explore the latest trends, innovative technologies, and essential skills in the world of web development and beyond. Whether you&apos;re a budding developer, an experienced tech enthusiast, or simply curious about the digital landscape, there&apos;s something here for everyone. Explore the categories below and expand your understanding of the dynamic tech frontier.
        </p>
      </section>
    </div>
  )
}

export default Feature
