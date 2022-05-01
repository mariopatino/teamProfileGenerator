module.exports = function () {
    return `* {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
      font-family: 'Varela Round', sans-serif;
  }
  
  header {
      background-color: rgb(255, 49, 83);
      color: white;
      text-align: center;
      line-height: 7em;
      width: 100vw;
      height: 7em;
  }
  
  main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 30px;
      padding: 40px 100px;
      width: 100vw;
      height: 80em;
  }
  
  section {
      background-color: rgb(240, 240, 240);
  }
  
  .team-card {
      flex: 0 0 25%;
      height: 17em;
      box-shadow: 5px 5px 8px rgb(133, 132, 132);
  }
  
  .card-header {
      background-color: dodgerblue;
      color: white;
  }
  
  h2, h3 {
      padding: 10px;
  }
  
  .card-body {
      margin: 30px 15px;
      background-color: white;
      border: solid 1px lightgray;
  }
  
  li {
      list-style: none;
      padding: 10px;
      border: solid 1px lightgray;
  }`;
  };