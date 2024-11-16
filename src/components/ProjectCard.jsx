

function ProjectCard({ isRight }) {
    let card_layout = '';
    if (isRight === true) {
        card_layout = "flex-row-reverse";
    } else {
        card_layout = "";
    }
    return <div className={"flex mt-12 ml-12 " + card_layout}>
        <div className="shadow w-1/5 aspect-square bg-slate-600 mt-3"></div>
        <div className="w-[2px] h-[80%] bg-black rounded-lg ml-7 mr-7"></div>
        <div className="flex flex-col">
            <span className="text-xl font-semibold">File Sharing App</span>
            <span className="text-sm mt-4 text-slate-400">Simple file sharing application for pc </span>
        </div>
    </div>
}


export default ProjectCard;