import { useId } from 'react';

interface AddUserFormProps {
  onFormSummit: () => void;
}

export default function AddUserForm({ onFormSummit }: AddUserFormProps) {
  const id = useId();
  // function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log(data);
  //   event.currentTarget.reset();
  // }
  function handleSubmit(data: FormData) {
    console.log(data);
    onFormSummit();
  }
  return (
    //<form onSubmit={handleSubmit}>
    <form action={handleSubmit}>
      <label htmlFor={`${id}-username`}>Username</label>
      <input type="text" name="username" id={`${id}-username`} />
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" name="email" id={`${id}-email`} />
      <button>Submit</button>
    </form>
  );
}
