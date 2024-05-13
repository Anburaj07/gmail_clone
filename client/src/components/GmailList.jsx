import Gmail from "./Gmail";

const GmailList = ({ data,setGmailId }) => {
  return (
    <div>
      {data?.map((el) => (
        <Gmail key={el._id} {...el} setGmailId={setGmailId}/>
      ))}
    </div>
  );
};

export default GmailList;
