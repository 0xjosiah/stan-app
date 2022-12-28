export default function AvailableTickets(ticketData) {
    const { act, ticketCount, venue, price } = ticketData
    const ticketElements = new Array(ticketCount).fill().map(() => (
        <div className={styles.ticket}>
            <h3>{act}</h3>
            <p>Playing at {venue}</p>
            <p>Price: {price}</p>
        </div>
    ))
    
    return (
        <>
            {ticketElements}
        </>
    )
}