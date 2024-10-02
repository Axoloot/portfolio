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
    src: require('./img/github.png'),
    link: 'https://github.com/Axoloot',
  },
  {
    name: 'linkedin',
    src: require('./img/linkedin.png'),
    link: 'https://linkedin.com/',
  },
  {
    name: 'malt',
    src: require('./img/malt.png'),
    link: 'https://malt.fr/',
  },
  {
    name: 'fiverr',
    src: require('./img/fiverr.jpg'),
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

  const showButton: boolean =
    (email[0] && firstname[0] && lastname[0] && body[0]) === '';

  const toastId = useRef<Id | null>(null);
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

  const sendMessage = useCallback(async () => {
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
    });

    if (response.ok) {
      update('Email sent successfully!', 'success');
    } else {
      update('Error sending email', 'error');
    }
    isSending(false);
  }, [email, firstname, lastname, body]);

  return (
    <ContactWrapper>
      <h1>Let&apos;s Connect</h1>
      <ContactBox>
        <NameWrapper>
          <Input
            type="text"
            placeholder="Firstname"
            onChange={e => {
              firstname[1](e.currentTarget.value);
            }}
          />
          <Input
            type="text"
            placeholder="Lastname"
            onChange={e => {
              lastname[1](e.currentTarget.value);
            }}
          />
        </NameWrapper>
        <Input
          type="email"
          placeholder="Email"
          onChange={e => {
            email[1](e.currentTarget.value);
          }}
        />
        <InputText
          placeholder="Content"
          onChange={e => {
            body[1](e.currentTarget.value);
          }}
        />
        <SubmitButton
          disabled={showButton || sending}
          ref={buttonRef}
          onClick={sendMessage}
          // onKeyDown={e => {
          //   if (e.key === 'Enter') {
          //     sendMessage();
          //   }
          // }}
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
            <MediaIcon src={m.src} />
          </Link>
        ))}
      </MediasWrapper>
      <ToastContainer position="bottom-right" theme="dark" hideProgressBar />
    </ContactWrapper>
  );
};

export default Contact;
