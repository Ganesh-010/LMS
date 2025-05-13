import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || '$'; // Fallback currency
 const navigate = useNavigate()

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Fetch all courses 
  const fetchAllCourses = async () => {
    try {
      setIsLoading(true);
      // Simulate API fetch delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setAllCourses(dummyCourses);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
      setError("Failed to load courses. Please try again later.");
      setAllCourses([]); // Ensure empty array on error
    } finally {
      setIsLoading(false);
    }
  };
 // Function to calculate avergae rating 
 const calculateRating = (course) => {
  if(course.courseRatings.length === 0){
    return 0 ;
  }
  let totalRating = 0;
  course.courseRatings.forEach((rating) => {
    totalRating += rating.rating;
  });
  return (totalRating / course.courseRatings.length).toFixed(1);
 }

// function to calculate course chapter time
const calculateChapterTime = (chapter) => {
  let time = 0
  chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
  return humanizeDuration(time *60 * 1000, {units :["h","m"] })
}

//function to calculate course duration
const calculateCourseDuration = (course) => {
let time =0 

course.courseContent.map((chapter) => chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration))
return humanizeDuration(time *60 * 1000, {units :["h","m"] })
}


//function to No of Lectures in the course
const calculateNoOfLectures = (course) => {
  let totalLectures = 0
  course.courseContent.forEach(chapter => { 
    if(Array.isArray(chapter.chapterContent)){
      totalLectures += chapter.chapterContent.length
    }
  });
  return totalLectures;
}

//fetch User Enrolled Courses
const fetchUserEnrolledCourses = async () => {
  setEnrolledCourses(dummyCourses)
}



  // Fetch courses on component mount
  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses()
  }, []);

  const value = {
    currency,
    allCourses,
    isLoading,
    error,
    navigate,
    calculateRating, 
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateNoOfLectures,
    calculateCourseDuration,
    enrolledCourses,
    
    fetchUserEnrolledCourses,
    refreshCourses: fetchAllCourses // Provide refresh capability
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

