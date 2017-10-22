/**
 * Generate a table with agent's infos and call a graph builder
 * called in index.html
 * @author Wojciech Myszkorowski
 * @author Jérémie Zanone
 */

/* global XMLHttpRequest */
const req = new XMLHttpRequest();

// eslint-disable-next-line
function changeOwner(owner) {
  // eslint-disable-next-line
  $(document).ready(() => {
    req.open('GET', `https://raw.githubusercontent.com/CoolPolishGuy/TWEB-GitHub-Analytics-Agent/master/data/data_${owner}.json`);
    req.responseType = 'json';

    req.onreadystatechange = () => {
      // eslint-disable-next-line
      if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
        const object = req.response;
        $('table').remove();
        const divTable = document.getElementById('div-table');
        const table = document.createElement('table');
        const tr1 = table.appendChild(document.createElement('tr'));
        const th1 = tr1.appendChild(document.createElement('th'));
        const th2 = tr1.appendChild(document.createElement('th'));

        th1.appendChild(document.createTextNode('Name repository'));
        th2.appendChild(document.createTextNode('Commits number'));
        divTable.appendChild(table);
        for (let i = 0; i < object.repoCommits.length; i += 1) {
          $('table').append(`<tr><td id="repList"> ${object.repoCommits[i].name} </td><td id="reIssues">${object.repoCommits[i].commits} </td></tr>`);
        }

        $('#canvas-bar-chart').remove();
        $('#canvas-pie-chart').remove();
        $('#bar-chart').append('<canvas class="chart" id="canvas-bar-chart"><canvas>');
        $('#pie-chart').append('<canvas class="chart" id="canvas-pie-chart"><canvas>');
        /* global BuildChart */
        BuildChart(object);
      }
    };
    req.send();
    location.href = '#reposcommits';
  });
}

