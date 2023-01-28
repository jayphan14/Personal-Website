import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Beyond the lines of codes
          </p>
        </div>

        <p className="text-xl mt-5">
          Anything related to my skills and education can be found on my resume to the left of your screen so I won't bore you with those. Instead, here are 4 weird facts about me: <br></br>
          <br></br>
          Weird Fact #1: My name is actually Bao Kha Phan, I picked "Jay" 5 mins into my first day of school here in Canada because no one can pronounce my name. Why Jay? I still don't know.
          <br></br>
          <br></br>
          Weird Fact #2: I was the shortest male athlete to compete in the Canada Summer Games. At the time, I was a 5'4 140lbs Winger for Prince Edward Island. We had an unfortunate run, tied and lost in close games against New Brunswick, Alberta, Novascotia and The Territories. Life changing experiences though. 
          My career aspiration is to incorperating data into sport analysis.
          <br></br>
          <br></br>
          Weird Fact #3: I spoke 4 languages, or at least I claimed to: English, Vietnamese, French and German. I've been to every continent except for Africa.
          <br></br>
          <br></br>
          Weird Fact #4: I almost went to a college in PEI to play College Soccer rather than attending the pretiguous University of Waterloo.
          <br></br>
          <br></br>
          Enough of these weird facts. I strongly believe that there is more to myself than Math or Programming, hope you have the chance to find out :)
        </p>
      </div>
    </div>
  );
};

export default About;