import "./EditNews.css";
import { Component } from 'react';
import newsService from '../../services/newsService';
import Debounce from 'react-debounce-component';
import M from 'materialize-css';

class EditNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news_data: '',
            addnews_title_error: '',
            addnews_image_error: '',
            addnews_short_description_error: '',
            addnews_long_description_error: '',
            short_description_length: 0,
            long_description_length: 0,
            title: '',
            image: '',
            short_description: '',
            long_description: ''
        }
    }

    news_id = this.props.match.params.id;


    componentDidMount() {

        newsService.getNewsData(this.news_id)
        .then(news_data => { 
            this.setState({
                news_data, 
                short_description_length: news_data.short_description.length, 
                long_description_length: news_data.long_description.length,
                title: news_data.title,
                short_description: news_data.short_description,
                long_description: news_data.long_description,
                image: news_data.image
            })
        })
    }


    changeHandlerTitle(e) {
        this.setState({ title: e.target.value },

            function validateTitle() {
                if (this.state.title.length === 0) { this.setState({ addnews_title_error: "Title is required!" }) }
                else if (this.state.title.length !== 0) { this.setState({ addnews_title_error: "" }) }
                else { this.setState({ addnews_title_error: "" }) }
            })
    }

    changeHandlerShortDescription(e) {
        this.setState({ short_description: e.target.value },

            function validateShortDescription() {
                this.setState({ short_description_length: e.target.value.length });

                if (this.state.short_description.length < 10) { this.setState({ addnews_short_description_error: "Short Description is required!" }) }
                else if (this.state.short_description === '') { this.setState({ addnews_short_description_error: "" }) }
                else { this.setState({ addnews_short_description_error: "" }) }
            })
    }

    changeHandlerLongDescription(e) {
        this.setState({ long_description: e.target.value },

            function validateShortDescription() {
                this.setState({ long_description_length: e.target.value.length });

                if (this.state.long_description.length < 10) { this.setState({ addnews_long_description_error: "Long Description is required!" }) }
                else if (this.state.long_description === '') { this.setState({ addnews_long_description_error: "" }) }
                else { this.setState({ addnews_long_description_error: "" }) }
            })
    }

    changeHandlerImage(e) {
        this.setState({ image: e.target.value },

            function validateImage() {
                var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
                var regex = new RegExp(expression);

                if (this.state.image.length === 0) { this.setState({ addnews_image_error: "Image is required!" }) }
                else if (!this.state.image.match(regex)) { this.setState({ addnews_image_error: "Invalid image url!" }) }
                else if (this.state.image.length !== 0) { this.setState({ addnews_image_error: "" }) }
                else { this.setState({ addnews_image_error: "" }) }
            })
    }

    submitHandler(e) {
        e.preventDefault();

        const { history } = this.props;

        const { title, short_description, long_description, image } = this.state;

        if (title === '') {
            return this.setState({ addnews_title_error: "Title is empty!" });
        };

        if (short_description === '') {
            return this.setState({ addnews_short_description_error: "Short Description is empty!" });
        };

        if (long_description === '') {
            return this.setState({ addnews_long_description_error: "Long Description country!" });
        };

        if (image === '') {
            return this.setState({ addnews_image_error: "Image is empty!" });
        };

        newsService.editNews(this.state.news_data.objectId, title, short_description, long_description, image)
        .then((result) => {
            M.toast({ html: "News edited successfully!" });
            if (history) { history.push('/user/profile/mynews', result) };
        })
    };

    cancelHandler = () => {
        const { history } = this.props;
        if (history) { history.push(`/user/profile/mynews/`) };
    };



    render() {
        
        return (
            <>
                <h2 className="page-title">EDIT NEWS ARTICLE</h2>
                <section className="center">
                    <article></article>
                    <form id="user-editnews">
                        <div className="row">
                            <div className="form-field-group">
                                <input id="title" type="text" onChange={this.changeHandlerTitle.bind(this)} onBlur={this.changeHandlerTitle.bind(this)} defaultValue={this.state.news_data.title} className="form-input-field" name="title" placeholder="Title" />
                                <Debounce ms={1000}>
                                    <span className="vaidation-error error-text-red">{this.state.addnews_title_error}</span>
                                </Debounce>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-field-group">
                                <input id="Image" type="text" onChange={this.changeHandlerImage.bind(this)} onBlur={this.changeHandlerImage.bind(this)} defaultValue={this.state.news_data.image} className="form-input-field" name="Image" placeholder="Image URL" />
                                <Debounce ms={1000}>
                                    <span className="vaidation-error error-text-red">{this.state.addnews_image_error}</span>
                                </Debounce>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-field-group">
                                <textarea id="short-description" onChange={this.changeHandlerShortDescription.bind(this)} onBlur={this.changeHandlerShortDescription.bind(this)} defaultValue={this.state.news_data.short_description} maxLength="100" type="text" className="materialize-textarea form-input-field contact-textarea" name="short-description" placeholder="Short Description"></textarea>
                                <span className="vaidation-error error-text-red">
                                    <Debounce ms={1000}>
                                        <span>{this.state.addnews_short_description_error}</span>
                                    </Debounce>
                                </span>
                                <span className="addnews-counter">{this.state.short_description_length}/100</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-field-group">
                                <textarea id="long-description" onChange={this.changeHandlerLongDescription.bind(this)} onBlur={this.changeHandlerLongDescription.bind(this)} defaultValue={this.state.news_data.long_description} maxLength="2000" type="text" className="materialize-textarea form-input-field contact-textarea" name="long-description" placeholder="Long Description"></textarea>
                                <span className="vaidation-error error-text-red">
                                    <Debounce ms={1000}>
                                        <span>{this.state.addnews_long_description_error}</span>
                                    </Debounce>
                                </span>
                                <span className="addnews-counter">{this.state.long_description_length}/2000</span>
                            </div>
                        </div>
            
                        <div id="addnews-buttons">
                            <button onClick={this.submitHandler.bind(this)} className="btn waves-effect waves-light addnews-btn" name="action"><i className="material-icons left">input</i>Save</button>
                            <button onClick={this.cancelHandler.bind(this)} className="btn waves-effect waves-light addnews-btn" name="action" type="reset"><i className="material-icons left">input</i>Cancel</button>
                        </div>
                    </form>
                    <article></article>
                </section>
            </>
        );
    }
}

export default EditNews;