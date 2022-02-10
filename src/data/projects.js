// remeber to use muiIconLink for built in mui icon links
// and use customIconLink for custom built mui icons
const data = [
  {
    title: "derzan.dev",
    description:
      "My personal website built mainly using ReactJS and material UI. The" +
      "website was built with the material design pattern and responsiveness in mind.",
    imgUrl: "./mockuper.png",
    technologies: [
      {
        name: "ReactJS",
        url: "https://reactjs.org/",
        customIconLink: "./customMuiSvgIcons/ReactIcon/ReactIcon",
      },
      {
        name: "Mui",
        url: "https://mui.com/",
        customIconLink: "./customMuiSvgIcons/MuiIcon/MuiIcon",
      },
    ],
    actions: [
      {
        name: "Source",
        url: "https://github.com/MiTo0o/derzan.dev",
        muiIconLink: "@mui/icons-material/GitHub",
      },
      {
        name: "Live",
        url: "https://derzan.dev/",
        muiIconLink: "@mui/icons-material/Visibility",
      },
    ],
  },
];

export default data;
