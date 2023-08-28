const HtmlTag = ({ tag }: { tag: string }) => {

    const tagElements = tag.match(/(<)(\/?)(\w+)(>)/);

    return (
        <div>
            {tagElements?.slice(1).map(el => {
                return (
                    <span
                        className={`text-sm italic ${/\w/.test(el) ? "text-secondary-purple" : ""}`}
                    >
                        {el}
                    </span>
                )
            })}
        </div>
    )
}

export default HtmlTag;