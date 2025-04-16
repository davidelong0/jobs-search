
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.companies)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className="mt-4">Aziende Preferite</h2>

      {favourites.length === 0 ? (
        <p>Nessuna azienda nei preferiti</p>
      ) : (
        <ul>
          {favourites.map((company, i) => (
            <li key={i}>
              <Link to={`/${company}`}>{company}</Link>
              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: company })
                }
                className="btn btn-sm btn-outline-danger mx-2"
              >
                Rimuovi
              </button>
            </li>
          ))}
        </ul>
      )}
       <Link to="/" className="btn btn-secondary mb-3">
        🔙 Torna alla ricerca
      </Link>

    </div>
  )
}

export default Favourites
