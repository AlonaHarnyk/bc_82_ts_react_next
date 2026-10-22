import css from "./Student.module.css";

import type { Student } from "../../types";

interface StudentProps {
  student: Student;
}

export function Student({ student }: StudentProps) {
  return (
    <>
      <h3 className={css.nameTitle}>{student.name}</h3>
      <p className={css.studentAge}>Age: {student.age}</p>
      <p className={css.course}>Course: {student.course}</p>
      <img
        className={css.studentImage}
        src={student.avatar}
        alt={student.name}
      />
      <p className={student.isOnline ? css.online : css.offline}>
        Is online: {student.isOnline ? "yes" : "no"}
      </p>
      {/* {student.isOnline && <p className={css.isOnlineText}>Is online: Yes</p>} */}
    </>
  );
}
