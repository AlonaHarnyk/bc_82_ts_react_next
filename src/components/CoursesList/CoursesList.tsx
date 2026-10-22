import type { ICourse } from '../../types';
import Course from '../Course/Course';

interface CoursesListProps {
  courses: ICourse[];
}

export default function CoursesList({ courses }: CoursesListProps) {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <Course course={course} />
        </li>
      ))}
    </ul>
  );
}
