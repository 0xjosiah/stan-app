import { useEffect, useState } from 'react'
import styles from './Tickets.module.css'

export default function AvailableTickets({act, venue, price, ticketCount}) {
    // const [ticketData, setTicketData] = useState(null)
    // const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     fetch('../pages/api/ticketCreationForm')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setTicketData(data)
    //             setLoading(false)
    //         })
    // }, [])

    // const ticketElements = (
        //     <div className={styles.ticket} key='TODO'>
        //         <h3>{act}</h3>
        //         <p>Playing at {venue}</p>
        //         <p>Price: {price}</p>
        //     </div>
        // )
    // if (isLoading) return <p>Loading...</p>
    // if (!ticketData) return <p>No ticket data</p>
    
    const ticketElements = new Array(ticketCount).fill().map(() => {
        // const { act, ticketCount, venue, price } = ticketData
        return (
            <div className='' key='TODO'>
                <h3>{act}</h3>
                <p>Playing at {venue}</p>
                <p>Price: {price}</p>
            </div>
        )
    })

    return (
        <div className=''>
            {ticketElements}
        </div>
    )
}