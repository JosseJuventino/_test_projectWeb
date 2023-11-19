import TagProject from "../InscriptionProject/TagProject";
function Title_Description({titulo, description, hasTag}) {
    return(
    <div>
        <h1 className="flex flex-row flex-wrap font-primary font-bold mt-4 text-3xl lg:p-2 lg:mt-0 lg:text-4xl">{titulo}</h1>
        {hasTag ? <div className="tags flex flex-row flex-wrap gap-1 mb-2">
          <TagProject name="Contaduria publica" background="#27954C" />
          <TagProject name="Admin. empresas" background="#8349FF" />
          <TagProject name="Contaduria publica" background="#27954C" />
        </div> : null}
        <p className="font-primary text-lg py-2 lg:p-2">{description}</p>
    </div>
    )
}

export default Title_Description;