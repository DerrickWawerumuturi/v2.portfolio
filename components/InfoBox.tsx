import React from 'react'

interface InfoBoxProps {
    name?: string,
    university?: string,
    startDate?: string,
    endDate?: string,
    course?: string,
    link?: string,
    role?: string,
}

const InfoBox = (
    {
        name,
        university,
        startDate,
        endDate,
        course,
        link,
        role,
    }: InfoBoxProps) => {
    return (
        <div className={"flex flex-col gap-3 text-white"}>
            <div className={"flex flex-col gap-1"}>
                <h2 className={"font-bold text-lg"}>{name ? name : university}
                    <span className={"text-violet-300 flex space-x-2"}>
                        @
                        <a href={link}>{name ? name : university}</a>
                    </span>
                </h2>
            </div>
        </div>
    )
}
export default InfoBox
