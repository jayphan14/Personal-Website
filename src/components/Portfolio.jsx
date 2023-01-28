import React from 'react'
import portfolios from './portfoliosList'

const Portfolio = () => {
    
  
    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white ">

        <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-screen max-h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            {/* <p className="text-xl py-2">My projects generally serve 3 purposes</p>
            <div className='mx-auto px-10'>
                <p className="text-2xl py-1 bold mx-auto">1. Problem - Solution</p>
                <p className="text-2xl py-1 bold">2. Learning by Doing </p>
                <p className="text-2xl py-1 bold">3. Hobbies and Passions </p>
            </div> */}
            
          </div>
  
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0">
                {portfolios.map(({ id, src, title, description, link, }) => (
                    
                    <div key = {id} class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
                        <div>
                          <a href={link}>
                            <img class="rounded-t-lg" src={src} alt="" />
                          </a>
                        </div>
                        <div class="p-5">
                            <a href={link}>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                            </a>
                            <p class="mb-3 font-lg text-gray-700 dark:text-gray-400">{description}</p>
                            <a href={link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Learn more
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  