export default function FoodCard({ food, onClick }) {
    return (
      <div className="basis-1/3 p-4 hover:scale-105 flex flex-col justify-between transition-transform duration-300">
        <img className="w-full h-80 rounded-lg object-cover" src={`http://localhost:3000/${food.image}`} alt={food.name} />
        <div>
            <div className="flex justify-between">
          <h2>{food.name}</h2>
          <h5 className="font-bold">{food.price}$ </h5>
          </div>
          <h5>{food.description}</h5>
        </div>
        <button className="rounded-lg bg-sky-500 p-2 w-full" onClick={() => onClick([food.name, food.price])}>
          Add to Cart
        </button>
      </div>
    );
  }
  