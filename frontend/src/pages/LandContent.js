function LandContent() {
    return (  
        <div className="container w-[full] flex m-32">
            <div className=" w-[50%] overflow-hidden ">
                <img className="w-[full] h-[full]" src="https://media.tenor.com/ivNVSogpSGQAAAAC/whisper-donald-duck.gif"></img>
            </div>
            <div className="w-[50%]">
                <h1 className="text-7xl">Hello <span className="text-purple-500">there</span></h1>
                <p className="my-10 text-3xl left" >Welcome to our Confession Platform – a safe space where you can express your thoughts, share your feelings, and confide in others without judgment. Our goal is to provide a supportive and anonymous environment where everyone can feel heard. 🤫💬</p>
            </div>
        </div>
     );
}

export default LandContent;