import Gmail from "./Gmail";

const GmailList = ({ data }) => {
  return (
    <div>
      {data?.map((el) => (
        <Gmail key={el._id} {...el} />
      ))}
    </div>
  );
};

export default GmailList;
