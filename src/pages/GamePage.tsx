import { Link } from "react-router-dom"
import { ROUTE_BOOK_CARD, ROUTE_FLIP_CARD } from "../constants/constants"

export const GamePage = () => {
  return (
    <div>
      <Link to={ROUTE_FLIP_CARD}>Link cards</Link>
      <br />
      <Link to={ROUTE_BOOK_CARD}>Book cards</Link>
    </div>
  )
}