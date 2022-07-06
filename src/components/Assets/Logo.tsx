interface IconInterface {
  width?: number;
  height?: number;
}

function Logo({ height = 65, width = 61 }: IconInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 65 61"
    >
      <path
        fill="#00B37E"
        d="M64.067.41L48.388 55.955a.358.358 0 01-.585.151l-10.497-9.959 7.866-27.835c.08-.252-.159-.479-.425-.403L15.41 25.371 4.965 15.463c-.186-.177-.106-.48.16-.555L63.642.008c.265-.051.505.176.425.403z"
        opacity="0.5"
      ></path>
      <path
        fill="#00B37E"
        d="M37.306 46.146l-4.04 14.371a.358.358 0 01-.584.151L.102 29.783c-.187-.177-.107-.48.159-.555l15.147-3.857 21.898 20.775z"
        opacity="0.5"
      ></path>
      <path
        fill="#00B37E"
        d="M45.171 18.311l-7.866 27.835L15.408 25.37l29.338-7.463c.266-.076.505.15.425.403z"
      ></path>
    </svg>
  );
}

export default Logo;
