import { Fragment } from "react"

export default function Timeline({events}){
    return (
        <div className='flex flex-col gap-y-3 w-full pb-20 mt-50 items-center'>
            <h2 className="text-4xl mb-2">Upcoming events</h2>
            <Circle/>
            {events.map((event, key) => {
                return <Fragment key={key}>
                    <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                        {event.direction === 'left' ? (
                            <EventCard 
                                heading={event.heading} 
                                subHeading={event.subHeading} 
                                date={event.date}/>
                        ) : (
                            <div></div>
                        )
                        }

                        <Pillar/>

                        {event.direction === 'right' ? (
                            <EventCard 
                                heading={event.heading} 
                                subHeading={event.subHeading}
                                date={event.date}/>
                        ) : (
                            <div></div>
                        )
                        }
                    </div>
                    {key < (events.length - 1) && <Circle/>}
                </Fragment>

            })}
            <Circle/>
        </div>
    )
}
const Circle = () => {
    return (
    <div className= 'rounded-full w-4 h-4 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-800 mx-auto' >
    </div>
    )
}
const Pillar = () => {
    return (
    <div className= 'rounded-t-full rounded-b-full h-40 w-2 bg-gradient-to-b from-blue-500 to-indigo-700 mx-auto' >
    </div>
    )
}
const EventCard = ({heading, subHeading, date}) => {
    return (
    <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl flex flex-col gap-y-2 border shadow-md shadow-blue-600 rounded-xl p-4 bg-blue-200 w-100 sm:w-80 md:w-96'>
        <div className=' text-blue-500 font-bold text-lg border-b'>{heading}</div>
        <div className="text-sm text-gray-800 my-0">{date}</div>
        <div className= 'text-sm text-gray-600'> {subHeading}</div>
    </div>
    )
}