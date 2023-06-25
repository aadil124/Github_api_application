const btnUser = document.querySelector("#getUser");
const showUserResult = document.querySelectorAll(".showUserData");
const btnRepo = document.querySelector("#getRepo");

btnUser.addEventListener("click", async () => {
  const inputValue = document.querySelector("input").value;
  showUserResult.innerHTML = `Loading data for ${inputValue}`;
  console.log(inputValue);
  try {
    let res = await fetch(`https://api.github.com/users/${inputValue}`);
    let userData = await res.json();
    // console.log(userData);
    displayUserData(userData);
  } catch (error) {
    console.log(error);
  }
});

const displayUserData = (userData) => {
    
};
