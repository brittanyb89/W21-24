/**
 * HINTS:
 * 1. To avoid errors for things not on the page, use OPTIONAL chaining (?.)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * 2. Properties from the issues that we will use:
 * - title
 * - html_url
 * 3. Properties from the repos that we will use:
 * - full_name
 * 4. Use JS to set CSS 'visibility' property to 'visible'
 */
const resultsList = document.querySelector("#results ul");
const resultsH2Span = document.querySelector("#repo-search-term");

function renderRepo(repo) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = `./single-repo.html?repo=${repo.full_name}`;
  a.innerText = repo.full_name;

  li.appendChild(a);

  resultsList.appendChild(li);
}

export default {
  // render service do not talk directly to api service
  // gotta tell what repo to render, set parameters
  renderRepos(username, repos) {
    resultsH2Span.innerText = username;

    repos.forEach(renderRepo);
  },
};
