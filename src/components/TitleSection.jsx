const TitleSection = ({text, style}) => {
    return (
        <div className="h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center flex-col ">
            <h2 className="text-[30px] sm:text-[35px] md:text-[50px] lg:text-[65px] font-[Itim] px-8 text-center font-bold w-[73%]" style={style}>{text[0]}</h2>
            <h2 className="text-[30px] sm:text-[35px] md:text-[50px] lg:text-[65px] font-[Itim] px-8 text-center font-bold w-[73%]" style={style}>{text[1]}</h2>
        </div>
    );
};

export default TitleSection;