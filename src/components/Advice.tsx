interface Props {
  message: string;
  title: string;
}

const Advice = ({ title, message }: Props) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{message}</p>
    </>
  );
};

export default Advice;
