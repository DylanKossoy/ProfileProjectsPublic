const mainContainer = document.querySelector(".main-container");
const resumeContainer = document.querySelector(".pdf-showcase-container");
const showResume = document.querySelector(".showResume");
const projectsContainer = document.querySelector(".projects-container");
const projectsBlockContainer = document.querySelector(
  ".projects-block-container"
);
const showProjectContainer = document.querySelector(".show-project-container");
const showProjectVideo = document.querySelector(
  ".show-project-video-container"
);

const yearContainer = document.querySelector(".year-container");
const aboutContainer = document.querySelector(".about-container");

const searchInput = document.querySelector(".search-input");

const switchGrid = document.querySelector(".grid-img");
const switchList = document.querySelector(".list-img");

const exitProjectButton = document.querySelector(".exit-project-button");

exitProjectButton.addEventListener("click", () => {
  showProjectContainer.style.display = "none";
});

showResume.addEventListener("click", () => {
  resumeContainer.style.display = "flex";
});

resumeContainer.addEventListener("click", () => {
  resumeContainer.style.display = "none";
});

switchGrid.addEventListener("click", () => {
  gridValue = true;
  blockValue = false;

  gridLayout(projects);
});

switchList.addEventListener("click", () => {
  gridValue = false;
  blockValue = true;

  blockLayout(projects);
});

searchInput.addEventListener("keyup", () => {
  let newProjects = filterProjects(projects, searchInput.value);
  if (!searchInput.value) {
    newProjects = projects;
  }

  if (gridValue) {
    gridLayout(newProjects);
  } else {
    blockLayout(newProjects);
  }
});

const filterProjects = (projectsArr, value) => {
  return Object.fromEntries(
    Object.entries(projectsArr).filter(([key, project]) =>
      project.label.toLowerCase().includes(value.toLowerCase())
    )
  );
};

let gridValue = false;

let blockValue = true;

const projects = {
  projectOne: {
    image: "/public/ProjectFileSystem.png",
    label: "Profile Beta Project",
    year: 2024,
    software: "javascript",
    about:
      "This Project is actually a design I created when trying to create a hub for my projects. Now that I know more and admire simplicity, I decided to archive this project and build another. I created this project my sophmore year of college",
    video: "public/pfVid.mp4",
  },
  projectTwo: {
    image: "/public/ProjectSpace.png",
    label: "Space Messaging App",
    year: 2025,
    software: "javascript",
    about:
      "This Project is the first project assigned for my Clien Dev class, Sophmore year of college. Learning vue framework and getting familiar with node and git I created a space themed site. The goal was to have a working sign in and join, all connected to a database with user info. Happy the way this assigment turned out, having able to private message users and message everyone. Along with that, users can search for eachother, able to logout, delete account, change user info. This familiarized me with posting and getting data from a database.",
    video: "public/spaceAppVid.mp4",
  },
  projectThree: {
    image: "/public/ProjectPKWoodworx.png",
    label: "PK Woodworx",
    year: 2025,
    software: "javascript",
    about:
      "A Project inspired by my dads prebuilt website. My website design class gave an assignment that motivated me to rebuild my dads woodworking site and make it more simplistic and user friendly. Using figma helped me created the idea for this site, now I use figma frequently.",
    video: "public/pkVid.mp4",
  },
  projectFour: {
    image: "/public/ProjectNBA.png",
    label: "NBA Basketball Project",
    year: 2025,
    software: "javascript",
    about:
      "This Project is a NBA inspired app that includes betting players stats for a future game, selecting favorite players, favorite teams. Creating users and being able to log in while still having all your information. This was assignment 2 after my space project for Client Dev sophmore year of college.",
    video: "public/nbaVid.mp4",
  },
  projectFive: {
    image: "/public/TOC.png",
    label: "Table Of Content Site",
    year: 2025,
    software: "javascript",
    about:
      "This Project is a web Design Project that I had to create a solid and cohesive webpage for table of contents and chapters 7, 8, and 9. Just a simple project to practice CSS",
    video: "public/TOCVid.mp4",
  },
  projectSix: {
    image: "/public/TTT.png",
    label: "Tic Tac Toe",
    year: 2024,
    software: "javascript",
    about:
      "Simple Tic Tac Toe game project I created to better practice my code.",
    video: "public/TTT.png",
  },
  projectSeven: {
    image: "/public/SpaceInvader.png",
    label: "Space Invader",
    year: 2024,
    software: "javascript",
    about:
      "This project is inspired by @CHRIS COURSES on youtube to help me learn canvas on javascript and html.",
    video: "public/spaceInvaderVid.mp4",
  },
  projectEight: {
    image: "/public/MemoryGame.png",
    label: "Memory Game",
    year: 2024,
    software: "javascript",
    about:
      "Simple Memory Game I created and actually made for a youtube channel that just shows me typing out the code for the project. The link is at the bottom.",
    video: "public/memoryGameVid.mp4",
  },
  projectNine: {
    image: "/public/TICTAC.png",
    label: "TIC TAC TOE",
    year: 2024,
    software: "javascript",
    about:
      "Another simple tic tac toe created to challenge my logic problem solving skills. I was able to find a couple different ways to get the same result but I appreciate this project. ",
    video: "/public/TICTAC.png",
  },
  projectTen: {
    image: "/public/PBar.png",
    label: "Progress Bar",
    year: 2024,
    software: "javascript",
    about: "Project bars are always so cool so I needed a tech inspired one",
    video: "public/progressBar.mp4",
  },
  projectEleven: {
    image: "/public/gridGame.png",
    label: "Grid Game",
    year: 2024,
    software: "javascript",
    about:
      "This Project was inspired by past java projects I had done for old school assignments. I decided to recreate it using JS/CSS/HTML and make it more interactive opposed to the terminal one originally created.",
    video: "public/CSGameVid.mp4",
  },
};

const gridLayout = (projectsArr) => {
  projectsContainer.textContent = "";
  projectsBlockContainer.style.display = "none";
  projectsContainer.style.display = "grid";

  Object.keys(projectsArr).forEach((key) => {
    let element = document.createElement("div");
    element.className = "project-item";
    element.tabIndex = 0;
    element.id = key;
    element.addEventListener("click", () => {
      displayProject(element);
    });

    let img = document.createElement("img");
    img.src = projectsArr[key].image;
    img.className = "projectImg";

    let label = document.createElement("div");
    label.className = "project-label";

    label.textContent = projectsArr[key].label;

    element.appendChild(img);
    element.appendChild(label);

    projectsContainer.appendChild(element);
  });
};

const blockLayout = (projectsArr) => {
  projectsBlockContainer.textContent = "";
  projectsContainer.style.display = "none";
  projectsBlockContainer.style.display = "flex";

  Object.keys(projectsArr).forEach((key) => {
    let element = document.createElement("div");
    element.className = "project-block-item";
    element.id = key;
    element.tabIndex = 0;
    element.addEventListener("click", () => {
      displayProject(element);
    });

    let img = document.createElement("img");
    img.src = projectsArr[key].image;
    img.className = "blockImg";

    let label = document.createElement("div");
    label.className = "project-block-name";

    label.textContent = projectsArr[key].label;

    element.appendChild(label);
    element.appendChild(img);

    projectsBlockContainer.appendChild(element);
  });
};

if (gridValue) {
  gridLayout(projects);
} else {
  blockLayout(projects);
}

const displayProject = (project) => {
  showProjectContainer.style.display = "flex";

  switch (project.id) {
    case "projectSix":
    case "projectNine":
      let projectImg = document.createElement("img");

      projectImg.src = projects[project.id].video;
      projectImg.className = "projectVid";
      showProjectVideo.textContent = "";
      showProjectVideo.append(projectImg);
      break;
    default:
      let projectVid = document.createElement("video");

      projectVid.className = "projectVid";
      projectVid.controls = true;

      projectVid.src = projects[project.id].video;

      showProjectVideo.textContent = "";
      showProjectVideo.append(projectVid);
  }

  let createYear = document.createElement("div");
  let createAbout = document.createElement("div");

  createYear.className = "about-year";
  createYear.textContent = projects[project.id].year;

  createAbout.className = "about-text";
  createAbout.textContent = projects[project.id].about;

  yearContainer.textContent = "";
  aboutContainer.textContent = "";
  yearContainer.append(createYear);
  aboutContainer.append(createAbout);
};
