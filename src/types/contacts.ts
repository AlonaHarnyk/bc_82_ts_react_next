export default interface Contact {
  createdAt: string;
  name: string;
  number: string;
  hasWork: boolean; //radio
  city: string;
  job: string;
  hobbies: string[]; // checkbox
  email: string;
  sex: string; // select
  birthDay: string; // none
  description: string;
  id: string;
}
