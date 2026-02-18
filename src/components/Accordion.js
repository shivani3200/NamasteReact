import AccordionItemList from "./AccordionItemList";

const Accordion = ({ data }) => {
  // console.log("Accordion data:", data); // Debugging log to check the structure of data 

  return (
    <div>
      {/* Accordion Header */}
      <div className="items-center p-4 mx-auto my-4 shadow-lg bg-white rounded-lg">

        <div className="flex justify-between  font-bold text-lg  cursor-pointer">
          <span>
            {data?.title}({data?.itemCards?.length})
          </span>
          <span>⌄</span>
        </div>
        {/* Accordion body */}
        <AccordionItemList items={data?.itemCards} />
      </div>
    </div>
  )

}

export default Accordion;