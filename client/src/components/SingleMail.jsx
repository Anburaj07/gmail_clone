import {
  useEditGmailMutation,
  useGetGmailByIdQuery,
} from "../redux/slices/gmailApi";
import dpPic from "../../images/dp.png";

const SingleMail = ({ id }) => {
  const { data, isLoading, isSuccess } = useGetGmailByIdQuery(id);
  const [editGmail] = useEditGmailMutation();

  const handleStarred = () => {
    editGmail({
      id: _id,
      from,
      to,
      category,
      subject,
      content,
      date,
      starred: !starred,
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center m-auto h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  const { _id, from, to, subject, category, content, date, starred } = data;

  return (
    <div>
      <h2 className="text-xl font-medium pl-32">{subject}</h2>
      <div className="flex m-auto w-[93%]  justify-between mt-8 ">
        <div className="flex  w-[37%]  justify-around  ">
          <div className="flex w-[70%] justify-between items-center ">
            <div className="w-[15%]">
              <img className="rounded-full" src={dpPic} alt="" />
            </div>
            <div className="w-[85%] ">
              <div className="flex">
                <h2 className="text-md font-semibold">{from}</h2>
                <h2 className="text-md ">
                  {"<@"} {from}
                  {">"}
                </h2>
              </div>
              <h2 className="text-md">to {!to ? "me" : to}</h2>
            </div>
          </div>
          <h2 className="text-md font-semibold text-[#1a73e8]">Unsubscribe</h2>
        </div>
        <div className="flex w-[10%] justify-between items-center ">
          <h2 className="text-md ">{date}</h2>
          <button className="font-bold text-xl" onClick={handleStarred}>
            {starred ? "⭐" : "☆"}
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-medium text-center mt-16">{content}</h2>
      </div>
      <div className="flex w-[15%] justify-between mt-60 ml-16">
        <button className="text-md border border-gray-800 rounded-full p-2"> ⬅️ Reply </button>
        <button className="text-md border border-gray-800 rounded-full p-2"> ➡️ Forward </button>
      </div>
    </div>
  );
};

export default SingleMail;
