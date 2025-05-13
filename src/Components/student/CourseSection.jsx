import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Coursecard from './Coursecard';
import { AppContext } from '../../context/AppContext';

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  if (!allCourses) {
    return <div>Loading courses...</div>; // or return a spinner component
  }

  // Optional: Handle empty array case
  if (allCourses.length === 0) {
    return <div>No courses available</div>;
  }

  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">Learn from the best</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding
        and design to 
        <br/>business and wellness, our courses are crafted to deliver results
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {allCourses.slice(0, 4).map((course) => (
          <Coursecard key={course.id || course._id} course={course} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/course-list"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-block text-gray-500 border border-gray-500/30 px-10 py-3 rounded hover:bg-gray-50 transition-colors"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CourseSection; // Don't forget to export the component