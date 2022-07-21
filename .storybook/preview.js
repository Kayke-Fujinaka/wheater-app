import * as NextImage from "next/image";
import GlobalStyle from "../src/styles/global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (/** @type {import('next/image').ImageProps} */ props) => {
    if (typeof props.src === "string") {
      return (
        <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
      );
    } else {
      return <OriginalNextImage {...props} unoptimized />;
    }
  },
});