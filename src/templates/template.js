import fetchData from '@utils/fetchData.js'

import imgGithub from '@images/github.png'
import imgTwitter from '@images/twitter.png'
import imgInstagram from '@images/instagram.png'

const Template = async () => {
  const data = await fetchData();
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo center circle">
            <img src="${data.image}">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
              xml:space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <p class="card_title">Hiii, My name is</p>
          <p class="card_value">${data.name}</p>
        </div>
        <div class="card_userdata">
          <ul>
            <li>${data.status}</li>
            <li>${data.species}</li>
          </ul>
        </div>
        <div class="card_social">
          <a href="https://twitter.com">
            <img src="${imgTwitter}" />
          </a>
          <a href="https://github.com/CodeDreake">
            <img src="${imgGithub}" />
          </a>
          <a href="https://www.instagram.com/oatad59/">
            <img src="${imgInstagram}" />
          </a>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Template;