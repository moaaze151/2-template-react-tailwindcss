export default function Heading({title,text,active}) {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800">{title}</h2>
            {active && <hr className="mt-2 mb-4 w-32 mx-auto h-0 h-line"/>}
            <p className="text-md text-gray-500 mx-auto md-full md:w-96 max-w-96">{text}</p>
        </div>
    )
}
