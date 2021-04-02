import "./EditSlide.css";
import { Component } from 'react';
import slidesService from '../../services/slidesService';
import Debounce from 'react-debounce-component';

class EditSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide_data: '',
            addSlide_title_error: '',
            addSlide_cover_error: '',
            addSlide_background_error: '',
            addSlide_description_error: '',
            addSlide_url_error: '',
            description_length: 0,
            title: '',
            cover: '',
            background: '',
            description: '',
            url: ''
        }
    }

    slide_id = this.props.match.params.id;


    componentDidMount() {

        slidesService.getSlideData(this.slide_id)
        .then(slide_data => { 
            this.setState({
                slide_data, 
                description_length: slide_data.description.length,
                title: slide_data.title,
                description: slide_data.description,
                cover: slide_data.cover,
                background: slide_data.background,
                url: slide_data.url 
            })
        })
    }


    changeHandlerTitle(e) {
        this.setState({ title: e.target.value },

            function validateTitle() {
                if (this.state.title.length === 0) { this.setState({ addSlide_title_error: "Title is required!" }) }
                else if (this.state.title.length !== 0) { this.setState({ addSlide_title_error: "" }) }
                else { this.setState({ addSlide_title_error: "" }) }
            })
    }

    changeHandlerShortDescription(e) {
        this.setState({ description: e.target.value },

            function validateShortDescription() {
                this.setState({ description_length: e.target.value.length });

                if (this.state.description.length < 10) { this.setState({ addSlide_description_error: "Short description is required!" }) }
                else if (this.state.description === '') { this.setState({ addSlide_description_error: "" }) }
                else { this.setState({ addSlide_description_error: "" }) }
            })
    }

    changeHandlerCover(e) {
        this.setState({ cover: e.target.value },

            function validateCover() {
                var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
                var regex = new RegExp(expression);

                if (this.state.cover.length === 0) { this.setState({ addSlide_cover_error: "Cover is required!" }) }
                else if (!this.state.cover.match(regex)) { this.setState({ addSlide_cover_error: "Invalid cover url!" }) }
                else if (this.state.cover.length !== 0) { this.setState({ addSlide_cover_error: "" }) }
                else { this.setState({ addSlide_cover_error: "" }) }
            })
    }

    changeHandlerBackground(e) {
        this.setState({ background: e.target.value },

            function validateBackground() {
                var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
                var regex = new RegExp(expression);

                if (this.state.background.length === 0) { this.setState({ addSlide_background_error: "Background is required!" }) }
                else if (!this.state.background.match(regex)) { this.setState({ addSlide_background_error: "Invalid background url!" }) }
                else if (this.state.background.length !== 0) { this.setState({ addSlide_background_error: "" }) }
                else { this.setState({ addSlide_background_error: "" }) }
            })
    }

    changeHandlerURL(e) {
        this.setState({ url: e.target.value },

            function validateURL() {
                var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
                var regex = new RegExp(expression);

                if (this.state.url.length === 0) { this.setState({ addSlide_url_error: "URL is required!" }) }
                else if (!this.state.url.match(regex)) { this.setState({ addSlide_url_error: "Invalid url!" }) }
                else if (this.state.url.length !== 0) { this.setState({ addSlide_url_error: "" }) }
                else { this.setState({ addSlide_url_error: "" }) }
            })
    }

    submitHandler(e) {
        e.preventDefault();

        const { history } = this.props;

        const { title, description, cover, background, url } = this.state;

        if (title === '') {
            return this.setState({ addSlide_title_error: "Title is required!" });
        };

        if (description === '') {
            return this.setState({ addSlide_description_error: "Short Description is required!" });
        };

        if (cover === '') {
            return this.setState({ addSlide_cover_error: "Cover is required!" });
        };

        if (background === '') {
            return this.setState({ addSlide_cover_error: "Background is required!" });
        };

        if (url === '') {
            return this.setState({ addSlide_url_error: "URL is required!" });
        };

        slidesService.editSlide(this.state.slide_data.objectId, title, description, cover, background, url);

        if (history) { history.push('/user/profile/myslides') };
    };

    cancelHandler = () => {
        const { history } = this.props;
        if (history) { history.push(`/user/profile/myslides`) };
    };



    render() {
        console.log(this.state);
        return (
            <>
                <h2 className="page-title">EDIT NEWS ARTICLE</h2>
                <section className="center">
                    <article></article>
                    <form id="user-editslide">
                        <div className="row">
                            <div className="form-field-group">
                                <input id="title" type="text" onChange={this.changeHandlerTitle.bind(this)} onBlur={this.changeHandlerTitle.bind(this)} defaultValue={this.state.slide_data.title} className="form-input-field" name="title" placeholder="Title" />
                                <Debounce ms={1000}>
                                    <span className="vaidation-error error-text-red">{this.state.addSlide_title_error}</span>
                                </Debounce>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-field-group">
                                <input id="cover" type="text" onChange={this.changeHandlerCover.bind(this)} onBlur={this.changeHandlerCover.bind(this)} defaultValue={this.state.slide_data.cover} className="form-input-field" name="cover" placeholder="Cover URL" />
                                <Debounce ms={1000}>
                                    <span className="vaidation-error error-text-red">{this.state.addSlide_cover_error}</span>
                                </Debounce>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-field-group">
                                <input id="background" type="text" onChange={this.changeHandlerBackground.bind(this)} onBlur={this.changeHandlerBackground.bind(this)} defaultValue={this.state.slide_data.background} className="form-input-field" name="background" placeholder="Background URL" />
                                <Debounce ms={1000}>
                                    <span className="vaidation-error error-text-red">{this.state.addSlide_background_error}</span>
                                </Debounce>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-field-group">
                                <textarea id="short-description" onChange={this.changeHandlerShortDescription.bind(this)} onBlur={this.changeHandlerShortDescription.bind(this)} defaultValue={this.state.slide_data.description} maxLength="100" type="text" className="materialize-textarea form-input-field contact-textarea" name="short-description" placeholder="Short Description"></textarea>
                                <span className="vaidation-error error-text-red">
                                    <Debounce ms={1000}>
                                        <span>{this.state.addSlide_description_error}</span>
                                    </Debounce>
                                </span>
                                <span className="addslide-counter">{this.state.description_length}/100</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-field-group">
                                <textarea id="url" onChange={this.changeHandlerURL.bind(this)} onBlur={this.changeHandlerURL.bind(this)} defaultValue={this.state.slide_data.url} maxLength="2000" type="text" className="materialize-textarea form-input-field contact-textarea" name="url" placeholder="URL"></textarea>
                                <span className="vaidation-error error-text-red">
                                    <Debounce ms={1000}>
                                        <span>{this.state.addSlide_url_error}</span>
                                    </Debounce>
                                </span>
                            </div>
                        </div>
            
                        <div id="addslide-buttons">
                            <button onClick={this.submitHandler.bind(this)} className="btn waves-effect waves-light addslide-btn" name="action"><i className="material-icons left">input</i>Save</button>
                            <button onClick={this.cancelHandler.bind(this)} className="btn waves-effect waves-light addslide-btn" name="action" type="reset"><i className="material-icons left">input</i>Cancel</button>
                        </div>
                    </form>
                    <article></article>
                </section>
            </>
        );
    }
}

export default EditSlide;