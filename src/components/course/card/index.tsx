const Card = ({
    header,
    title,
    description,
    parts,
    href

}: {
    header: string;
    title: string;
    description: string;
    parts: { title: string, text: string }[];
    href: string;
}) => {
    return (
        <div>
            <h1>Card</h1>
        </div>
    )
}


export default Card;