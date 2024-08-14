const btn = document.querySelector('#searchbtn');
const resultbox = document.querySelector('.resultBox');


let profilename;
let username;
let company;
let userLocation;
let Bio;
let Followers;
let Following;
let totalRepo;
let accountCreatedOn;
let lastUpdatedOn;
let profileImage;
let profurl;

const getProfileData = function (profile) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${profile}`);
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            profilename = data.name;
            profileImage = data.avatar_url;
            username = data.login;
            profurl = data.html_url;
            company = data.company;
            Bio = data.bio;
            userLocation = data.location;
            Followers = data.followers;
            Following = data.following;
            totalRepo = data.public_repos;
            accountCreatedOn = data.created_at;
            lastUpdatedOn = data.updated_at;


            console.log(profilename)
            showData();
        }
    }
    xhr.send()


}

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const profileText = document.querySelector('#username').value
    getProfileData(profileText);
})

const showData = function () {
    resultbox.style.display = 'block'
    resultbox.innerHTML = `<div class="imagebox flex">
            <img src="${profileImage}" alt="" srcset="">
        </div>

        <h2 class="text-center">${profilename}</h2>
        <h3 class="text-center">${username}</h3>

        <div class="infotable flex">
            <table>
                <tr>
                    <td>Profile URL: </td>
                    <td>${profurl}</td>
                </tr>
                <tr>
                    <td>Company: </td>
                    <td>${company}</td>
                </tr>
                <tr>
                    <td>location:</td>
                    <td>${userLocation}</td>
                </tr>
                <tr>
                    <td>Bio</td>
                    <td>${Bio}</td>
                </tr>
                <tr>
                    <td>Followers</td>
                    <td>${Followers}</td>
                </tr>
                <tr>
                    <td>Following</td>
                    <td>${Following}</td>
                </tr>
                <tr>
                    <td>Total Repos</td>
                    <td>${totalRepo}</td>
                </tr>
                <tr>
                    <td>Account Created on: </td>
                    <td>${accountCreatedOn}</td>
                </tr>
                <tr>
                    <td>Last updated on:</td>
                    <td>${lastUpdatedOn}</td>
                </tr>
            </table>

        </div>`

}
