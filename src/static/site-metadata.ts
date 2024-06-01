interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.mstrlc.eu',
  logo: 'https://cdsassets.apple.com/live/7WUAS350/images/nav-icons/content-nav-watch-workout-running-icon.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/mstrlc',
    },
    {
      name: 'About',
      url: 'https://github.com/mstrlc/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
