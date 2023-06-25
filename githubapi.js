const btnUser = document.querySelector("#getUser");
const showUserResult = document.querySelector(".showUserData");
const btnRepo = document.querySelector("#getRepo");

btnUser.addEventListener("click", async () => {
  const inputValue = document.querySelector("input").value;
  showUserResult.innerHTML = `Loading data for ${inputValue}`;
  //   console.log(inputValue);
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
  const userImg = userData.avatar_url;
  //   console.log(img);
  const userName = userData.name;
  const userLocation = userData.location;
  const userBio = userData.bio;
  const userFollowers = userData.followers;
  const userFollowing = userData.following;
  const userRepo = userData.public_repos;
  showUserResult.innerHTML = `
<div class="col">
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
};
