const ComputerOutPutComponent = ({ StartingText }) => {
  return (
    <div className="bg-black bg-opacity-70 w-[80%] h-32 text-2xl lg:w-[60%] lg:h-[20%] lg:text-4xl m-auto my-10 rounded-2xl text-white flex justify-center items-center border border-white" >
      <h1>{StartingText}</h1>
    </div>
  );
};
export default ComputerOutPutComponent;
