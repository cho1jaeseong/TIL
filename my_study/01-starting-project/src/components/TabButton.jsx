export default function TabButton({ label ,isSelected,...props}) {
    return(
    <li>
        <button className={isSelected ? "active" :""} {...props} >{label}</button>
    </li>
    );
}