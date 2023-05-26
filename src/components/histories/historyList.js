import { Link } from "react-router-dom";

export default function HistoryList({ title, id }) {

    return (
        <div className="mb-2 div-historique">
            <Link className="text-decoration-none link-history" to={'/history/' + id}>
                <ul className="list-group">
                    <li className="list-group-item ">{title}</li>
                </ul>
            </Link>

        </div>

    )

}