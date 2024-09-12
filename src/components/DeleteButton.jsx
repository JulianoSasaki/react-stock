import PropTypes from "prop-types";
import useStock from "../hooks/useStock";
import { useNavigate } from "react-router-dom";

DeleteButton.propTypes = {
    itemId: PropTypes.number,
    itemName: PropTypes.string.isRequired
}

export default function DeleteButton({ itemName, itemId }) {
    const { removeItem } = useStock()
    const navigate = useNavigate()

    const handleDelete = () => {
        if (confirm(`Tem certeza que deseja excluir o ${itemName}?`)) {
            removeItem(itemId)
            navigate("/items")
        }
    }

    return (
        <button className="button is-danger is-small" onClick={handleDelete}>Excluir</button>
    )
}