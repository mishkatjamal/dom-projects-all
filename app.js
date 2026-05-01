
fetch("https://randomuser.me/api/?results=5")
.then((raw) => raw.json())
.then((data)=>{
    // console.log(data.results);
    
    let main =document.querySelector("#main")
    data.results.forEach((elem) => {
        
        // Card container
const card = document.createElement("div");
card.className = "w-72 bg-white rounded-2xl shadow-lg p-5 text-center";

// Image
const img = document.createElement("img");
img.src = elem.picture.large;
img.alt = "User Photo";
img.className = "w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500";

// Name
const name = document.createElement("h2");
name.className = "mt-4 text-xl font-bold text-gray-800";
name.textContent = elem.name.first +" "+ elem.name.last;

// Email
const email = document.createElement("p");
email.className = "mt-1 text-sm text-gray-500";
email.textContent = elem.email;

// Gender
const gender = document.createElement("div");
gender.className = "mt-4 inline-block px-4 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full";
gender.textContent = elem.gender;

// Append sab kuch card me
card.appendChild(img);
card.appendChild(name);
card.appendChild(email);
card.appendChild(gender);

// Root me card add karo
main.appendChild(card);
        
    });
})
.catch((err)=>{

})