import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_DATA =[
  {id :"p1" , price : 6 ,title : "My First Book" , description:'This is a first product - amazing!' },
  {id :"p2" , price : 5 ,title : "My Second Book" , description:'This is a Second product - amazing!' },
  {id :"p3" , price : 4 ,title : "My Third Book" , description:'This is a Third product - amazing!' },
  {id :"p4" , price : 3 ,title : "My 4 Book" , description:'This is a 4 product - amazing!' },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(data =><ProductItem 
        key={data.id}
        id={data.id}
          title={data.title}
          price={data.price}
          description={data.description}
        />)}

      </ul>
    </section>
  );
};

export default Products;
