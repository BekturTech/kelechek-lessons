// $(function () {
//     const block = $(".block");
  
//     block.before("<h1>Hello World!</h1>");
//   });


//   $(function () {
//     const block = $(".block");
  
//     block.before("<h1>Hello World!</h1>");
  
//     block.after("<p>Lorem ipsum dolores</p>");
//   });


// $(function () {
//     const block = $(".block");
  
//     block.before("<h1>Hello World!</h1>");
  
//     block.after("<p>Lorem ipsum dolores</p>");
  
//     block.append("<h2>Hello from JS</h2>");
//   });


// $(function () {
//     const block = $(".block");
  
//     block.before("<h1>Hello World!</h1>");
  
//     block.after("<p>Lorem ipsum dolores</p>");
  
//     block.append("<h2>Hello from JS</h2>");
  
//     block.prepend("<p>Inserted with prepend");
//   });



// $(function () {
//     const paragraph = $("p");
//     const div = $("div");
  
//     const paragraphCopy = paragraph.clone();
  
//     div.append(paragraphCopy);
//   });


// $(function(){

//     const myParagraph = $('p');
    
//     myParagraph.hide(2000, showHide);
    
//     myParagraph.show(2000, showDispay);
    
    
//     function showHide() {
    
//     console.log('Я скрыл абзац!');
    
//     }
    
//     function showDispay() {
    
//     console.log('Я показал абзац!');
    
//     }
    
//     });


$(function () {
    const block = $(".block-2");
  
    block.fadeOut(3000);
  
    block.fadeIn();
  });