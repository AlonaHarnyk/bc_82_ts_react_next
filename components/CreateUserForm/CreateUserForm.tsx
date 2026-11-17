'use client';
import { useUserStore } from '@/stores/userStore';
import css from './CreateUserForm.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '@/lib/api/usersApi';
import { useRouter } from 'next/navigation';

export default function CreateUserForm() {
  const { userDraft: draft, setUserDraft, clearUserDraft } = useUserStore();

  const queryClient = useQueryClient();

  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      clearUserDraft();
      router.push('/users/filter/all');
    },
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setUserDraft({ ...draft, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    mutate(draft);
  };

  console.log(draft);

  return (
    <form action={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={draft.name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          value={draft.email}
          onChange={handleChange}
        />
      </label>
      <button>Create user</button>
    </form>
  );
}
