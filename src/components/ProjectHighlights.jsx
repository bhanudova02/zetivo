import { LuBadgeCheck } from "react-icons/lu"
import { projectHighlightsData } from "../lib/data"
export function ProjectHighlights() {
    return (
        <div className="my-5 md:my-7">
            <div className="py-8 md:py-10">
                <div className="space-y-1">
                    <h2 className="text-[#E85A71] font-semibold text text-xl">Highlighted Projects</h2>
                    <h1 className="font-semibold md:font-bold text-2xl md:text-3xl">
                        What I've been working on
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
                    {projectHighlightsData.map((data, index) =>
                        <div key={index}>
                            <div className="px-6 py-4 shadow-md shadow-gray-400 rounded-md">
                                <h2 className="font-semibold text-xl">{data.projectName}</h2>
                                <p className="mt-2 mb-4 text-gray-500 text-base">{data.projectDescription}</p>
                                <div className="flex gap-2 items-center font-semibold">
                                    <LuBadgeCheck className="text-[#E85A71]"/>
                                    {data.technologiesUsed.map((languages, index) =>
                                        <span key={index}>{languages}</span>
                                    )}
                                </div>
                                <button onClick={()=>window.open(data.projectLink, "_blank")} className="bg-[#E85A71] text-white px-3 py-2 rounded-md mt-2">View</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}