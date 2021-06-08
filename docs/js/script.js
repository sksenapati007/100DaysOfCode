const getCard = (name, description, link) => {
  var newNode = document.createElement("div");
  newNode.className = "content col-3";
  newNode.innerHTML = `<a class="card col" href="#!" style="border: 0px; background: none">
  <div class="front" style="background-image: url(images/coding.gif);">
      <p class="text-danger display-3">${name}</p>
  </div>
  <div class="back">
      <div>
          <p>${description}</p>
          <!--<button class="button"
              onclick="location.href='https://github.com/sksenapati007/100DaysOfCode/'">
              Fork Me
          </button>-->
          <button class="button"
              onclick=location.href="${ link }">
              View Project
          </button>
      </div>
  </div>
</a>`;
  return newNode;
};

const displayProjects = (projects) => {
  const cardWrapper = document.getElementById("card-wrapper");
  projects.forEach((project) => {
    cardWrapper.appendChild(
      getCard(project.name, project.description, project.link)
    );
  });
};

// Fetch data from json file
const projectJsonFile =
  "https://raw.githubusercontent.com/sksenapati007/100-Days-of-Code/master/docs/data/projects.json";

fetch(projectJsonFile)
  .then((data) => data.json())
  .then((data) => {
    displayProjects(data.projects);
  });
