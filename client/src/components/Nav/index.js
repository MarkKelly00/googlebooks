import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        <h3><i class="fas fa-book" /> React Reading List</h3>
      </a>
      <div class="col">
      <a className="badge badge-primary text-wrap float-right" href="/savedBooks">
        <h3>My Books</h3>
      </a>
      </div>
    </nav>
  );
}

export default Nav;
