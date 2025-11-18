export default function SectionTitle({title, subTitle}) {
    return (
        <h2 className="pl-30 pb-10 text-black text-3xl">
            {title}
            <span className="text-zinc-500"> {subTitle}</span> 
        </h2>
    )
}