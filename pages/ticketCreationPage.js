import Head from "next/head"
import styles from "../styles/Form.module.css"
import AvailableTickets from "../components/AvailableTickets"
import { useState } from "react"

export default function ticketCreationPage() {
    const [isTicketsCreated, setIsTicketsCreated] = useState(false)
    const [ticketData, setTicketData] = useState({})

    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        act: event.target.act.value,
        ticketCount: event.target.ticketCount.value,
        venue: event.target.venue.value,
        price: event.target.price.value
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/ticketCreationForm'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      setIsTicketsCreated(true)
      setTicketData(result)
      alert(`Is this your full name: ${result.data}`)
    }
    return (
        <>
            <Head>
                <title>Stan</title>
                <meta name="description" content="the decentralized ticketing solution" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* // We pass the event to the handleSubmit() function on submit. */}
            <form onSubmit={handleSubmit} className={styles.thirteen}>
                <label htmlFor="act">Act Name</label>
                <input className={styles.formItem} type="text" id="act" name="act" required />

                <label htmlFor="venue">Venue</label>
                <input className={styles.formItem} type="text" id="venue" name="venue" required />
        
                <label htmlFor="ticketCount">Ticket Count</label>
                <input className={styles.formItem} type="number" id="ticketCount" name="ticketCount" required />
                
                <label htmlFor="price">Price</label>
                <input className={styles.formItem} type="text" id="price" name="price" required />
        
                <button className={styles.btn} type="submit">Submit</button>
            </form>
            {isTicketsCreated &&
                <AvailableTickets ticketData={ticketData}/>
            }
        </>
    )
}