import './Product.css'
function Product(props){

    console.log(props.prodObj.id)
    return(
        <div>
            <div className="card prodcard mb-5y">
                <img className="card-img-top p-3 prodimg" src={props.prodObj.image} alt="Product-1 Image" />
                <div className="card-body">
                    <h6 className="card-title">Name: {props.prodObj.title}</h6>
                    <h6 className=" mb-2">Category: {props.prodObj.category}</h6>
                    <h6 className="mb-2">Price: {props.prodObj.price}</h6>
                </div>
            </div>
        </div>
    )
}

export default Product