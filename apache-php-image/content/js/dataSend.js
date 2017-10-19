$(document).ready(() => {
  const req = new XMLHttpRequest();

  req.open('GET','https://raw.githubusercontent.com/CoolPolishGuy/TWEB-GitHub-Analytics-Agent/master/data/data.json');
  req.responseType = 'json';

  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE &&req.status === 200) {
      const object = req.response;
      for (let i = 0; i < object.repoCommits.length; i += 1) {
        $('table').append(`<tr><td id="repList"> ${object.repoCommits[i].name} </td><td id="reIssues">${object.repoCommits[i].commits} </td></tr>`);
      }
    buildChart(object);
    }
  };
  req.send();
});
