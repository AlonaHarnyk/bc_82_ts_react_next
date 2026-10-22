import type { IStudent } from "../../types";
import { Student } from "../Student/Student";

interface StudentsListProps {
  students: IStudent[];
}

export function StudentsList({ students }: StudentsListProps) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          <Student student={student} />
        </li>
      ))}
    </ul>
  );
}
