//     // import React, { useState } from 'react'
//     // import { HashLink } from 'react-router-hash-link';

//     // const NavFooter = () => {
        
//     //     const [clicked, setClicked] = useState(false);

//     //     const handleClick = () => {
//     //         setClicked(!clicked);
//     //     };
        
    
//     // return (
//     //     <footer>
            
//     //             <div className="navfooter">
//     //             <HashLink to="/#section1" className={`nav-link ${clicked ? 'special-link' : ''}`} onClick={handleClick} >
//     //                     <button className="nav-button">A Casually Mad Career</button>
//     //                 </HashLink>
                    
//     //                 <HashLink to = {"/#section2"} className="nav-link" >
//     //                     <button className="nav-button">Inside MADBOX</button>
//     //                 </HashLink>

//     //                 <HashLink to = {"/#section3"} className="nav-link" >
//     //                     <button className="nav-button">Our Values</button>
//     //                 </HashLink>

//     //                 <HashLink to = {"/#section4"} className="nav-link" >
//     //                     <button className="nav-button">Power up with Benefits.</button>
//     //                 </HashLink>

//     //                 <HashLink to = {"/#section5"} className="nav-link" >
//     //                     <button className="nav-button">Our Story</button>
//     //                 </HashLink>

                
//     //             </div>
            
        
            
//     //     </footer>
//     // )
//     // }

//     // export default NavFooter

  


// import React, { useState } from 'react';
// import { HashLink } from 'react-router-hash-link';

// const NavFooter = () => {
//   const [clickedLink, setClickedLink] = useState(null);

//   const handleClick = (linkId) => {
//     setClickedLink(linkId);
//   };

//   const hashLinks = [
//     { id: 'section1', text: 'A Casually Mad Career' },
//     { id: 'section2', text: 'Inside MADBOX' },
//     { id: 'section3', text: 'Our Values' },
//     { id: 'section4', text: 'Power up with Benefits.' },
//     { id: 'section5', text: 'Our Story' },
//   ];

//   return (
//     <footer>
//       <div className="navfooter">
//         {hashLinks.map((link) => (
//           <HashLink
//             key={link.id}
//             to={`/#${link.id}`}
//             className={`nav-link ${
//               clickedLink === link.id ? 'special-link clicked' : 'special-link'
//             }`}
//             onClick={() => handleClick(link.id)}
//           >
//             <button className="nav-button">{link.text}</button>
//           </HashLink>
//         ))}
//       </div>
//     </footer>
//   );
// };

// export default NavFooter;


import React, { useState } from 'react';
import './navfooter.scss'
import { HashLink } from 'react-router-hash-link';

const NavFooter = () => {
  const [clickedLink, setClickedLink] = useState(null);

  const gradientColors = [
    'linear-gradient(to right, #FF3890, #FFBF04)',
    'linear-gradient(to right, #AB02FF, #5AC2FC)',
    'linear-gradient(to right, #02C3FD, #4EF29F)',
    'linear-gradient(to right, #F757A1, #8E74FF)',
    'linear-gradient(to right, #FF4CCA, #FF7326)',
  ];

  const handleClick = (linkId) => {
    setClickedLink(linkId);
  };

  const hashLinks = [
    { id: 'section1', text: 'A Casually Mad Career' },
    { id: 'section2', text: 'Inside MADBOX' },
    { id: 'section3', text: 'Our Values' },
    { id: 'section4', text: 'Power up with Benefits.' },
    { id: 'section5', text: 'Our Story' },
  ];

  return (
    <footer>
      <div className="navfooter">
        {hashLinks.map((link, index) => (
          <HashLink
          key={link.id}
          to={`/#${link.id}`}
          className={`nav-link ${
            clickedLink === link.id ? 'special-link clicked' : 'special-link'
          }`}
          onClick={() => handleClick(link.id)}
          style={{ '--gradient-color': gradientColors[index] }} 
        >
          <button className="nav-button">{link.text}</button>
        </HashLink>
        
        ))}
      </div>
    </footer>
  );
};

export default NavFooter;



