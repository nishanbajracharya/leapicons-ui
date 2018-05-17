const sizes = [512, 256, 128, 96, 64, 48, 32, 24, 16];

const iconSet = [
  {
    name: 'Action Items',
    icons: [
      {
        name: 'trash',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path d="M43.84,59H20.16a3.55,3.55,0,0,1-3.45-3.22L13,15H51L47.29,55.78A3.55,3.55,0,0,1,43.84,59Z" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/><rect x="10" y="11" width="44" height="4" rx="2" ry="2" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/><path d="M44.15,5H19.85A2.27,2.27,0,0,0,18,6.86L17,11H47L46,6.86A2.27,2.27,0,0,0,44.15,5Z" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/><line x1="32" y1="24" x2="32" y2="50" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/><line x1="24" y1="24" x2="24" y2="50" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/><line x1="40" y1="24" x2="40" y2="50" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/><path d="M43.84,60H20.16a4.53,4.53,0,0,1-4.45-4.13L12.09,16H12a3,3,0,0,1,0-6h4.22l0.85-3.38A3.22,3.22,0,0,1,19.85,4h24.3a3.23,3.23,0,0,1,2.79,2.62L47.78,10H52a3,3,0,0,1,0,6H51.91L48.29,55.87A4.53,4.53,0,0,1,43.84,60ZM14.09,16L17.7,55.69A2.55,2.55,0,0,0,20.16,58H43.84a2.55,2.55,0,0,0,2.46-2.31L49.91,16H14.09ZM12,12a1,1,0,0,0,0,2H52a1,1,0,0,0,0-2H12Zm6.28-2H45.72L45,7.1A1.47,1.47,0,0,0,44.15,6H19.85A1.47,1.47,0,0,0,19,7.1ZM41,50H39V24h2V50Zm-8,0H31V24h2V50Zm-8,0H23V24h2V50Z"/></svg>'
      },
    ],
  },
  {
    name: 'Navigation',
    icons: [
      {
        name: 'add',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="add"><g id="expanded-4" data-name="expanded"><path id="_Path_" data-name="&lt;Path&gt;" d="M32,53a1,1,0,0,1-1-1V33H12a1,1,0,0,1,0-2H31V12a1,1,0,0,1,2,0V31H52a1,1,0,0,1,0,2H33V52A1,1,0,0,1,32,53Z"/></g></g></svg>'
      },
      {
        name: 'add enclosed',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="add-encolsed"><g id="expanded-3" data-name="expanded"><path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" d="M53,32a1,1,0,0,1-1,1H33V52a1,1,0,0,1-2,0V33H12a1,1,0,0,1,0-2H31V12a1,1,0,0,1,2,0V31H52A1,1,0,0,1,53,32Zm7,0A28,28,0,1,1,32,4,28,28,0,0,1,60,32Zm-2,0A26,26,0,1,0,32,58,26,26,0,0,0,58,32Z"/></g></g></svg>'
      },
      {
        name: 'app',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg id="app" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="expanded"><path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" d="M59,60H45a1,1,0,0,1-1-1V45a1,1,0,0,1,1-1H59a1,1,0,0,1,1,1V59A1,1,0,0,1,59,60ZM46,58H58V46H46Zm-7,2H25a1,1,0,0,1-1-1V45a1,1,0,0,1,1-1H39a1,1,0,0,1,1,1V59A1,1,0,0,1,39,60ZM26,58H38V46H26Zm-7,2H5a1,1,0,0,1-1-1V45a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1V59A1,1,0,0,1,19,60ZM6,58H18V46H6ZM59,40H45a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1H59a1,1,0,0,1,1,1V39A1,1,0,0,1,59,40ZM46,38H58V26H46Zm-7,2H25a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1H39a1,1,0,0,1,1,1V39A1,1,0,0,1,39,40ZM26,38H38V26H26Zm-7,2H5a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1V39A1,1,0,0,1,19,40ZM6,38H18V26H6ZM59,20H45a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1H59a1,1,0,0,1,1,1V19A1,1,0,0,1,59,20ZM46,18H58V6H46Zm-7,2H25a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1H39a1,1,0,0,1,1,1V19A1,1,0,0,1,39,20ZM26,18H38V6H26Zm-7,2H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1V19A1,1,0,0,1,19,20ZM6,18H18V6H6Z"/></g></svg>'
      },
      {
        name: 'arrow-backward',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="arrow-backward"><g id="expanded"><path id="_Path_" data-name="&lt;Path&gt;" d="M32,53a1,1,0,0,1-.71-.29l-20-20A1,1,0,0,1,11,32h0a1,1,0,0,1,.29-.7l20-20a1,1,0,0,1,1.41,1.41L14.41,31H52a1,1,0,0,1,0,2H14.41L32.71,51.29A1,1,0,0,1,32,53Z"/></g></g></svg>'
      },
      {
        name: 'arrow-downward',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="arrow-downward"><g id="expanded"><path id="_Path_" data-name="&lt;Path&gt;" d="M32,53a1,1,0,0,1-.71-.29l-20-20a1,1,0,0,1,1.41-1.41L31,49.61V12a1,1,0,0,1,2,0V49.58L51.28,31.31a1,1,0,0,1,1.41,1.41L32.78,52.63a1,1,0,0,1-.34.27A1,1,0,0,1,32,53Z"/></g></g></svg>'
      },
      {
        name: 'arrow-forward',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="arrow-forward"><g id="expanded"><path id="_Path_" data-name="&lt;Path&gt;" d="M32,53a1,1,0,0,1-.71-1.71L49.59,33H12a1,1,0,0,1,0-2H49.59L31.29,12.71a1,1,0,0,1,1.41-1.41l20,20A1,1,0,0,1,53,32h0a1,1,0,0,1-.29.7l-20,20A1,1,0,0,1,32,53Z"/></g></g></svg>'
      },
      {
        name: 'arrow-upward',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="arow-upward"><g id="expanded"><path id="_Path_" data-name="&lt;Path&gt;" d="M32,53a1,1,0,0,1-1-1V14.42L12.72,32.69a1,1,0,0,1-1.41-1.41L31.22,11.37a1,1,0,0,1,.33-.27,1,1,0,0,1,1.17.18l20,20a1,1,0,0,1-1.41,1.41L33,14.39V52A1,1,0,0,1,32,53Z"/></g></g></svg>'
      },
      {
        name: 'chevron-down',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="chevron-down"><g id="expanded-6" data-name="expanded"><path id="_Path_" data-name="&lt;Path&gt;" d="M32,40a1,1,0,0,1-.71-.29l-14-14a1,1,0,0,1,1.41-1.41L32,37.6,45.27,24.3a1,1,0,0,1,1.41,1.41l-14,14A1,1,0,0,1,32,40Z"/></g></g></svg>'
      },
      {
        name: 'chevron-left',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="chevron-left"><g id="expanded-6" data-name="expanded"><path id="_Path_" data-name="&lt;Path&gt;" d="M39,47a1,1,0,0,1-.71-.29l-14-14a1,1,0,0,1,0-1.41l14-14a1,1,0,0,1,1.41,1.41L26.4,32,39.7,45.27A1,1,0,0,1,39,47Z"/></g></g></svg>'
      },
      {
        name: 'chevron-right',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="chevron-right"><g id="expanded-6" data-name="expanded"><path id="_Path_" data-name="&lt;Path&gt;" d="M25,47a1,1,0,0,1-.71-1.71L37.6,32,24.3,18.73a1,1,0,0,1,1.41-1.41l14,14a1,1,0,0,1,0,1.41l-14,14A1,1,0,0,1,25,47Z"/></g></g></svg>'
      },
      {
        name: 'chevron-up',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="chevron-up"><g id="expanded-6" data-name="expanded"><path id="_Path_" data-name="&lt;Path&gt;" d="M46,40a1,1,0,0,1-.71-.29L32,26.4,18.73,39.7a1,1,0,0,1-1.41-1.41l14-14a1,1,0,0,1,1.41,0l14,14A1,1,0,0,1,46,40Z"/></g></g></svg>'
      },
      {
        name: 'cross',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="cross"><g id="expanded"><path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" d="M50.71,49.29a1,1,0,1,1-1.41,1.41L32,33.41,14.71,50.71a1,1,0,0,1-1.41-1.41L30.59,32,13.29,14.71a1,1,0,0,1,1.41-1.41L32,30.59,49.29,13.29a1,1,0,0,1,1.41,1.41L33.41,32Z"/></g></g></svg>'
      },
      {
        name: 'cross-enclosed',
        png: 'images/png/action%20items/trash/',
        svg: 'images/svg/action%20items/li-trash.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>leapicons-navigation</title><g id="cross-enclosed"><g id="expanded-2" data-name="expanded"><path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" d="M47.71,17.71,33.41,32,47.71,46.29a1,1,0,1,1-1.41,1.41L32,33.41,17.71,47.71a1,1,0,0,1-1.41-1.41L30.59,32,16.29,17.71a1,1,0,0,1,1.41-1.41L32,30.59,46.29,16.29a1,1,0,0,1,1.41,1.41ZM60,32A28,28,0,1,1,32,4,28,28,0,0,1,60,32Zm-2,0A26,26,0,1,0,32,58,26,26,0,0,0,58,32Z"/></g></g></svg>'
      },
    ],
  },
  {
    name: 'Files and Folders',
    icons: [
      {
        name: 'file',
        png: 'images/png/files%20and%20folders/file/',
        svg: 'images/svg/files%20and%20folders/li-file.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>li</title><path d="M51,59.95H13a1,1,0,0,1-1-1v-54a1,1,0,0,1,1-1H37a1,1,0,0,1,.71.3l14,14.13a1,1,0,0,1,.29.7V58.95A1,1,0,0,1,51,59.95Zm-37-2H50v-38H36.89a1,1,0,0,1-1-1v-13H14v52Zm23.85-40H48.47L37.89,7.36V17.95Z"/></svg>'
      },
      {
        name: 'folder',
        png: 'images/png/files%20and%20folders/folder/',
        svg: 'images/svg/files%20and%20folders/li-folder.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>li</title><path d="M51.18,51H5.05l7-24H59.11ZM11.88,27H52.45V19H25.2l-3.09-6H5.05V51H5.13Z" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/></svg>'
      },
    ],
  },
  {
    name: 'Household',
    icons: [
      {
        name: 'cocktail',
        png: 'images/png/household/cocktail/',
        svg: 'images/svg/household/li-cocktail.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>li</title><path d="M40,59.82H24a1,1,0,0,1-1-.91l-4-42a1,1,0,0,1,1-1.09L18,10.94l-8.46-5,1-1.72,8.75,5.17a1,1,0,0,1,.41.47l2.52,6H44a1,1,0,0,1,1,1.09l-4,42A1,1,0,0,1,41,59h0A1,1,0,0,1,40,59.82Zm-1.77-2h0.86l0-.38Zm-13.32,0H37.78l-10-23.54a10.4,10.4,0,0,1-5.2-.63Zm4.88-24L39.26,56.2l2.26-23.71a10.85,10.85,0,0,0-9.11.3A15.56,15.56,0,0,1,29.81,33.85Zm-7.41-2.5a8.43,8.43,0,0,0,4.6,1L21.19,18.6ZM23,17.82L29,32a13.64,13.64,0,0,0,2.51-1,13,13,0,0,1,10.18-.57l1.2-12.6H23Z" fill="#221f1f"/></svg>'
      },
      {
        name: 'coffee',
        png: 'images/png/household/coffee/',
        svg: 'images/svg/household/li-coffee.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>li</title><path d="M32,60A19.81,19.81,0,0,1,12,40.42h0c0-.5,0-1,0.06-1.46l0.08-1.08h0a19.5,19.5,0,0,1,8.1-13.31l0-4.89-3.6-5.76L43.49,15.1v4.25a23.79,23.79,0,0,0,6.61-3l1.23-.77L51.61,17c1.51,7.56,3.11,12.51,5.18,16.05a3.86,3.86,0,0,0,1.36.85c0.27,0.13.55,0.27,0.82,0.41l-1,1.76-0.73-.36a4.75,4.75,0,0,1-2.22-1.65C53,30.55,51.42,25.8,49.94,18.78a23.63,23.63,0,0,1-6.45,2.63v3a19.51,19.51,0,0,1,8.37,13.77h0l0,0.34a19.14,19.14,0,0,1,.1,1.91A19.81,19.81,0,0,1,32,60ZM14,40.42A17.81,17.81,0,0,0,32,58,17.81,17.81,0,0,0,50,40.42q0-.31,0-0.61A40.77,40.77,0,0,0,32.12,40c-5,1.18-10.94,1.25-18.12.21,0,0.08,0,.15,0,0.23h0Zm0.15-2.24c7,1,12.73,1,17.52-.16a42.59,42.59,0,0,1,18.13-.3A17.54,17.54,0,0,0,42.37,26L21.7,26A17.51,17.51,0,0,0,14.15,38.18ZM24.11,24H41.49V17l-21.14-.93,1.52,2.44h5.46v2H22.24l0,3.47h1.85Z" fill="#221f1f"/></svg>'
      },
      {
        name: 'teapot',
        png: 'images/png/household/teapot/',
        svg: 'images/svg/household/li-teapot.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>li</title><path d="M45.46,60H19.12a4.88,4.88,0,0,1-3.8-1.77,4.46,4.46,0,0,1-.94-3.71l0.37-1.85c-6.85-2.24-6.62-8.79-6.43-14.1,0.16-4.46.3-8.32-2.81-9.83l-0.94-.46L7.24,23.4l0.87,0.47c6.14,3.28,6.3,8.64,6.42,12.56,0.06,2,.11,3.72.91,4.46a2.46,2.46,0,0,0,1.57.53L20.94,22a3,3,0,0,1,.35-6h0.16A10.59,10.59,0,0,1,30,8.22a3,3,0,1,1,4.63,0A10.59,10.59,0,0,1,43.13,16h0.16a3,3,0,0,1,.35,6l0.51,2.53c3.52,0.84,5.62-.64,7.48-1.95,1.54-1.09,3.13-2.21,5-1.23a4.14,4.14,0,0,1,2.22,2.46c0.7,2.33-.88,5.15-3.06,9.05C53.23,37.48,50,43.24,49.37,50.4l0.83,4.12a4.46,4.46,0,0,1-.94,3.71A4.88,4.88,0,0,1,45.46,60ZM23,22L16.34,54.91A2.43,2.43,0,0,0,16.87,57a2.89,2.89,0,0,0,2.26,1H45.46a2.89,2.89,0,0,0,2.26-1,2.43,2.43,0,0,0,.53-2L41.61,22H23ZM7.3,27.46c3.34,2.3,3.18,6.81,3,11.17-0.19,5.22-.36,10.16,4.76,12l1.47-7.29a4.18,4.18,0,0,1-2.46-1c-1.41-1.31-1.48-3.42-1.55-5.86C12.43,32.9,12.31,28.87,8,26.13Zm37.28-.84L48.29,45a55.31,55.31,0,0,1,5.78-13.16c1.79-3.21,3.34-6,2.89-7.5a2.1,2.1,0,0,0-1.22-1.26c-0.75-.38-1.4,0-3,1.08C50.93,25.5,48.47,27.24,44.58,26.63ZM43.25,20h0a1,1,0,1,0,0-2h-22a1,1,0,0,0,0,2h22Zm0.18-2h0ZM23.52,16H41.06c-1-3.49-4.59-6-8.77-6S24.55,12.51,23.52,16ZM32.29,5.31a1,1,0,1,0,1,1A1,1,0,0,0,32.29,5.31Z" fill="#221f1f"/></svg>'
      },
    ],
  },
  {
    name: 'Logos',
    icons: [
      {
        name: 'boss',
        png: 'images/png/logos/boss-bot/',
        svg: 'images/svg/logos/li-boss-bot.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>li</title><path d="M46,30L45.66,59H18.34L18,30C17.8,12.63,46.2,12.63,46,30ZM46.71,5a2,2,0,1,0,2,2A2,2,0,0,0,46.71,5ZM46,9L40,19M14.94,7a2,2,0,1,0,2-2A2,2,0,0,0,14.94,7Zm2.71,2,6,10M34.06,29.64c0-1-4.13-1-4.13,0m9.29-1h0c-2.59,0-5.15.24-5.15,0.72,0.08,2.14.61,7.17,1.1,7.12,0,0.28,2,.42,4,0.42h0c2,0,4-.14,4-0.42,0.5,0.06,1.1-7.12,1.1-7.12A22.14,22.14,0,0,0,39.23,28.59Zm5.15,0.72h2.06m-26.83,0s0.61,7.17,1.1,7.12c0,0.28,2,.42,4,0.42h0c2,0,4-.14,4-0.42,0.5,0.06,1-5,1.1-7.12,0-.48-2.57-0.71-5.15-0.72h0A22.14,22.14,0,0,0,19.62,29.3Zm0,0H17.56M42,48.61c0-4.82-20-4.82-20,0V59H42V48.61ZM32,59.2V45m5,14V45.43M27,59.24V45.44" fill="none" stroke="#221f1f" stroke-miterlimit="10" stroke-width="2"/></svg>'
      },
    ],
  },
  {
    name: 'Vehicle and Transportation',
    icons: [
      {
        name: 'car',
        png: 'images/png/vehicle%20and%20transportation/car/',
        svg: 'images/svg/vehicle%20and%20transportation/li-car.svg',
        svgElement: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>li</title><path d="M49,45.51a6,6,0,0,1-5.92-5l-19.75,0a6,6,0,0,1-11.87,0L4,40.38v-1c0-4.68,2.27-9.32,6.39-13.07,3.79-3.45,12.43-9,27.77-7.59l0.27,0,0.22,0.15c0.84,0.59,4,5.17,5.06,7.36h5.17A11,11,0,0,1,60,37.06a10.58,10.58,0,0,1-.36,2.69l-0.2.75h-4.5A6,6,0,0,1,49,45.51Zm-4-5.87a4,4,0,0,0,8,0V39.49a4,4,0,0,0-8,0v0.17Zm-31.6.07a4,4,0,0,0,8,0V39.43a4,4,0,0,0-4-3.93h0a4,4,0,0,0-4,3.91v0.29Zm41.51-1.22h2.93A8.19,8.19,0,0,0,58,37.06a9,9,0,0,0-9.13-8.81H11.24A16.38,16.38,0,0,0,6,38.38h5.48a6,6,0,0,1,5.9-4.88,6,6,0,0,1,5.9,4.91l19.8,0A6,6,0,0,1,54.94,38.48Zm-28-12.23H41.45a45.38,45.38,0,0,0-3.82-5.58,44.26,44.26,0,0,0-10.7.33v5.25Zm-13.31,0H24.93V21.38a30.92,30.92,0,0,0-9.28,3.53C14.9,25.36,14.22,25.81,13.62,26.26Z" fill="#221f1f"/></svg>'
      },
    ],
  },
];

export { sizes, iconSet };
