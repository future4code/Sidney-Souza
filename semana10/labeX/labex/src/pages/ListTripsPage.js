import React from 'react'
import TripCard from "../componentes/TripCard"
import useRequestData from "../componentes/useRequestdata"
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinator"
import { useHistory } from 'react-router-dom'


const ListTripsPage = () => {
    const [tripsData] = useRequestData("/trips", {})
    const history = useHistory()

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <TripCard key={t.id} trip={t} />
    })

    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
            </div>
            <h1>Lista de Viagens</h1>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
        </div>
    )
}

export default ListTripsPage