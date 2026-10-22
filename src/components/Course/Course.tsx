import type { ICourse } from '../../types';
import css from './Course.module.css';

interface CourseProps {
  course: ICourse;
}

export default function Course({ course }: CourseProps) {
  return (
    <>
      <h3 className={css.courseTitle}>{course.title}</h3>
      <p>Duration: {course.duration}</p>
      <p>Category: {course.category}</p>
      <p>Is Available: {course.isAvailable ? 'Yes' : 'No'} </p>
      <img src={course.image} alt={course.title} />
    </>
  );
}
