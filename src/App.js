import logo from './logo.svg';
import Hello from './ahlabik'

function App() {
  return (
 
    <div className="App">
       <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand">wissem</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </nav>


  
  

  
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><Hello age={"1"} /></th>
      <td><Hello name={"wissem"} /></td>
      <td><Hello name={"ahlabik"} /></td>
      <td><Hello name={"omor"} /></td>
    </tr>
    <tr>
      <th scope="row"><Hello age={"2"} /></th>
      <td><Hello name={"mohamed"} /></td>
      <td><Hello name={"monjo"} /></td>
      <td><Hello name={"morji"} /></td>
    </tr>
    <tr>
      <th scope="row"><Hello age={"3"} /></th>
      <td><Hello name={"mona"} /></td>
      <td><Hello name={"morda"} /></td>
      <td><Hello name={"plofa"} /></td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col"><Hello age={"#"} /></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><Hello age={"1"} /></th>
      <td><Hello name={"plofa"} /></td>
      <td><Hello name={"monjo"} /></td>
      <td><Hello name={"aroka"} /></td>
    </tr>
    <tr>
      <td><Hello age={"2"} /></td>
      <td><Hello name={"morg"} /></td>
      <td><Hello name={"mon"} /></td>
      <td><Hello name={"monjo"} /></td>
    </tr>
    <tr>
      <th scope="row"><Hello age={"3"} /></th>
      <td><Hello name={"moazr"} /></td>
      <td><Hello name={"poad"} /></td>
      <td><Hello name={"madazonjo"} /></td>
    </tr>
  </tbody>
</table>
<form>
  <div class="row">
    <div class="col">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    </div>
    <div class="col">
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
    </div>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;
