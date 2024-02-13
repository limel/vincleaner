import styles from "./EmailTemplate.module.scss";
import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from "@react-email/components";

interface EmailProps {
  name: string;
  phone: string;
  messanger: string;
  vinCode?: string;
  message: string;
}

const EmailTemplate: React.FC<EmailProps> = (props: EmailProps) => {
  const { name, phone, messanger, vinCode, message } = props;
  const previewText = `Сообщение от ${name}`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body className={styles.email}>
        <Container className={styles.email__container}>
          <Heading>
            <strong>{name}</strong> оставил новую заявку!
          </Heading>
          <Hr />
          <Text>Имя: {name}</Text>
          <Hr />
          <Text>Телефон: {phone}</Text>
          <Hr />
          <Text>Мессенджер: {messanger}</Text>
          <Hr />
          {vinCode && <Text>VIN: {vinCode}</Text>}
          <Hr />
          <Text className={styles.email__content}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
