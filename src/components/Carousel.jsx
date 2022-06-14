// import React from 'react';
// // import Carousel from 'react-multi-carousel';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS/carousel.css";

// function carousel() {
//   return (
//     <div>
//         <Carousel
//         width='20%'
//         infiniteLoop="true"
//         autoPlay="true"
//         // centerMode="true"
//         interval="1000"
//         >
//                 <div>
//                     <img id='hello' src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>

//             {/* <Carousel>
//                 <div className='box'>
//                     <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
//                 </div>
//                 <div className='box'>
//                     <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
//                 </div>
//                 <div className='box'>
//                     <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
//                 </div>
//                 <div className='box'>
//                     <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
//                 </div>
//             </Carousel>; */}
//     </div>
//   )
// }

// export default carousel;



import Carousel from 'react-elastic-carousel';

function carousel(){

return(
<Carousel
>
  <div className="box">
    <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt='' />
  </div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
)
}

export default carousel;