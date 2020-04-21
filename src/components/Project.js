import React, { useRef, useState , useEffect}from 'react';
import ProjectDisplay from './ProjectDisplay';
import ProjectDescription from './ProjectDescription';

function useHover()
{
    const ref = useRef();
    const [hovered, setHovered] = useState(false)

    const enter = () => setHovered(true)
    const exit = () => setHovered(false)

    useEffect(() => {
        ref.current.addEventListener('mouseenter', enter)
        ref.current.addEventListener('mouseleave', exit)
        return () => {
            ref.current.removeEventListener('mouseenter', enter)
            ref.current.removeEventListener('mouseleave', exit)
        }
    }, [ref])

    return [ref, hovered]
}

export default function Project(props)
{
    const [ref, hovered] = useHover()

    return(
        <div className="project-container border" ref={ref}>
            <ProjectDisplay
                gifPath = {props.gifPath}
                projectName = {props.projectName}
            />
            {hovered && <ProjectDescription
                projectName={props.projectName}
                description={props.description}
                sourceURL={props.sourceURL}
            />
            }
        </div>
    )
}