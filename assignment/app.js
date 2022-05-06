
const commentContainer = document.querySelector("#commentContainer");

const createElement = (elementType = "div", properties, ...children) => {
  const element = document.createElement(elementType);
  for (let key in properties) {
    element[key] = properties[key];
  }

  children.forEach((child) => element.appendChild(child));
  return element;
};

const createComment = (name, text, settings) => {
  text = text.replaceAll("\n", "<br>");
  const p1 = createElement("span", { textContent: name  , className: "text-bold name"  });
  const p2 = createElement("span", { innerHTML: text , className: "comment-text" ,id:"c" });
  const p3=createElement("span",{textContent:" : "})
  p1.contentEditable=true
  p2.contentEditable=true
 //p2.autocomplete = 'off'
  
 
  const buttons = [];
  buttons.push(createElement("button", { textContent: "+", className: "btn btn-primary small reply" }));
  if (!settings?.hasNoDelete)
  buttons.push(createElement("button", { textContent: "-", className: "btn btn-primary small delete" }));
  
  const btnHolder = createElement("div", { className: "btn-holder" }, ...buttons);
  const expandbtn=createElement("button",{id:"btn", textContent:" ", className:"accordion-button "})
  const mainComment = createElement("div", { className: "main-comment caret  " }, p1,p3, p2, expandbtn,  btnHolder);
  const subComments = createElement("div", { className: "sub-comments nested" });

  return createElement("div", { className: "comment" }, mainComment, subComments);
 
};


  



const createCommentInput = () => {
  const propertyInput = createElement("input", { placeholder: "Property", className: "text-bold name " });
  const costInput = createElement("input", { placeholder: "Cost", className: "text-bold name ",id:"cost" });
 
  const postBtn = createElement("button", { textContent: "Add", className: "btn btn-primary small post " });
  const cancelBtn = createElement("button", { textContent: "Cancel", className: "btn btn-primary small cancel" });
  const btnHolder = createElement("div", { className: "btn-holder" }, postBtn, cancelBtn);

  const plusbtn=createElement("button",{textContent:"+",className:"btn btn-primary small reply plus"})
  const minusbtn=createElement("button",{textContent:"-"})

  return createElement("div", { className: "comment" },propertyInput,costInput,  btnHolder);
  
};

// const plusinput=()=>{
//   const propertyInput = createElement("input", { placeholder: "Property", className: "text-bold name " });
//   const costInput = createElement("input", { placeholder: "Cost", className: "text-bold name ",id:"cost" });
 
//   const postBtn = createElement("button", { textContent: "Add", className: "btn btn-primary small post " });
//   const cancelBtn = createElement("button", { textContent: "Cancel", className: "btn btn-primary small cancel" });
//   const btnHolder = createElement("div", { className: "btn-holder" }, postBtn, cancelBtn);

//   const plusbtn=createElement("button",{textContent:"+",className:"btn btn-primary small reply plus"})
//   const minusbtn=createElement("button",{textContent:"-"})

//   return createElement("div", { className: "comment" },propertyInput,costInput, plusbtn,minusbtn, btnHolder);
  
// }







const toggleNeighbours = (target) => {
  target.nextElementSibling.disabled = !target.nextElementSibling.disabled;
  target.previousElementSibling.disabled = !target.previousElementSibling.disabled;
};

const comment = createComment("Add Item", " ", { hasNoDelete: true, hasNoEdit: true });
commentContainer.appendChild(comment);

let isCommentOn = false;
commentContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName.toLowerCase() === "button") {
    if (target.classList.contains("reply") && !isCommentOn) {
      target.closest(".main-comment").nextElementSibling.appendChild(createCommentInput());
 
      isCommentOn = true;
      return;
    }



    if(target.classList.contains("plus")){
     
      const cost=document.getElementById('cost')
      cost.style.display="none"
      return 
    }
   
    if (target.classList.contains("delete")) {
      target.closest(".comment").remove();
      return;
    }

    if (target.classList.contains("cancel")) {
      target.closest(".comment").remove();
      isCommentOn = false;
      return;
    }

  if(target.classList.contains("accordion-button")){
    
    var toggler = document.getElementsByClassName("caret");
    var i;
    
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }





    if (target.classList.contains("post")) {
      const comment = target.closest(".comment");
      const name = comment.children[0].value;
      const text = comment.children[1].value;
   

      if (!name || !text) return;

      target.closest(".sub-comments").appendChild(createComment(name, text));
     
      
      comment.remove();
      isCommentOn = false;
      return;
    }
  }
});























