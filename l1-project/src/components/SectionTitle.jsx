export default function SectionTitle({title, subTitle}) {
    return (
        <h2 className="px-4 md:px-8 lg:px-30 pb-6 md:pb-10 text-theme-primary text-2xl md:text-3xl">
            {title}
            <span className="text-theme-secondary"> {subTitle}</span> 
        </h2>
    )
}