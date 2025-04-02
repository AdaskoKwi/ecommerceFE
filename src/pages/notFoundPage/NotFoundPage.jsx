import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className={"page-not-found"}>
            <h1>❌ Nie znaleziono strony ❌</h1>
            <Link to={'/'}>
                <button>Wróć na stronę główną</button>
            </Link>
        </div>
    )
}
export default NotFoundPage