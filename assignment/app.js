// const commentContainer = document.querySelector("#commentContainer");

// const createElement = (elementType = "div", properties, ...children) => {
//   const element = document.createElement(elementType);
//   for (let key in properties) {
//     element[key] = properties[key];
//   }

//   children.forEach((child) => element.appendChild(child));
//   return element;
// };

// const createComment = (name, text, settings) => {
//   text = text.replaceAll("\n", "<br>");
//   const p1 = createElement("span", { textContent: name + ' : ', className: "text-bold name"  });
//   const p2 = createElement("span", { innerHTML: text, className: "comment-text" });
//   p1.contentEditable=true
//   p2.contentEditable=true
  
 
//   const buttons = [];
//   buttons.push(createElement("button", { textContent: "+", className: "btn btn-primary small reply" }));
//   if (!settings?.hasNoDelete)
//   buttons.push(createElement("button", { textContent: "-", className: "btn btn-primary small delete" }));
//   // buttons.push(createElement("button", { textContent: "-", className: "btn btn-primary small reply" }));
//   // if (!settings?.hasNoEdit)
//   //   buttons.push(createElement("button", { textContent: "Edit", className: "btn btn-primary small edit" }));
//   // if (!settings?.hasNoDelete)
//   //   buttons.push(createElement("button", { textContent: "Delete", className: "btn btn-primary small delete" }));

//   const btnHolder = createElement("div", { className: "btn-holder" }, ...buttons);

//   const expandbtn=createElement("button",{id:"btn", textContent:"Expand and collapse ", className:"accordion-button"})

//   // const expandbtn=createElement("button",{id:"btn", textContent:" ", className:"fa fa-caret-down"})

  
  
//   const mainComment = createElement("div", { className: "main-comment caret  " }, p1, p2, expandbtn,   btnHolder);
//   const subComments = createElement("div", { className: "sub-comments nested" });


//   return createElement("div", { className: "comment" }, mainComment, subComments);
 
// };

// // const btn=document.getElementById("btn")
// // btn.addEventListener('click',()=>{
// //   btn.textContent="collapse"
// // })
  



// const createCommentInput = () => {
//   const propertyInput = createElement("input", { placeholder: "Property", className: "text-bold name " });
//   const costInput = createElement("input", { placeholder: "Cost", className: "text-bold name " });
//   // const commentInput = createElement("textarea", {
//   //   placeholder: "comment",
//   //   className: "comment-text",
//   //   rows: 2,
//   //   cols: 30,
//   // });
  
//   const postBtn = createElement("button", { textContent: "Add", className: "btn btn-primary small post " });
//   const cancelBtn = createElement("button", { textContent: "Cancel", className: "btn btn-primary small cancel" });
//   const btnHolder = createElement("div", { className: "btn-holder" }, postBtn, cancelBtn);

//   return createElement("div", { className: "comment" },propertyInput,costInput, btnHolder);
  
// };

// const toggleNeighbours = (target) => {
//   target.nextElementSibling.disabled = !target.nextElementSibling.disabled;
//   target.previousElementSibling.disabled = !target.previousElementSibling.disabled;
// };

// const comment = createComment("Add Item", " ", { hasNoDelete: true, hasNoEdit: true });
// commentContainer.appendChild(comment);

// let isCommentOn = false;
// commentContainer.addEventListener("click", (e) => {
//   const target = e.target;
//   if (target.tagName.toLowerCase() === "button") {
//     if (target.classList.contains("reply") && !isCommentOn) {
//       target.closest(".main-comment").nextElementSibling.appendChild(createCommentInput());
//       isCommentOn = true;
//       return;
//     }

//     // if (target.classList.contains("edit")) {
//     //   target.textContent = "Save";
//     //   target.className = "btn btn-primary small save";
//     //   toggleNeighbours(target);
//     //   target.closest(".main-comment").children[1].contentEditable = true;
//     //   return;
//     // }

//     // if (target.classList.contains("save")) {
//     //   const commentText = target.closest(".main-comment").children[1];

//     //   if (!commentText.textContent) return;
//     //   target.textContent = "Edit";
//     //   target.className = "btn btn-primary small edit";

//     //   commentText.contentEditable = false;
//     //   toggleNeighbours(target);
//     //   return;
//     // }

//     if (target.classList.contains("delete")) {
//       target.closest(".comment").remove();
//       return;
//     }

//     if (target.classList.contains("cancel")) {
//       target.closest(".comment").remove();
//       isCommentOn = false;
//       return;
//     }

//   if(target.classList.contains("accordion-button")){
    
//     var toggler = document.getElementsByClassName("caret");
//     var i;
    
//     for (i = 0; i < toggler.length; i++) {
//       toggler[i].addEventListener("click", function() {
//         this.parentElement.querySelector(".nested").classList.toggle("active");
//         this.classList.toggle("caret-down");
//       });
//     }
//   }




// //   if(target.classList.contains("accordion-button")){
// //     const btn=document.getElementById("btn")
// //     var x = document.querySelector(".main-comment");
// // btn.addEventListener('click',()=>{
// //   btn.textContent="collapse"
// //   if (x.style.display === "none") {
// //     x.style.display = "block";
// //   } else {
// //     x.style.display = "none";
// //   }

// // })
// //   }

//     if (target.classList.contains("post")) {
//       const comment = target.closest(".comment");
//       const name = comment.children[0].value;
//       const text = comment.children[1].value;
   

//       if (!name || !text) return;

//       target.closest(".sub-comments").appendChild(createComment(name, text));
      
//       comment.remove();
//       isCommentOn = false;
//       return;
//     }
//   }
// });

























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
  const p2 = createElement("span", { innerHTML: text , className: "comment-text"  });
  const p3=createElement("span",{textContent:" : "})
  p1.contentEditable=true
  p2.contentEditable=true
  
 
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

  const plusbtn=createElement("button",{textContent:"+",className:"plus"})
  const minusbtn=createElement("button",{textContent:"-"})

  return createElement("div", { className: "comment" },propertyInput,costInput, btnHolder);
  
};







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
      return createElement("div", { className: "comment" }, mainComment, subComments);
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























