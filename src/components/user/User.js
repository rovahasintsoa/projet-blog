import React, { Component } from 'react';
import PostList from '../posts/PostList';



class User extends Component {
  render() {
    const { posts , notifications } = this.props;
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand text-light" href="#">Titre</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item text-light">
              <a class="nav-link text-light" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item text-light">
              <a class="nav-link text-light" href="">About</a>
            </li>
          </ul>
        </div>
      </nav>
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <PostList  posts={posts}/>
                </div>
            </div>
        </div>
        </div>
    );
  }

}

export default User;
