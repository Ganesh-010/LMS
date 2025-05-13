import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const Coursecard = ({ course }) => {
  const { currency , calculateRating} = useContext(AppContext);

  // Early return if no course
  if (!course) return null;

  // Safely calculate discounted price
  const discountedPrice = course.coursePrice && course.discount
    ? (course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)
    : course.coursePrice?.toFixed(2) || '0.00';

  return (
    <div className="rounded-lg  h-80 shadow-md  hover:shadow-lg transition-shadow duration-300">
    
     <Link to={'/course/' + course._id} onClick={()=>scrollTo(0,0)} > 
     <div className='h-1/2 ' >
     <img src={course.courseThumbnail || assets.coursePlaceholder} // Fallback image
        alt={course.courseTitle || "Course thumbnail"}
        className=" w-full h-full object-cover"
        onError={(e) => {
          e.target.src = assets.coursePlaceholder; // Handle broken images
        }}
      />
      </div>
      <div className="mt-4 flex px-4 flex-col whitespace-nowrap overflow-hidden text-left w-full"> 
        <h3 className="text-lg font-semibold line-clamp-2">
          {course.courseTitle || 'Untitled Course'}
        </h3>
        <p className='text-gray-500'>GreatStack</p>
       

        <div className="flex items-center mt-2  space-x-1">
          <p className="text-yellow-600 font-medium">{calculateRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img 
                key={i} 
                src={Math.floor(calculateRating(course)) >= i + 1 ? assets.star : assets.star_blank } 
                alt="star" 
                className="w-4 h-4" 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">{course.courseRatings.length}</p>
        </div>

        <div className="mt-2 flex ">
        
          <p className="text-lg font-bold text-gray-800">
            {currency}
            {discountedPrice}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Coursecard;