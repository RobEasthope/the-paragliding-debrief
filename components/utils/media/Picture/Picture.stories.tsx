import React from 'react';
import { Meta, Story } from '@storybook/react';

import { AspectRatio } from '@chakra-ui/react';
import { Picture, PictureProps } from './Picture';
import { CenterComponent } from '.storybook/preview-ui/CenterComponent';
import {
  BASSENTHWAITE_IMAGE,
  RED_ARROWS,
} from '.storybook/mock-data/sanity-images';

export default {
  title: 'Utils/Media/Picture',
  component: Picture,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story<PictureProps> = (args) => (
  <Picture preview={false} {...args} />
);

// Responsive
export const Responsive = Template.bind({}) as Record<string, unknown>;

Responsive.args = {
  asset: {
    _type: 'image',
    asset: {
      _ref: 'image-9e3248f2b358adf609c136e4054e91ba132447e5-4032x3024-jpg',
      _type: 'reference',
    },
    caption: 'Bassenthwaite Lake, Cumbria',
  },
  mode: 'responsive',
  maxWidth: 400,
};

// Cover - full size
export const CoverFullSize = Template.bind({}) as Record<string, unknown>;
CoverFullSize.args = {
  asset: RED_ARROWS,
  mode: 'cover',
};

// Cover - Square
export const CoverSquare = Template.bind({}) as Record<string, unknown>;
CoverSquare.decorators = [
  // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
  (Story) => (
    <AspectRatio width="400px" ratio={1}>
      <Story />
    </AspectRatio>
  ),
];
CoverSquare.args = {
  asset: RED_ARROWS,
  mode: 'cover',
};

// Cover - Landscape
export const CoverLandscape = Template.bind({}) as Record<string, unknown>;
CoverLandscape.decorators = [
  // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
  (Story) => (
    <AspectRatio width="400px" ratio={16 / 9}>
      <Story />
    </AspectRatio>
  ),
];
CoverLandscape.args = {
  asset: RED_ARROWS,
  mode: 'cover',
};

// Cover - Portrait
export const CoverPortrait = Template.bind({}) as Record<string, unknown>;
CoverPortrait.decorators = [
  // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
  (Story) => (
    <AspectRatio width="400px" ratio={9 / 16}>
      <Story />
    </AspectRatio>
  ),
];
CoverPortrait.args = {
  asset: RED_ARROWS,
  mode: 'cover',
};

// Contain - Full screen
export const ContainFullScreen = Template.bind({}) as Record<string, unknown>;
ContainFullScreen.args = {
  asset: BASSENTHWAITE_IMAGE,
  mode: 'contain',
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
