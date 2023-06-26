const btnUser = document.querySelector("#getUser");
const showUserResult = document.querySelector(".showUserData");
const btnRepo = document.querySelector("#getRepo");
const showRepoResult = document.querySelector(".showRepoData");

// Functionality for User data results
btnUser.addEventListener("click", async () => {
  const inputValue = document.querySelector("input").value;
  if (inputValue === "") {
    alert("Please Enter User Name !!!");
  } else {
    const userUrl = `https://api.github.com/users/${inputValue}`;
    //   showUserResult.innerHTML = `Loading data for ${inputValue} ...`;
    //   console.log(inputValue);
    try {
      let res = await fetch(userUrl);
      let userData = await res.json();
      // console.log(userData);
      displayUserData(userData);
    } catch (error) {
      showUserResult.innerHTML = `Error in Loading the data...`;
    }
  }
});

const displayUserData = (userData) => {
  const userImg = userData.avatar_url;
  //   console.log(img);
  const userName = userData.name;
  const userLocation = userData.location;
  const userBio = userData.bio;
  const userFollowers = userData.followers;
  const userFollowing = userData.following;
  const userRepo = userData.public_repos;
  showUserResult.innerHTML = `
<div class="col-sm-12 col-md-6 col-lg-4 mb-3 mb-sm-3 ">
            <div class="card h-100 bg-dark text-white">
            <div class = "card-header text-center">
                <img src="${userImg}" class="card-img-top" width="200" height="300" alt="${userName}">
                <h3 class="mt-2">${userName}</h3>
            </div>
                <div class="card-body">
                    <h5 class="card-title">Bio: ${userBio}</h5>
                    <h5 class="card-text">Public Repo: ${userRepo}</h5>
                    <h5 class="card-text">Followers: ${userFollowers}</h5>
                    <h5 class="card-text">Following: ${userFollowing}</h5>
                    <h5 class="card-text">Location: ${userLocation}</h5>
                </div>
            </div>
</div>
`;
  document.querySelector("input").value = "";
};

// Functionality for Repo results
btnRepo.addEventListener("click", async () => {
  const inputValue = document.querySelector("input").value;
  if (inputValue === "") {
    alert("Please Enter User Name !!!");
  } else {
    const url = `https://api.github.com/users/${inputValue}/repos?per_page=100`;
    //   showRepoResult.innerHTML = `Loading Repo for ${inputValue} ...`;
    try {
      let res = await fetch(url);
      let userData = await res.json();
      displayRepoData(userData);
    } catch (error) {
      showRepoResult.innerHTML = `Error in loading repositories...`;
    }
  }
});

const displayRepoData = (userData) => {
  userData.map((item, id) => {
    // console.log(item, id);
    showRepoResult.innerHTML += `
 <div class="col-sm-12 col-md-6 col-lg-4 mb-3 mb-sm-3 ">
            <div class="card h-100 bg-dark text-white text-center">
            <div class = "card-header">
                <h6>Repository No: ${id + 1}</h6>
                <h3 class="mt-2">${item.name}</h3>
            </div>
                <div class="card-body">
                <a href="${item.html_url}" target="_blank">
                <button class="btn btn-outline-warning p-2">Go To Repo</button></a>
                </div>
            </div>
</div>
`;
  });

  document.querySelector("input").value = "";
};
