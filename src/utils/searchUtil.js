import Fuse from 'fuse.js';

export const filteredIconSet = (iconSet, search) => {
  if (!search) return iconSet;

  if (!window.fuse) {
    window.fuse = new Fuse(iconSet, {
      keys: ['icons.name'],
    });
  }

  const fusedIconSet = window.fuse.search(search);

  return fusedIconSet
    .filter(fusedIcons => {
      let count = 0;

      fusedIcons.icons.forEach(
        i => i.name.toLowerCase().includes(search.toLowerCase()) && count++
      );

      return count;
    })
    .map(fusedIcons => ({
      name: fusedIcons.name,
      icons: fusedIcons.icons.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase())
      ),
    }));
};
