import css from "./Student.module.css";

import type { IStudent } from "../../types";

interface StudentProps {
  student: IStudent;
}

export function Student({
  student: { name, age, course, avatar, isOnline },
}: StudentProps) {
  return (
    <>
      <h3 className={css.nameTitle}>{name}</h3>
      <p className={css.studentAge}>Age: {age}</p>
      <p className={css.course}>Course: {course}</p>
      <img className={css.studentImage} src={avatar} alt={name} />
      <p className={isOnline ? css.online : css.offline}>
        Is online: {isOnline ? "yes" : "no"}
      </p>
      {/* {isOnline && <p className={css.isOnlineText}>Is online: Yes</p>} */}
    </>
  );
}
