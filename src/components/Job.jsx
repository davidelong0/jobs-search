import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Job = ({ data }) => {
 
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favourites.companies)


  const toggleFavourite = () => {
    if (favourites.includes(data.company_name)) {
      dispatch({
        type: 'REMOVE_FROM_FAVOURITES',
        payload: data.company_name,
      })
    } else {
      dispatch({
        type: 'ADD_TO_FAVOURITES',
        payload: data.company_name,
      })
    }
  }

  const isFavourite = favourites.includes(data.company_name)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3} className="d-flex justify-content-end">
      
        <Button
          variant={isFavourite ? 'danger' : 'primary'}
          onClick={toggleFavourite}
        >
          {isFavourite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
        </Button>
      </Col>
    </Row>
  )
}

export default Job
