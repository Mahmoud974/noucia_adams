import { useState } from "react"
import { Ticket, ticketsData} from '../assets/database';


const Card = () => {
     const [dataTicket] = useState<Ticket[]>(ticketsData)

     
  return (
      <>
      {
        dataTicket.map(ticket => <div key={ticket.id} className="max-w-sm  text-black border border-gray-200 rounded-xl shadow bg-amber-400 ">
     <img className="rounded-t-lg" src={ticket.img} alt="" />
    <div className="p-5">
        
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {ticket.title}
    </h2>
    <p className="mb-3 font-normal text-white">{ticket.text}</p>

    </div>
</div>)
      }

      </>
  )
}

export default Card