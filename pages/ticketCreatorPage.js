import Head from "next/head"
import styles from "../styles/Form.module.css"
import AvailableTickets from "../components/AvailableTickets"
import TicketCreator from "../components/TicketCreator"
import Nav from "../components/Nav"

export default function ticketCreationPage() {

    return (
        <>
            <Head>
                <title>Stan</title>
                <meta name="description" content="the decentralized ticketing solution" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <TicketCreator />
        </>
    )
}