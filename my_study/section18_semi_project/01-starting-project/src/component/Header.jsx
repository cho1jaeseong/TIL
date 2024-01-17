import classes from './Header.module.css';
export default function Header(){
    
    return (<>
    <div className={classes.boss}>
    <div className={classes.logobox}  >
        <div className= {classes.logo} >
        <img src='./logo.jpg'/>
        </div>
        <h2>REACTFOOD</h2>
    </div>
    <div>
        <button>Cart</button>
    </div>
    </div>
    </>)
}