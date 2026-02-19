import { useState } from "react";
import AccordionItemList from "./AccordionItemList";

const Accordion = ({ data ,showItems, setShowItems}) => {

  // const handleClick =() =>{
  //   setShowItems();
  // }


  // commenting out the state and click handler for now, as we are not implementing the accordion functionality here. We will lift state up, give the restaurant menu(parent)component the responsibility of managing which accordion is open, and pass down the necessary props to control the accordion's open/close state in the next step.

  // const [showItems, setShowItems] = useState(false);
  // console.log("Accordion data:", data); // Debugging log to check the structure of data
  // const handleAccordionClick =()=>{
  //   setShowItems(!showItems);
  // }

  return (
    <div>
      {/* Accordion Header */}
      <div className="items-center p-4 mx-auto my-4 shadow-lg bg-white rounded-lg">
        <div className="flex justify-between font-bold text-lg cursor-pointer"
        // onClick={handleAccordionClick}
        onClick = {setShowItems}
        >
          <span>
            {data?.title}({data?.itemCards?.length})
          </span>
          <span>⌄</span>
        </div>
        {/* Accordion body */}
        {showItems && <AccordionItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default Accordion;
