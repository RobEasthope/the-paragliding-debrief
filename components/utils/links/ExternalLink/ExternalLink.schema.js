import React from 'react';

const ExternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  title: 'External link',
  name: 'externalLink',
  type: 'object',
  description: 'Add a link to outside the site',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
  ],
  blockEditor: {
    icon: () => '🔗',
    render: ExternalLinkRender,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        subtitle: 'External link',
      };
    },
  },
  displayName: 'ExternalLink',
};
