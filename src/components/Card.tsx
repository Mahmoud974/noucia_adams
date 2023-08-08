import { useState } from "react"
import { Ticket, ticketsData} from '../assets/database';


const Card = () => {
     const [dataTicket] = useState<Ticket[]>(ticketsData)

     
  return (
      <>
      {
        dataTicket.map(ticket => <div key={ticket.id} className="max-w-sm  text-black border border-gray-200 rounded-xl shadow bg-amber-400 w-[14rem] md:w-96 ">
     <img className="rounded-t-lg" src={ticket.img} alt="" />
    <div className="md:p-5 p-2">
        
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
        {ticket.title}
    </h2>
    <p className="md:mb-3 font-normal ">{ticket.text}</p>

    </div>
</div>)
      }

      </>
  )
}

export default Card