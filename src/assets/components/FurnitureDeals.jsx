import ProductItemInfo from "./ProductItemInfo";
import Title from "./Title";

const FurnitureDeals = () => {

  let items = [1, 2, 3, 4, 5]


  return (
    <section className="review h-auto w-full border-2">
      <Title text={"Deals on furniture"} />
      <div className="flex justify-between">
        {items.map((item) => {
          return <div key={item} className="furniture-item">
            <ProductItemInfo id={item} />
          </div>
        })}


      </div>
    </section>
  )
}


export default FurnitureDeals;