import { students } from '../../data';
import { courses } from '../../data';
import Course from '../Course/Course';
import CoursesList from '../CoursesList/CoursesList';
// import { Student } from "../Student/Student";
import { StudentsList } from '../StudentsList/StudentsList';

export function App() {
  // const student = students[0];
  return (
    <div>
      {/* <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <img src={student.avatar} alt={student.name} /> */}
      {/* <Student student={student} />
      <Student student={students[1]} /> */}
      {/* <StudentsList students={students} /> */}
      {/* <Course course={courses[0]} /> */}
      <CoursesList courses={courses} />
    </div>
  );
}
