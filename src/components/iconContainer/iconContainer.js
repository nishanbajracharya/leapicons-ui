import React from 'react';
import Fuse from 'fuse.js';

import IconSet from '../iconSet';

const iconSet = [
  {
    name: 'Action',
    icons: ['account_box', 'alarm', 'backup'],
  },
  {
    name: 'AV',
    icons: ['hd', 'note', 'repeat', 'snooze'],
  },
];

const fuse = new Fuse(iconSet, {
  keys: ['icons'],
});

const filteredIconSet = (iconSet, search) => {
  if (!search) return iconSet;

  const fusedIconSet = fuse.search(search);

  return fusedIconSet
    .filter(fusedIcons => {
      let count = 0;

      fusedIcons.icons.forEach(
        i => i.toLowerCase().includes(search.toLowerCase()) && count++
      );

      return count;
    })
    .map(fusedIcons => ({
      name: fusedIcons.name,
      icons: fusedIcons.icons.filter(i =>
        i.toLowerCase().includes(search.toLowerCase())
      ),
    }));
};

const IconContainer = () => (
  <div className="icon-container">
    {
      filteredIconSet(iconSet, 'reps').map(set => (
      <IconSet name={set.name} icons={set.icons} />
    ))}
  </div>
);

export default IconContainer;
