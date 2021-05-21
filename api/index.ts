import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export const generateSVG = (src) => {
  return `
  <svg>
    <g id="gImg">
      <image width="200" height="200" href="${src}"></image>
    </g>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="64" height="64">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0">
      <a href="https://github.com/Turkyden" target="_blank">
        <circle r="32" cx="32" cy="32" stroke-width="1" stroke="#c0c0c0" fill="url(#SvgjsPattern4297)">
          <title>Turkyden</title>
        </circle>
      </a>
    </svg>
    <defs>
      <pattern x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse" id="SvgjsPattern4297">
        <image width="64" height="64" href="data:image/jpeg;base64,/9j/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAEAAQAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APaQjelPEbelSqKkC0AUL27t9NtXuryeOCBfvO7YFcdcfFXw9DM0cRuJsfxqmFP0ya4H4j67eeJPFMulWDO9taNs2gnG4cEmsWPwTqZgEgOH9M0Ae66H4s0rX2ZLSVlkX+CUbSfp61veW3pXzDc6frvh+UXRSTYDneh6V7t8OfFP/CU+HfMlcG6t28uX1Pof8+lAHT7G9KaQ3pVorTCtAAoqQDg0wVIKAPn3RYRpl1fT3UUssr3ku8ohZvlcjt9K7az1KxubUyJKUVPvrKhRl+oNVdY0O3fUr2ITyxH7RLJmNyhy7Fu31plhpyrY3KeZJIu0KGY5PHuetADbnVNN1HNrGXk35QFoWCk+xIwaPgzYT2GseI4SMQxuic/3st/SpLHRIYpvPF3cPlshGlJUfh0Fdb4GsvsjazJnInvWkyR3/wAMY/WgDrCKjIqQ9KYetAEamng1XeeKIgO4BboO5/CsvUPFFhpqlpGLhWAkCkbkBIG4jrjJHNAHOeO7U2uoQXkS4WZSrY6Fh/8AWrj7eeKWCSVgsZU4aKWVw3H0BH61t+OPGcV839k2cTfupAzTuCAWA6AEcjB61ysOuW64W4sCZwOvGD+NAHQ6dJLdNCqQvC8rgLGWyTzXrdtBHawCKJQoHJx3PrXimma1LZXyapOiiOE5WMnj0HP4131h8RdGmCrfO1lK2MeZlkYHoVYdR78e+KAOyJphNMjmjmjEkTq6MMhlOQaUmgDyDx+DPLaalZTrHqEJO4Kdrug5yPXGPwz7VlSajNfxGaaSZo54Fm3A8IwysiZPYnBx9PSub1jxI+o20aqQdrbgy9VZeMj60sWoFdFMJb5i5UD64JoAjl1MPfQ3Ur70dmd8LyAT09yBit544pUjuIGSRG7iuJgx9lUHnAqOSFly6O4U9QrEZoA6PW9SWRks4HBCfM5U559K39Bv7E2sUuoBZ7S1DLDC43ASE8AfrXCQ+WsZ2LjitXw3ctJDdWwYbySyZGfmHIOPrQB6HqviRLXVNI06ycRF5RNPIMDy4l+ZgMdBj+Vd9Br8DxLK+RGw3BsY4+lfOd3fyy3P22U/NgxuPTnBH5ZFdlN4qlli2xyBRnBdjgD1/X+tAH//2Q=="/>
      </pattern>
    </defs>
  </svg>
  `;
};

export default async (request: VercelRequest, response: VercelResponse) => {
  const { username = 'Turkyden' } = request.query;
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);

    if (res.status === 200) {
      // response.status(200).json(res.data);
      const svg = generateSVG(res.data.avatar_url);
      response.status(200).send(svg);
    }
  } catch (error) {
    response.status(200).send(error.message);
  }
};
