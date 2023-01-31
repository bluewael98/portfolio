// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { useCallback } from 'react';

// const Patrticles = () => {
//     // particles settings
//     const particlesInit = useCallback(async engine => {
//       console.log(engine);
//       await loadFull(engine);
//     }, []);
//     const particlesLoaded = useCallback(async container => {
//       await console.log(container);
//   }, []);
  
//   return (
//     <div>
//       <Particles
// id="Patricles"
// init={particlesInit}
// loaded={particlesLoaded}
// options={{

//   fullScreen: {
//     enable: false,
//     zIndex: 20,
//   },

//     background: {
//         color: {
//             value: "#0d47a1",
//         },
        
//     },
//     fpsLimit: 120,
//     interactivity: {
//         events: {
//             onClick: {
//                 enable: false,
//                 mode: "push",
//             },
//             onHover: {
//                 enable: false,
//                 mode: "repulse",
//             },
//             resize: false,
//         },
//         modes: {
//             push: {
//                 quantity: 4,
//             },
//             repulse: {
//                 distance: 200,
//                 duration: 0.4,
//             },
//         },
//     },
//     particles: {
//         color: {
//             value: "#ffffff",
//         },
//         links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//         },
//         collisions: {
//             enable: true,
//         },
//         move: {
//             directions: "none",
//             enable: true,
//             outModes: {
//                 default: "bounce",
//             },
//             random: false,
//             speed: 1,
//             straight: false,
//         },
//         number: {
//             density: {
//                 enable: true,
//                 area: 800,
//             },
//             value: 50,
//         },
//         opacity: {
//             value: 0.3,
//         },
//         shape: {
//             type: "circle",
//         },
//         size: {
//             value: { min: 1, max: 5 },
//         },
//     },
//     detectRetina: true,
// }}
// />
      
//     </div>
//   )
// }

// export default Patrticles



