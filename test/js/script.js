let user = {
    name: "John",
    age: 20,
    isMarried: false,
    skills: {
      html: "good",
      css: "excellent",
      js: "beginner",
    },
  };
  
  for (let key in user) {
    if (typeof user[key] === "object") {
      for (let subKey in user[key]) {
        document.write(subKey + ": " + user[key][subKey] + "<br>");
      }
    } else {
      document.write(key + ": " + user[key] + "<br>");
    }
  }

  console.log(user)