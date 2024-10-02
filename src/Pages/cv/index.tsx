const CV = () => {
  return (
    <iframe
      title="cv"
      src={require('../../Static/cv.pdf')}
      width="100%"
      height="100%"
      style={{ border: 'none' }}
    />
  );
};

export default CV;
