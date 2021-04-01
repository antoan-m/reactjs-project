import "./AddSlide.css";
import { Component } from 'react';
import slidesService from '../../services/slidesService';
import React from 'react';
import Debounce from 'react-debounce-component';

class AddSlide extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current_user: '',
        addSlide_title_error: '',
        addSlide_image_error: '',
        addSlide_short_description_error: '',
        addSlide_url_error: '',
        short_description_length: 0,
        title: '',
        image: '',
        short_description: '',
        url: ''
      }
    }


changeHandlerTitle(e) {
    this.setState({title: e.target.value},

        function validateTitle() {
           if (this.state.title.length === 0) { this.setState({addSlide_title_error: "Title is required!"}) }
           else if (this.state.title.length !== 0) { this.setState({addSlide_title_error: ""}) }
           else { this.setState({addSlide_title_error: ""}) }
         })
}

changeHandlerShortDescription(e) {
    this.setState({short_description: e.target.value},

    function validateShortDescription() {
        this.setState({ short_description_length: e.target.value.length });

       if (this.state.short_description.length < 10) { this.setState({addSlide_short_description_error: "Short Description is required!"}) }
       else if (this.state.short_description === '') { this.setState({addSlide_short_description_error: ""}) }
       else { this.setState({addSlide_short_description_error: ""}) }
     })
}

changeHandlerImage(e) {
    this.setState({image: e.target.value},

        function validateImage() {
            var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
            var regex = new RegExp(expression);

            if (this.state.image.length === 0) { this.setState({addSlide_image_error: "Image is required!"}) }
            else if (!this.state.image.match(regex)) { this.setState({addSlide_image_error: "Invalid image url!"}) }
            else if (this.state.image.length !== 0) { this.setState({addSlide_image_error: ""}) }
            else { this.setState({addSlide_image_error: ""}) }
         })
}

changeHandlerURL(e) {
    this.setState({url: e.target.value},

        function validateURL() {
            var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
            var regex = new RegExp(expression);

            if (this.state.url.length === 0) { this.setState({addSlide_url_error: "URL is required!"}) }
            else if (!this.state.url.match(regex)) { this.setState({addSlide_url_error: "Invalid url url!"}) }
            else if (this.state.url.length !== 0) { this.setState({addSlide_url_error: ""}) }
            else { this.setState({addSlide_url_error: ""}) }
         })
}

submitHandler(e) {
    e.preventDefault();

    const { history } = this.props;

    const { title, short_description, image, url } = this.state;
        
    if(title === '') {
         return this.setState({addSlide_title_error: "Title is empty!"});
    };

    if(short_description === '') {
        return this.setState({addSlide_short_description_error: "Short Description is empty!"});
    };

    if(image === '') {
        return this.setState({addSlide_image_error: "Image is empty!"});
    };

    if(url === '') {
        return this.setState({addSlide_url_error: "URL is empty!"});
    };

    slidesService.addslide(title, short_description, image, url);
    
        if (history) { history.push('/user/profile/myslides') };
    };

    submitClearHandler = () => { 
        this.setState({
            addSlide_title_error: '',
            addSlide_image_error: '',
            addSlide_short_description_error: '',
            addSlide_url_error: '',
            title: '',
            image: '',
            short_description: '',
            url: ''
    });
      }

      cancelHandler = () => {
        const { history } = this.props;
        if (history) { history.push(`/user/profile/myslides/`) };
    };


render() {
    return (
       <>
       <h2 className="page-title">ADD NEW SLIDE</h2>
       <section className="center">
       <article></article>
     <form id="user-addslide">
                    <div className="row">
                        <div className="form-field-group">
                            <input id="title" type="text" onChange={this.changeHandlerTitle.bind(this)} onBlur={this.changeHandlerTitle.bind(this)} value={this.state.title} className="form-input-field" name="title" placeholder="Title" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.addSlide_title_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="Image" type="text" onChange={this.changeHandlerImage.bind(this)} onBlur={this.changeHandlerImage.bind(this)} value={this.state.image} className="form-input-field" name="Image" placeholder="Image URL" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.addSlide_image_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <textarea id="short-description" onChange={this.changeHandlerShortDescription.bind(this)} onBlur={this.changeHandlerShortDescription.bind(this)} value={this.state.short_description} maxLength="100" type="text" className="materialize-textarea form-input-field contact-textarea" name="short-description" placeholder="Short Description"></textarea>
                            <span className="vaidation-error error-text-red">
                                <Debounce ms={1000}>
                                    <span>{this.state.addSlide_short_description_error}</span>
                                </Debounce>
                            </span>
                            <span className="addnews-counter">{this.state.short_description_length}/100</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <textarea id="url" onChange={this.changeHandlerURL.bind(this)} onBlur={this.changeHandlerURL.bind(this)} value={this.state.url} type="text" className="materialize-textarea form-input-field contact-textarea" name="url" placeholder="URL"></textarea>
                            <span className="vaidation-error error-text-red">
                                <Debounce ms={1000}>
                                    <span>{this.state.addSlide_url_error}</span>
                                </Debounce>
                            </span>
                        </div>
                    </div>
                   
                    <div id="addnews-buttons">
                        <button onClick={this.submitHandler.bind(this)} className="btn waves-effect waves-light addnews-btn" name="action"><i className="material-icons left">create</i>Add Slide</button>
                        <button onClick={this.submitClearHandler.bind(this)} className="btn waves-effect waves-light addnews-btn" name="action" type="reset"><i className="material-icons left">restore</i>Reset</button>
                        <button onClick={this.cancelHandler.bind(this)} className="btn waves-effect waves-light addnews-btn" name="action" type="reset"><i className="material-icons left">input</i>Cancel</button>
                    </div>
                </form>
                <article></article>
                </section>
    </>
  );
}
}

export default AddSlide;