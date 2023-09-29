import Link from "next/link";

function ClientPage() { 

    const clients = [
        { 
            id : "max",
            name : "Maxumiliam"
        },
        {
            id: "manu",
            name : "Manuel"
        },
        {
            id: "reda",
            name : "Reda Kriate"
        },
        {
            id: "abdou",
            name :  "Abdellah Moutawakkil"
        }
    ]
    return ( 
        <div>
            <h1>The clients page</h1>
            <ul>
            {clients.map(client =>  <li key={client.id}>
                    <Link href={`/clients/${client.id}`}>{client.name }</Link>
                    </li>
                )}
            </ul>
            
        </div>
    )
}

export default ClientPage;