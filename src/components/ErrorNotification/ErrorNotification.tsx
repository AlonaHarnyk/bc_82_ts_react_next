interface ErrorNotificationProps {
  message: string;
}

export default function ErrorNotification({ message }: ErrorNotificationProps) {
  return <p>{message}</p>;
}
