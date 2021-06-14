const getCard = (name, description, link) => {
    var newNode = document.createElement("div");
    newNode.className = "content col-sm-3 col-md-3 col-lg-3";
    newNode.innerHTML = `<a class="card col" href="#!" style="border: 0px; background: none">
    <div class="front" style="background-image: url(images/python_clip.png);">
        <p class="text-warning display-4 shadow p-3 bg-white rounded">${name}</p>
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
    "https://raw.githubusercontent.com/sksenapati007/100DaysOfCode/main/docs/data/projects.json";
  
  fetch(projectJsonFile)
    .then((data) => data.json())
    .then((data) => {
      displayProjects(data.projects);
    });
  