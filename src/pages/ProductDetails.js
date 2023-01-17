import { useParams, Link } from "react-router-dom"

const ProductDetails = (props) => {
	const params = useParams()

	return (
		<>
			<h1>Product details.</h1>
			<p>{params.title}</p>
			<button>
				<Link to='..' relative='path'>
					Back
				</Link>
			</button>
		</>
	)
}

export default ProductDetails
