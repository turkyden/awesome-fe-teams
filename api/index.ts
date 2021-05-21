import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export const generateSVG = ({ login, name, location, avatar_url }) => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="120" viewBox="0 0 300 120" fill="none">
    <style>
      .header {
        font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
        fill: #6B7280;
        animation: fadeInAnimation 0.8s ease-in-out forwards;
      }

      .stat {
        font: 400 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif;
        fill: #333;
      }

      .stagger {
        opacity: 0;
        animation: fadeInAnimation 0.3s ease-in-out forwards;
      }

      .light {
        fill: #6B7280;
        font-weight: 300
      }


      /* Animations */
      @keyframes scaleInAnimation {
        from {
          transform: translate(-5px, 5px) scale(0);
        }

        to {
          transform: translate(-5px, 5px) scale(1);
        }
      }

      @keyframes fadeInAnimation {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

    </style>

    <rect class="stagger" style="animation-delay: 900ms" data-testid="card-bg" x="0.5" y="0.5" rx="2" height="90%" stroke="#E5E7EB" width="290" fill="#fffefe" stroke-opacity="1" />

    <g data-testid="main-card-body" transform="translate(65, 4)">

      <g transform="translate(-48, 14)" >
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="64" height="64">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0">
            <a href="https://github.com/${login}" target="_blank">
              <circle class="stagger" style="animation-delay: 300ms" r="32" cx="32" cy="32" stroke-width="1" stroke="" fill="url(#SvgjsPattern4297)">
                <title>${name}</title>
              </circle>
            </a>
          </svg>
          <defs>
            <pattern x="16" y="16" width="64" height="64" patternUnits="userSpaceOnUse" id="SvgjsPattern4297">
              <image width="32" height="32" href="${avatar_url}"></image>
            </pattern>
          </defs>
        </svg>
      </g>

      <g transform="translate(0, 0)">
        <g transform="translate(0, 35)">
          <g class="stagger" style="animation-delay: 450ms" transform="translate(25, 0)">>
            <text x="0" y="0" class="header" data-testid="header">${name}</text>
          </g>
        </g>
        <g transform="translate(0, 45)">
          <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="16" height="16" fill="#6B7280">
              <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
            </svg>
            <text class="stat light" x="20" y="12.5" fill="#6B7280">14,000</text>
          </g>
        </g>
        <g transform="translate(0, 65)">
          <g class="stagger" style="animation-delay: 750ms" transform="translate(25, 0)">
            <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="#6B7280">
              <path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            <text class="stat light" x="20" y="12.5" fill="#6B7280">${location}</text>
          </g>
        </g>
      </g>
    </g>
  </svg>
  `;
};

export default async (request: VercelRequest, response: VercelResponse) => {
  const { username = 'Turkyden' } = request.query;
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`, {
      auth: {
        username: 'dcb39fc858755f895513',
        password: '803b0587d11fa32bc2aa553e4827ecb55c9c58fe',
      },
    });

    if (res.status === 200) {
      // response.status(200).json(res.data);
      // const { avatar_url, login, name, location, blog, email } = res.data;
      const svg = generateSVG(res.data);
      response.setHeader('Content-Type', 'image/svg+xml;charset=UTF-8');
      response.status(200).send(svg);
    }
  } catch (error) {
    response.status(200).send(error.message);
  }
};
