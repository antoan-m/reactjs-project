import "./WishlistPanel.css";
import { Component } from 'react';
import booksService from "../../../services/booksService";
import booksWishlistService from "../../../services/booksWishlistService";


class WishlistPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        current_user: this.props.userData,
        my_wishlist: ''
  }
}
 
  componentDidMount() {
    
    this.current_user_id = this.props.userData.objectId;

    let wishlist = booksWishlistService.getWishlistBookIds(this.current_user_id)
    
  }
    
render() {      
  return (
<section className="profile-main">
          <h2 className="profile-main-header">My Wishlist</h2>
          <ul>
        {/* {wishlist[0]} */}
      </ul>
            
</section>
  )
}
}

export default WishlistPanel;