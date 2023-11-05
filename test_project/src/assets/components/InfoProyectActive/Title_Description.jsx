function Title_Description({titulo, description}) {
    return(
    <div>
        <h1 className="flex flex-row flex-wrap font-primary font-bold mt-4 text-3xl lg:p-2 lg:mt-0 lg:text-4xl">{titulo}</h1>
        <p className="font-primary text-lg py-2 lg:p-2">{description}</p>
    </div>
    )
}

export default Title_Description;