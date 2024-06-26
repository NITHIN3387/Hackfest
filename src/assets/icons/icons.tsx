import { IconsTypes } from "./icons.types";

export function LightModeIcon(props: IconsTypes): JSX.Element {
  const { width = "100%", height = "100%", color = "currentcolor" } = props;

  return (
    <svg
      width={width}
      height={height}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 640 640"
    >
      <path d="M314.8 107.9c-5.3 1.7-9.8 5.3-12.6 9.9-2.5 4.4-2.7 5.6-3 18.6-.4 15.8.5 20.6 5.1 26.1 10.5 12.8 31.2 8.2 35.7-8 .8-2.7 1.1-9.3.8-18.1-.3-13.1-.5-14.2-3.1-18.6-4.5-7.8-15.2-12.3-22.9-9.9m137.1 55.4c-5.3 2-8.4 4.4-18.1 14.5-12.5 12.7-15.3 20.3-10.9 29.7 4.9 10.7 16.6 15.2 27 10.5 5.4-2.5 23.4-19.9 26.4-25.5 3.1-6 2.9-13.8-.6-19.7-4.8-8.2-15.6-12.5-23.8-9.5m-275.4 3.4c-7.5 3.9-11.5 10.4-11.5 18.4 0 7.6 2.7 12.3 12.9 22.2 12.3 12.1 19.7 15 28.9 11.1 11-4.6 16-16.7 11.2-27.3-2.6-5.6-18-21.4-23.5-24.1-5-2.4-13.7-2.6-18-.3m123 49.3c-21.8 4.7-37.5 13.1-53.2 28.3-14.3 13.8-23.8 30.2-29.1 49.5-2.3 8.6-2.6 11.5-2.6 26.2s.3 17.6 2.6 26.2c5.1 18.7 13.6 33.5 27.1 47.5 13.8 14.3 30.2 23.8 49.5 29.1 8.6 2.3 11.5 2.6 26.2 2.6s17.6-.3 26.2-2.6c19.3-5.3 35.7-14.8 49.5-29.1 13.6-14 22-28.9 27-47.5 2.3-8.6 2.6-11.6 2.7-26.2 0-14.7-.3-17.5-2.6-26.2-5.3-19.4-14.8-35.7-29.1-49.5-14-13.6-29-22.1-47.5-27-13.5-3.5-33.8-4.1-46.7-1.3m-176.7 84c-5.2 1.6-9.8 5.2-12.5 9.8-5.8 9.8-2.4 22.1 7.5 27.9 4.4 2.6 5.5 2.8 18.6 3.1 15.8.4 20.6-.5 26.1-5.1 12.6-10.3 8.3-30.9-7.4-35.6-4.3-1.3-28.2-1.4-32.3-.1m361.4.3c-15.3 5.8-19.1 25.3-6.7 35.4 5.5 4.6 10.3 5.5 26.1 5.1 13.1-.3 14.2-.5 18.6-3.1 3.1-1.8 5.7-4.4 7.5-7.5 5.8-9.8 2.5-22.1-7.5-27.9-4.5-2.7-5.3-2.8-19.7-3-9.9-.2-16.1.2-18.3 1M189.3 424.7c-6.9 3.7-21.9 18.1-23.9 22.9-5.8 14 4.3 28.6 19.7 28.6 7.8 0 12.1-2.6 23-13.9 6.7-6.9 8.8-9.8 9.8-13.5 3.6-12.7-4.9-25.2-18.1-26.5-4.5-.4-6.1-.1-10.5 2.4m252.7.3c-10.1 1.8-17 9.9-17 19.9 0 2.7.5 6.2 1 7.7 1.2 3 14.8 17.9 18.9 20.6 6.6 4.4 17.5 4.1 23.8-.8 6.7-5.1 9.3-15.7 5.9-23.9-1.4-3.3-16.4-19.8-19.7-21.5-3-1.7-9.4-2.6-12.9-2m-130.6 46.9c-5 2.3-9.8 8-11.4 13.6-.8 2.7-1.1 9.3-.8 18.1.3 13.1.5 14.2 3.1 18.6 8 13.7 27.4 13.7 35.4 0 2.6-4.4 2.8-5.5 3.1-18.6.3-8.8 0-15.4-.8-18.1-2.5-9-10.9-15.5-20-15.5-2.5 0-6.3.9-8.6 1.9" />
    </svg>
  );
}

export function DarkModeIcon(props: IconsTypes): JSX.Element {
  const { width = "100%", height = "100%", color = "currentcolor" } = props;

  return (
    <svg
      width={width}
      height={height}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 640 640"
    >
      <path d="M300 136c-28.1 5-54.9 16.1-76.9 31.8-10.7 7.6-28.2 24-36.4 34-21.9 26.8-36.6 61.3-40.8 95.5-1.9 15.5-.7 44.4 2.5 59.3 15.5 73.4 71.5 129.3 145.5 145.2 11.7 2.5 14.3 2.6 36.6 2.6s24.9-.1 36.6-2.6c52.2-11.2 96-42.2 122.9-87 4.3-7.1 5-9 5-13.5 0-4.7-.4-5.8-3.6-9.2-4-4.5-9-6.6-13.7-5.7-1.8.3-6.9 3.1-11.2 6.2-16.1 11.2-36.2 19.7-54.9 23.1-12.3 2.3-36.1 2.2-48.1-.1-19.3-3.7-37.1-10.9-53.2-21.7-9.9-6.6-28.5-25.2-35-34.9-10.6-15.9-18.1-34.2-21.9-53.5-2.6-13.2-2.4-36.8.5-50.2 7.7-36.7 28.1-67.1 58.8-87.6 5.6-3.7 11.1-7.9 12.2-9.3 6.8-8.6.6-22.1-10.9-23.8-1.9-.3-8.2.3-14 1.4" />
    </svg>
  );
}
