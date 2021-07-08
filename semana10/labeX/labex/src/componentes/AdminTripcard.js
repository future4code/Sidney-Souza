import React from "react"
import { useHistory } from 'react-router-dom'
import { goToTripDetailsPage } from "../routes/coordinator"
import { deleteTrip } from "../services/requests"


const AdminTripCard = (props) => {
    const { id, name, getTrips } = props
    const history = useHistory()

    const onClickDelete = (e) => {
        e.stopPropagation()
        if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {
            deleteTrip(id, getTrips)
        }
    }

    return (
        <div onClick={() => goToTripDetailsPage(history, id)}>
            <p>{name}</p>
            <button onClick={onClickDelete}/>
        </div>
    )
}

export default AdminTripCard