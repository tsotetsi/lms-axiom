import React, { useReducer } from "react";
import axios from "axios";
import CourseContext from "./courseContext";
import courseReducer from "./courseReducer";
import {
  GET_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "../../types";

const CourseState = (props) => {
  const initialState = {
    courses: [
      {
        id: 1,
        user: "Jim",
        image: "jim's image",
        title: "This is a title for Jim",
        description: "This is the description for Jim",
        students: 1,
        content: "Here is some content from Jim",
      },
      {
        id: 2,
        user: "Lily",
        image: "lily's image",
        title: "This is a title for Lily",
        description: "This is the description for Lily",
        students: 2,
        content: "Here is some content from Lily",
      },
      {
        id: 3,
        user: "Mark",
        image: "mark's image",
        title: "This is a title for Mark",
        description: "This is the description for Mark",
        students: 3,
        content: "Here is some content from Mark",
      },
    ],
  };

  const [state, dispatch] = useReducer(courseReducer, initialState);

  //   get courses
  const getAllCourses = () => {
    console.log("get courses");
  };

  // get user's joined courses
  const getJoinedCourses = () => {
    console.log("joined courses");
  };

  // get user's created courses
  const getCreatedCourses = () => {
    console.log("created courses");
  };

  //   add course
  const addCourse = () => {
    console.log("add courses");
  };

  // update course
  const updateCourse = () => {
    console.log("update courses");
  };

  //  delete course
  const deleteCourse = () => {
    console.log("delete courses");
  };

  //  set current course

  //  clear current course

  //  filter courses

  // clear filter

  return (
    <CourseContext.Provider
      value={{
        courses: state.courses,
        getAllCourses,
        getJoinedCourses,
        getCreatedCourses,
        addCourse,
        updateCourse,
        deleteCourse,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;