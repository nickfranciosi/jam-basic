const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  ).catch((e) => console.error(e));

  const repoJson = await repos.json();

  const markup = repoJson
    .map(
      (repo) =>
        `<li><a href="${repo.html_url}">${repo.name}</a> (⭐️ ${repo.stargazers_count})</li>`
    )
    .join("");

  const content = document.getElementById("content");
  content.innerHTML = `<ul>${markup}</ul>`;
};

listRepos("jlengstorf");
