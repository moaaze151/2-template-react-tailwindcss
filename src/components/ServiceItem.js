export default function ServiceItem({icon,title,text}) {
    return (
        <div className="flex flex-col lg:flex-row mb-14 lg:mb-8 text-center lg:text-left">
            <div className="mb-4  md:mr-6 lg:mr-12">
                <i className={`${icon} text-4xl  m-color`}></i>
            </div>
            <div className="">
                <h3 className="text-xl font-semibold mb-2 m-color">{title}</h3>
                <p className="text-md text-gray-700 md-full  lg:w-96">{text}</p>
            </div>
            
        </div>
    )
} 
