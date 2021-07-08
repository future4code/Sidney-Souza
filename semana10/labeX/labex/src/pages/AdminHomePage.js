import React from 'react'
import useProtectedPage from "../componentes/useUnprotectedPage"
import { useHistory } from 'react-router-dom'
import { goToCreateTripPage, goToHomePage } from "../routes/coordinator";
import { logout } from "../services/requests"
import useRequestData from "../componentes/useRequestdata"
import AdminTripCard from "../componentes/AdminTripcard";



const AdminHomePage = () => {
    useProtectedPage()
    const history = useHistory()
    const [tripsData, getTrips] = useRequestData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <AdminTripCard key={t.id} name={t.name} id={t.id} getTrips={getTrips} />
    })

    return (
        <div>
            <h1>Painel Administrativo</h1>
            <div>
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
                <button onClick={() => logout(history)}>Logout</button>
            </div>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Caregando...</p>}
        </div>
    )
}

export default AdminHomePage