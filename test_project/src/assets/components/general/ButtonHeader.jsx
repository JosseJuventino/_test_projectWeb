function ButtonHeader ({text, image}){

    return(
        <>
            <a href="#" className="flex flex-row border-transparent border-4 transition-colors duration-500 ease-in-out  justify-between items-center bg-black-custom text-white px-6 py-2 rounded-full hover:bg-hover-black-custom hover:text-black hover:border-black-custom hover:border-4">
                <figure className="w-10">
                    <img className="rounded-full object-cover" src={image} alt="user_image" />
                </figure>
                <span className='mx-2'>{text}</span>
            </a>
        </>
    );
}

export default ButtonHeader