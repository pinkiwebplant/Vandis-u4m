


const accordionItemHeaders = document.querySelectorAll(".u4m-accordion .accordions .items .title");

const firstAccordionItem = document.querySelector(".u4m-accordion .accordions .items .title");
if (firstAccordionItem) {
  const firstAccordionBody = firstAccordionItem.nextElementSibling;
  firstAccordionItem.classList.add("active");
  firstAccordionItem.closest(".items").classList.add("active");
  firstAccordionBody.style.maxHeight = firstAccordionBody.scrollHeight + "px";
}

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {


    accordionItemHeaders.forEach(itemHeader => {
      const accordionItemBody = itemHeader.nextElementSibling;
      const parentItem = itemHeader.closest(".items");
      if (itemHeader !== accordionItemHeader) {
        itemHeader.classList.remove("active");
        parentItem.classList.remove("active"); 
        accordionItemBody.style.maxHeight = 0; 
      }
    });


    const parentItem = accordionItemHeader.closest(".accordions .items");
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    parentItem.classList.toggle("active"); 
    accordionItemHeader.classList.toggle("active");

    if (parentItem.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0; 
    }
  });
});