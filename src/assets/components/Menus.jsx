
const Menus = () => {


  let links = ["Fresh", "Today's Deals", "Mobiles", "Gift Cards", "Women Clothing", "Kids Clothing", "Health", "Pet corner", "Books", "Beauty", "Kitchen", "Bed Room", "Sport", "Bags"];

  return (
    <div className="h-auto w-full bg-gray-200 flex justify-between">
      {links.map((linkItem) => <div>{linkItem}</div>)}

    </div>
  )
}


export default Menus;