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
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const email = useState('');
  const firstname = useState('');
  const lastname = useState('');
  const body = useState('');

  const showButton = useCallback(() => {
    return email[0] && firstname[0] && lastname[0] && body[0];
  }, [email, firstname, lastname, body]);

  const sendMessage = useCallback(async () => {
    console.log(email, firstname, lastname, body);

    // Prepare the data to send in the request body
    const data = {
      email,
      firstname,
      lastname,
      body,
    };

    try {
      // Send a POST request to the Lambda URL
      const response = await fetch(
        'https://abnlib6tn4zgjvzsfcd4ndrfae0ywyma.lambda-url.eu-west-1.on.aws/',
        {
          method: 'POST', // Use POST as we are sending data
          headers: {
            'Content-Type': 'application/json', // Sending JSON
          },
          body: JSON.stringify(data), // Convert the data to JSON format
        }
      );

      // Handle the response from Lambda
      const result = await response.json();
      console.log('Response from Lambda:', result);

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        console.error('Error sending email:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
          ref={buttonRef}
          style={{ opacity: showButton() ? 1 : 0 }}
          onClick={sendMessage}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        >
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
