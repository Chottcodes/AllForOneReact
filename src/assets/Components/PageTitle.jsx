
const PageTitle = ({Title}) => {
    return (
        
        <div className="w-[100%] flex flex-col justify-center items-center gap-5 mt-5 ">
            <h1 className="text-white text-[30px] lg:text-[70px] tracking-[0.5em]">{Title}</h1>
            <hr className="w-[90%]  m-auto" />
        </div>
    )
}
export default PageTitle;