import { Link } from "react-router-dom";
const PRODUCT=[
    {id:"p1",title:"Product1"},
    {id:"p2",title:"Product2"},
    {id:"p3",title:"Product3"},
]


export default function ProductHompage(){
    return <>
    <h1>Product</h1>
    <ul>
        {PRODUCT.map(product=> <li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li> )}
    </ul>
    </>

}