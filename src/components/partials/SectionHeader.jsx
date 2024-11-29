export default function SectionHeader({ title, styleClass = "justify-center", align = "text-center" }) {
    return (
        <div className={align}>
            <h1 className="font-semibold text-4xl mb-4">{title}</h1>
            <div className={`flex ${styleClass}  gap-1 mt-2 mb-5`}>
                <span className="w-3 h-1 bg-base-light"></span>
                <span className="w-10 h-1 bg-base"></span>
                <span className="w-3 h-1 bg-base-light"></span>
            </div>
        </div>
    );
}
