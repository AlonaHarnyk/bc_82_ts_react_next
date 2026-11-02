import { useMutation, useQueryClient } from "@tanstack/react-query";
import type Contact from "../../types/contacts";
import Button from "../Button/Button";
import { deleteContact } from "../../services/contactsApi";

interface ContactsListProps {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
  });

  return (
    <ul>
      {contacts.map(({ name, email, id }) => {
        return (
          <li key={id}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <Button
              textContent="delete contact"
              handleClick={() => {
                mutate(id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
