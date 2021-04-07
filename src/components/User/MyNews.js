import "./MyNews.css";
import { Component } from 'react';
import userService from "../../services/userService";
import newsService from "../../services/newsService";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";
import MyNewsPanel from "./panels/MyNewsPanel";


class MyNews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      my_news: [],
      deleted_news: false,
      user_id: localStorage.getItem('id')
    };
  }

  componentDidMount() {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))

    newsService.getMyNews(this.state.user_id)
    .then(news => this.setState({ my_news: news }))
  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
        userService.userData(this.state.user_id)
        .then(data => this.setState({ user_data: data }))
        }

    if (this.state.my_news === '') {
    newsService.getMyNews(this.state.user_id)
    .then(news => this.setState({ my_news: news }))
    }
  }

  render() {
    // console.log(this.state.my_news);
  return (
<div className="profile">

    <section className="profile-main">

        <UserPanel userData={this.state.user_data} />

        <MyNewsPanel myNews={this.state.my_news} />

        {/* <AdminPanel userData={this.state.user_data} /> */}

      </section>
    
</div>
  );
}
}

export default MyNews;
