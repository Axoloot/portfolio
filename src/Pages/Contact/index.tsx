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
    src: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
    link: 'https://github.com/Axoloot',
  },
  {
    name: 'linkedin',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s',
    link: 'https://linkedin.com/',
  },
  {
    name: 'malt',
    src: 'https://play-lh.googleusercontent.com/pCYfqB1v-c9Phmvjxji_v37Lf1l59fg1pIy17PztwmS2yoRvGtNAgHZlOHQf0AQo_MZv',
    link: 'https://malt.fr/',
  },
  {
    name: 'fiverr',
    src: 'https://yt3.googleusercontent.com/ytc/AIdro_kiQwVU8j67tMT26ffYxhkkmK2GsyC_0EUVUu7XbDZH4v8p=s900-c-k-c0x00ffffff-no-rj',
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
      <h1>Contact</h1>
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
