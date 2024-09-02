// window.addEventListener("load", function() {
//     const body = document.body;
//     const nav = document.createElement("nav");
//     const ul = document.createElement("ul");

//     const menuList = ["home", "about", "news", "contacts"];

//     // Добавляем nav в body
//     body.append(nav);
    
//     // Добавляем ul в nav
//     nav.append(ul);

//     // Создаем элементы списка и ссылки
//     menuList.forEach((item) => {
//         const li = document.createElement("li");
//         const a = document.createElement("a");

//         if (item === "home") {
//             a.setAttribute("href", "/");
//         } else {
//             a.setAttribute("href", `/${item}`);
//         }

//         a.textContent = item; // Устанавливаем текст ссылки
//         li.append(a); // Добавляем ссылку в элемент li
//         ul.append(li); // Добавляем элемент li в ul
//     });
// });



window.addEventListener("load", function() {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardTitle = document.createElement("h2");
  const cardPosition = document.createElement("p");
  const cardCompany = document.createElement("p");
  const socials = document.createElement("ul");
  const socialsLi = document.createElement("li");
  const socialsLinks = document.createElement("a");
  const cardBtn = document.createElement("button");

  document.body.append(card);
  card.append(img);
  img.setAttribute("src",
  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80");
  img.style.width = "150px";

  card.append(cardTitle);
  cardTitle.textContent = "Jon watson";
  card.append(cardPosition);
  cardPosition.textContent = "CEO & Founder";
  card.append(cardCompany);
  cardCompany.textContent = "Oxford university";
  card.append(socials);
  const socialItems = ["In", "Tw", "Dr", "Fb",]
  socialsLi.append(socialsLinks);
  
  socialItems.forEach((item) => {
    socials.append(socialsLi.cloneNode(true));
  });

  const socialLinks = document.querySelectorAll("a");

  for (let i = 0; i < socialLinks.length; i++) {
    socialLinks[i].textContent = socialItems[i];
  }

  card.append(cardBtn);
  cardBtn.textContent = "Contact";
  cardBtn.setAttribute("hello", "window.location.href='hello.html'");
});