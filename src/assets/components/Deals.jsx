import Title from "./Title";

const Deals = ({text, itemsLimit}) => {
  let items = [1, 2, 3, 4, 5, 6]
  const slicedArray = items.slice(0, itemsLimit);


  return (
    <section className="review h-auto w-full border-2">
      <Title text={text} />
      <div className="flex gap-2">
        {slicedArray.map((item) => {
          return <div key={item} className="furniture-item">{item}</div>
        })}


      </div>
    </section>
  )
}


export default Deals;