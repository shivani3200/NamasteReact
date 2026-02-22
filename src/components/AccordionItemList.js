import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constant";

const AccordionItemList = ({ items }) => {
  console.log("AccordionItemList items:", items); // Debugging log to check the structure of items

  const dispatch = useDispatch();

  const handleClick = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };

  return (
    <div className="p-4">
      {items.map((item,index) => (
        <div key={`${item.card.info.id}-${index}`}>
          <div className="flex justify-between  border-b-2 p-4 m-2 shadow-lg rounded-lg bg-white">
            <div className="flex flex-col align-top">
              <span className="font-bold text-blue-700">
                {item.card.info.name}
              </span>
              <span className="font-light text-slate-700">
                ₹{item.card.info.price / 100}
              </span>
              <span className="text-slate-500 text-xs">
                {item.card.info.description}
              </span>
            </div>
            <div className="relative">
              <img
                src={IMG_CDN_URL + item.card.info.imageId}
                className="w-full h-20 object-cover rounded-lg"
              />
              <button
                className="absolute text-green-500 border border-green-500 p-1 bg-white rounded-lg shadow-lg left-1/2 -bottom-3 transform -translate-x-1/2 hover:bg-green-500 hover:text-white  transition-colors duration-200"
                onClick={() => handleClick(item)}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AccordionItemList;
