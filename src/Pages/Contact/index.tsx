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
import { useCallback, useState } from 'react';
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

const Contact = () => {
  const Email = useState('');
  const FirstName = useState('');
  const Name = useState('');
  const Body = useState('');

  const showButton = useCallback(() => {
    return Email[0] && FirstName[0] && Name[0] && Body[0];
  }, [Email, FirstName, Name, Body]);

  return (
    <ContactWrapper>
      <h1>Let&apos;s Connect</h1>
      <ContactBox>
        <NameWrapper>
          <Input
            type="text"
            placeholder="Prénom"
            onChange={e => {
              FirstName[1](e.currentTarget.value);
            }}
          />
          <Input
            type="text"
            placeholder="Nom"
            onChange={e => {
              Name[1](e.currentTarget.value);
            }}
          />
        </NameWrapper>
        <Input
          type="email"
          placeholder="Email"
          onChange={e => {
            Email[1](e.currentTarget.value);
          }}
        />
        <InputText
          placeholder="Contenu"
          onChange={e => {
            Body[1](e.currentTarget.value);
          }}
        />
        <SubmitButton style={{ opacity: showButton() ? 1 : 0 }}>
          Envoyer
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
    </ContactWrapper>
  );
};

export default Contact;
