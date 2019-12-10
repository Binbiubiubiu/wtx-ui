import { configure, addParameters, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { themes } from "@storybook/theming";

const newViewports = {
  case1: {
    name: "1920*1080",
    styles: {
      width: "1920px",
      height: "1080px"
    }
  },
  case2: {
    name: "1366*768",
    styles: {
      width: "1366px",
      height: "768px"
    }
  }
};

addDecorator(withA11y);

addParameters({
  docs: {
    withSource: "open",
    container: DocsContainer,
    page: DocsPage
  },
  options: {
    isFullscreen: false,
    showAddonsPanel: true,
    showSearchBox: true,
    panelPosition: "bottom",
    hierarchySeparator: /\./,
    // hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
    theme: themes.dark
    // theme: create({
    //   base: 'light',
    //   brandTitle: 'CRA Kitchen Sink',
    //   brandUrl: 'https://github.com/storybookjs/storybook/tree/master/examples/cra-kitchen-sink',
    //   gridCellSize: 12,
    // }),
    // storySort: (a: any, b: any) =>
    //   a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
  backgrounds: [
    { name: "dark", value: "#242424", default: true },
    { name: "normal", value: "#ffffff" },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ],
  viewport: {
    viewports: {
      // ...INITIAL_VIEWPORTS,
      ...newViewports
    }
  }
});

// automatically import all files ending in *.stories.js
configure(
  require.context("../stories", true, /\.stories?\.(tsx|mdx)$/),
  module
);
