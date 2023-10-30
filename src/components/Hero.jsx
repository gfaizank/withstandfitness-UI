import React from 'react';
import videoBg from '../assets/herovideo.mp4';
import { FaChevronDown } from 'react-icons/fa';


const rainbowTextStyle = {
  background: 'linear-gradient(to right, green , yellow)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const Main = () => {
  return (
    <div className='main relative' >
      <video
        className="w-full h-screen object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='flex flex-grow mx-auto'>
        <h3 className='mt-20 text-center text-4xl md:text-6xl font-sans font-extrabold absolute top-1/4 left-0 w-full' style={rainbowTextStyle}>We are</h3>
        <h1 className="mt-20 text-center text-4xl md:text-6xl font-extrabold absolute top-1/3 left-0 w-full" style={rainbowTextStyle}>
          Withstand Fitness
        </h1>
      </div>

      <div className="mt-0 absolute top-2/3 left-0 w-full h-1/2 bg-black bg-opacity-85 flex flex-col justify-start items-center" > 
        <p className="text-white text-center mt-2 font-bold">Lets Conquer your limits</p>

        <button
  className="bg-red-100 text-red-400 font-bold py-2 px-4 rounded-full mt-5"
  onClick={() => {
    const targetElement = document.getElementById('scrollTarget');
    if (targetElement) {
      const yOffset = targetElement.getBoundingClientRect().top;
      const scrollY = window.scrollY;
      const targetY = scrollY + yOffset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }}
>
  Explore GymPass
</button>


        <FaChevronDown className="text-white mt-5 mx-auto"/>

        <p className='text-gray-300 text-center mt-10 font-bold'>Gym Pass Memberships</p>

        <div className="flex flex-col mt-5">
          <div className="card bg-gray-400 mt-2 rounded-lg ">
            <img src="https://media.gettyimages.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=gi&k=20&c=-udh0-LUuB1Mr1rF7D4nbuaUOJ_x6JvZCYoLdfOJF3w="
              alt="Card 1" className="rounded-full w-12 h-12 mt-1 ml-3" />
            <h3 className="text-white font-bold mt-2 ml-1 bg-gray-400">Gympass Elite</h3>
            <p className="text-gray-100 mt-2 ml-1 mb-3 bg-gray-400">Unlimited access to gym classes</p>
          </div>
          <div className="card bg-gray-400 mt-4 rounded-lg">
            <img src="https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0=" alt="Card 2" className="rounded-full w-12 h-12 mt-1 ml-3" />
            <h3 className="text-white font-bold mt-2 ml-1 bg-gray-400">Gympass Pro</h3>
            <p className="text-gray-100 mt-2 ml-1 mb-3 bg-gray-400">Unlimited access to Pro gyms</p>
          </div>
          <div id="scrollTarget" className="card bg-gray-400 mt-4 rounded-lg">
            <img src="https://hips.hearstapps.com/hmg-prod/images/home-workout-lead-1584370797.jpg" alt="Card 3" className="rounded-full w-12 h-12 mt-1 ml-3" />
            <h3 className="text-white font-bold mt-2 ml-1 bg-gray-400">Gympass Home</h3>
            <p className="text-gray-100 mt-2 ml-1 mb-3 bg-gray-400">Unlimited access to home workouts</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Main;


// import React from 'react';
// import videoBg from '../assets/herovideo.mp4';
// import { FaChevronDown } from 'react-icons/fa';

// const rainbowTextStyle = {
//   background: 'linear-gradient(to right, green , yellow)',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
// };

// const Main = () => {
//   return (
//     <div className='main relative'>
//       <video
//         className="w-full h-screen object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src={videoBg} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className='flex flex-grow mx-auto'>
//   <h3 className='mt-20 text-center text-4xl md:text-6xl font-sans font-extrabold absolute top-1/4 left-0 w-full' style={rainbowTextStyle}>We are</h3>
//   <h1 className="mt-20 text-center text-4xl md:text-6xl font-extrabold absolute top-1/3 left-0 w-full" style={rainbowTextStyle}>
//   Withstand Fitness
//   </h1>
// </div>
      
// <div className="mt-0 absolute top-2/3 left-0 w-full h-1/2 bg-black bg-opacity-85 flex flex-col justify-start items-center">
//   <p className="text-white text-center mt-2 font-bold">Lets Conquer your limits</p>

//   <button className="bg-red-100 text-red-400 font-bold py-2 px-4 rounded-full mt-5">
//     Explore GymPass
//   </button>

//   <FaChevronDown className="text-white mt-5 mx-auto" />
  
//   <p className='text-gray-300 text-center mt-10 font-bold'>Gym Pass Memberships</p>

//   <div className="flex flex-col mt-5">

//     <div className="card bg-gray-400 mt-2 rounded-lg ">
//       <img src="https://media.gettyimages.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=gi&k=20&c=-udh0-LUuB1Mr1rF7D4nbuaUOJ_x6JvZCYoLdfOJF3w="
//        alt="Card 1" className="rounded-full w-12 h-12 mt-1 ml-3" />
//       <h3 className="text-white font-bold mt-2 ml-1 bg-gray-400">Gympass Elite</h3>
//       <p className="text-gray-100 mt-2 ml-1 mb-3 bg-gray-400">Unlimited access to gym classes</p>
//     </div>
//     <div className="card bg-gray-400 mt-4 rounded-lg">
//       <img src="https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0=" alt="Card 2" className="rounded-full w-12 h-12 mt-1 ml-3" />
//       <h3 className="text-white font-bold mt-2 ml-1 bg-gray-400">Gympass Pro</h3>
//       <p className="text-gray-100 mt-2 ml-1 mb-3 bg-gray-400">Unlimited access to Pro gyms</p>
//     </div>
//     <div className="card bg-gray-400 mt-4 rounded-lg">
//       <img src="https://hips.hearstapps.com/hmg-prod/images/home-workout-lead-1584370797.jpg" alt="Card 3" className="rounded-full w-12 h-12 mt-1 ml-3" />
//       <h3 className="text-white font-bold mt-2 ml-1 bg-gray-400">Gympass Home</h3>
//       <p className="text-gray-100 mt-2 ml-1 mb-3 bg-gray-400">Unlimited access to home workouts</p>
//     </div>
//   </div>
// </div>
// <div className=" h-20" />
//     </div>
//   );
// }

// export default Main;









{/* <div className="absolute top-1/4 left-0 w-full h-screen flex items-center justify-center bg-opacity-50 bg-black">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold">We are Withstand Fitness</h1>
          <p className="text-lg md:text-xl mt-4">Let's Conquer your limits</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
          >
            Explore Gym Pass
          </button>
        </div>
      </div> */}
// import React from 'react';
// import videoBg from '../assets/herovideo.mp4';

// const Main = () => {
//   return (
//     <div className='main'>
//       <div className="overlay"></div>
//       <video
//         className="w-full h-screen object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src={videoBg} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
//          <div className="text-white text-center">
//            <h1 className="text-4xl md:text-6xl font-bold">We are Withstand Fitness</h1>
//            <p className="text-lg md:text-xl mt-4">Lets Conquer your limits</p>
//            <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
//           >
//             Explore Gym Pass
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;




// import React from 'react';
// import Video from '../assets/herovideo.mp4'

// const Hero = () => {
//     const handlePlay = () => {
//         const video = document.getElementById('heroVideo');
//         video.play();
//     }
//     return (
//     <div className="relative">
//       <video
//         id="heroVideo"
//         className="w-full h-screen object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source
//           src={Video}
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
//         <div className="text-white text-center">
//           <h1 className="text-4xl md:text-6xl font-bold">We are Withstand Fitness</h1>
//           <p className="text-lg md:text-xl mt-4">Lets Conquer your limits</p>
//           <button
//             onClick={handlePlay}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
//           >
//             Play Video
//           </button>
//         </div>
//       </div>
//     </div>
//     );
// }

// export default Hero;
