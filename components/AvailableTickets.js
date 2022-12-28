import styles from './Tickets.module.css'

export default function AvailableTickets(ticketData) {
    
    const { act, ticketCount, venue, price } = ticketData
    const ticketElements = (
        <div className={styles.ticket} key='TODO'>
            <h3>{act}</h3>
            <p>Playing at {venue}</p>
            <p>Price: {price}</p>
        </div>
    )
    // const ticketElements = new Array(ticketCount).fill().map(() => (
    //     <div className={styles.ticket} key='TODO'>
    //         <h3>{act}</h3>
    //         <p>Playing at {venue}</p>
    //         <p>Price: {price}</p>
    //     </div>
    // ))
    
    return (
        <div className={styles.ticketsContainer}>
            {ticketElements}
        </div>
    )
}