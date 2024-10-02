import { Link } from 'react-router-dom';
import {
  ContactWrapper,
  ContactBox,
  Input,
  InputText,
  MediaIcon,
  MediasWrapper,
  NameWrapper,
  SubmitButton,
} from './styles';
import { useCallback, useRef, useState } from 'react';
import { Id, ToastContainer, TypeOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Medias = [
  {
    name: 'github',
    src: require('../../Images/contacts/github.png'),
    link: 'https://github.com/Axoloot',
  },
  {
    name: 'linkedin',
    src: require('../../Images/contacts/linkedin.png'),
    link: 'https://linkedin.com/',
  },
  {
    name: 'malt',
    src: require('../../Images/contacts/malt.png'),
    link: 'https://malt.fr/',
  },
  {
    name: 'fiverr',
    src: require('../../Images/contacts/fiverr.jpg'),
    link: 'https://fiverr.com/',
  },
];

const mailerUrl =
  process.env.MAILER_URL ||
  'https://sdov96ntca.execute-api.eu-west-1.amazonaws.com/Mailer';

const Contact = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const email = useState('');
  const firstname = useState('');
  const lastname = useState('');
  const body = useState('');
  const [sending, isSending] = useState(false);
  const toastId = useRef<Id | null>(null);

  const showButton: boolean =
    (email[0] && firstname[0] && lastname[0] && body[0]) === '';

  const resetForm = useCallback(() => {
    email[1]('');
    firstname[1]('');
    lastname[1]('');
    body[1]('');
  }, [body, email, firstname, lastname]);

  const notify = () =>
    (toastId.current = toast('Sending mail', {
      type: 'info',
      isLoading: true,
    }));

  const update = (text: string, type: TypeOptions) =>
    toastId.current &&
    toast.update(toastId.current, {
      render: text,
      type,
      isLoading: false,
      autoClose: 2500,
    });

  const sendMessage = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      isSending(true);
      notify();
      const response = await fetch(mailerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstname,
          lastname,
          body,
        }),
        mode: 'cors',
        signal: AbortSignal.timeout(5000),
      });

      if (response.ok) {
        update('Email sent successfully!', 'success');
      } else {
        update('Error sending email', 'error');
      }
      resetForm();
      isSending(false);
    },
    [email, firstname, lastname, body, resetForm]
  );

  return (
    <ContactWrapper>
      <h1>Let&apos;s Connect</h1>
      <ContactBox onSubmit={sendMessage}>
        <NameWrapper>
          <Input
            type="text"
            placeholder="Firstname"
            value={firstname[0]}
            onChange={e => {
              firstname[1](e.currentTarget.value);
            }}
          />
          <Input
            type="text"
            placeholder="Lastname"
            value={lastname[0]}
            onChange={e => {
              lastname[1](e.currentTarget.value);
            }}
          />
        </NameWrapper>
        <Input
          type="email"
          placeholder="Email"
          value={email[0]}
          onChange={e => {
            email[1](e.currentTarget.value);
          }}
        />
        <InputText
          placeholder="Content"
          value={body[0]}
          onChange={e => {
            body[1](e.currentTarget.value);
          }}
        />
        <SubmitButton
          disabled={showButton || sending}
          ref={buttonRef}
          type="submit"
        >
          Send
        </SubmitButton>
      </ContactBox>
      <MediasWrapper>
        {Medias.map(m => (
          <Link
            key={m.name}
            target="_blank"
            rel="noopener noreferrer"
            to={m.link}
          >
            <MediaIcon src={m.src} alt={m.name} loading="lazy" />
          </Link>
        ))}
      </MediasWrapper>
      <ToastContainer position="bottom-right" theme="dark" hideProgressBar />
    </ContactWrapper>
  );
};

export default Contact;
