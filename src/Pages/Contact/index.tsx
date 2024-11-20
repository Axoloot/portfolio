import { Link } from 'react-router-dom';
import { Id, ToastContainer, TypeOptions, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useCallback, useRef, useState } from 'react';

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
import './toast.css';

const Medias = [
  {
    name: 'github',
    src: require('../../Static/contacts/github.png'),
    link: 'https://github.com/Axoloot',
  },
  {
    name: 'linkedin',
    src: require('../../Static/contacts/linkedin.png'),
    link: 'https://fr.linkedin.com/in/cyrildelajudie?trk=people-guest_people_search-card',
  },
  {
    name: 'malt',
    src: require('../../Static/contacts/malt.png'),
    link: 'https://www.malt.fr/profile/cyrildelajudie1',
  },
  {
    name: 'fiverr',
    src: require('../../Static/contacts/fiverr.jpg'),
    link: 'https://fiverr.com/cyrildl',
  },
];

const mailerUrl =
  process.env.MAILER_URL ||
  'https://sdov96ntca.execute-api.eu-west-1.amazonaws.com/Mailer';

const Contact = () => {
  const { t } = useTranslation();
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
        update(t('toast.success'), 'success');
      } else {
        update(t('toast.fail'), 'error');
      }
      resetForm();
      isSending(false);
    },
    [email, firstname, lastname, body, resetForm, t]
  );

  return (
    <ContactWrapper>
      <h1>{t('contact.title')}</h1>
      <ContactBox onSubmit={sendMessage}>
        <NameWrapper>
          <Input
            type="text"
            placeholder={t('contact.firstname')}
            value={firstname[0]}
            onChange={e => {
              firstname[1](e.currentTarget.value);
            }}
          />
          <Input
            type="text"
            placeholder={t('contact.lastname')}
            value={lastname[0]}
            onChange={e => {
              lastname[1](e.currentTarget.value);
            }}
          />
        </NameWrapper>
        <Input
          type="email"
          placeholder={t('contact.email')}
          value={email[0]}
          onChange={e => {
            email[1](e.currentTarget.value);
          }}
        />
        <InputText
          placeholder={t('contact.message')}
          value={body[0]}
          onChange={e => {
            body[1](e.currentTarget.value);
          }}
        />
        <SubmitButton disabled={showButton || sending} type="submit">
          {t('contact.send')}
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
