import "./AddBook.css";
import { Component } from 'react';
import bookService from '../../services/booksService';
import React from 'react';
import Debounce from 'react-debounce-component';

class AddBook extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current_user: '',
        categoryList: [],
        authorList: [],
        formatList: [],
        error: '',
        addbook_title_error: '',
        addbook_category_error: '',
        addbook_author_error: '',
        addbook_image_error: '',
        addbook_short_description_error: '',
        addbook_long_description_error: '',
        addbook_format_error: '',
        addbook_pages_error: '',
        addbook_year_error: '',
        addbook_price_error: '',
        addbook_rrp_error: '',
        short_description_length: 0,
        long_description_length: 0,
        title: '',
        category: '',
        author: '',
        image: '',
        short_description: '',
        long_description: '',
        format: '',
        pages: '',
        price: '',
        rrp: '',
        year: '',
        featured: false,
        promo: false
      }
    }

componentDidMount() {

    bookService.getAuthors()
    .then(authorList => this.setState({ authorList }))

    bookService.getCategories()
    .then(categoryList => this.setState({ categoryList }))

    bookService.getFormats()
    .then(formatList => this.setState({ formatList }))
}

componentDidUpdate() {

    if(this.state.authorList === '') {
    bookService.getAuthors()
    .then(authorList => this.setState({ authorList }))
    }
    if(this.state.categoryList === '') {
    bookService.getCategories()
    .then(categoryList => this.setState({ categoryList }))
    }
    if(this.state.formatList === '') {
    bookService.getFormats()
    .then(formatList => this.setState({ formatList }))
    }

}

changeHandlerTitle(e) {
    this.setState({title: e.target.value},

        function validateTitle() {
           if (this.state.title.length === 0) { this.setState({addbook_title_error: "Title is required!"}) }
           else if (this.state.title.length !== 0) { this.setState({addbook_title_error: ""}) }
           else { this.setState({addbook_title_error: ""}) }
         })
}

changeHandlerCategory(e) {
    this.setState({category: e.target.value},

        function validateCateogry() {
            if (this.state.category.length === 0) { this.setState({addbook_category_error: "Category is required!"}) }
            else if (this.state.category.length !== 0) { this.setState({addbook_category_error: ""}) }
            else { this.setState({addbook_category_error: ""}) }
         })
}

changeHandlerAuthor(e) {
    this.setState({author: e.target.value},

        function validateShortAuthor() {
            if (this.state.author.length === 0) { this.setState({addbook_author_error: "Author is required!"}) }
            else if (this.state.author.length !== 0) { this.setState({addbook_author_error: ""}) }
            else { this.setState({addbook_author_error: ""}) }
         })
}

changeHandlerShortDescription(e) {
    this.setState({short_description: e.target.value},

    function validateShortDescription() {
        this.setState({ short_description_length: e.target.value.length });

       if (this.state.short_description.length < 10) { this.setState({addbook_short_description_error: "Short Description is required!"}) }
       else if (this.state.short_description === '') { this.setState({addbook_short_description_error: ""}) }
       else { this.setState({addbook_short_description_error: ""}) }
     })
}

changeHandlerLongDescription(e) {
    this.setState({long_description: e.target.value},

        function validateShortDescription() {
            this.setState({ long_description_length: e.target.value.length });

           if (this.state.long_description.length < 10) { this.setState({addbook_long_description_error: "Long Description is required!"}) }
           else if (this.state.long_description === '') { this.setState({addbook_long_description_error: ""}) }
           else { this.setState({addbook_long_description_error: ""}) }
         })
}

changeHandlerImage(e) {
    this.setState({image: e.target.value},

        function validateImage() {
            var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
            var regex = new RegExp(expression);

            if (this.state.image.length === 0) { this.setState({addbook_image_error: "Image is required!"}) }
            else if (!this.state.image.match(regex)) { this.setState({addbook_image_error: "Invalid image url!"}) }
            else if (this.state.image.length !== 0) { this.setState({addbook_image_error: ""}) }
            else { this.setState({addbook_image_error: ""}) }
         })
}

changeHandlerFormat(e) {
    this.setState({format: e.target.value},

        function validateFormat() {
            if (this.state.format.length === 0) { this.setState({addbook_format_error: "Format is required!"}) }
            else if (this.state.format.length !== 0) { this.setState({addbook_format_error: ""}) }
            else { this.setState({addbook_format_error: ""}) }
         })
}

changeHandlerPages(e) {
    this.setState({pages: e.target.value},

        function validatePages() {

            let pagesMatch = /[0-9]+/;

            if (this.state.pages.length === 0) { this.setState({addbook_pages_error: "Pages is required!"}) }
            else if (!this.state.pages.match(pagesMatch)) { this.setState({addbook_pages_error: "Pages is invalid!"}) }
            else if (this.state.pages.length !== 0) { this.setState({addbook_pages_error: ""}) }
            else { this.setState({addbook_pages_error: ""}) }
         })
}

changeHandlerYear(e) {
    this.setState({year: e.target.value},

        function validateYear() {

            let yearMatch = /[a-zA-Z\D]/;
  
            if (this.state.year.length === 0) { this.setState({addbook_year_error: "Year is required!"}) }
            else if (this.state.year.length < 4) { this.setState({addbook_year_error: "Year is invalid!"}) }
            else if (this.state.year.match(yearMatch)) { this.setState({addbook_year_error: "Year is invalid!"}) } 
            else if (this.state.year.length !== 0) { this.setState({addbook_year_error: ""}) }
            else { this.setState({addbook_year_error: ""}) }
         })
}

changeHandlerPrice(e) {
    this.setState({price: e.target.value},

        function validatePrice() {
            
            let priceMatch = /[0-9]+.?[0-9]?/;

            if (this.state.price.length === 0) { this.setState({addbook_price_error: "Price is required!"}) }
            else if (!this.state.price.match(priceMatch)) { this.setState({addbook_price_error: "Price is not valid!"}) }
            else if (this.state.price.length !== 0) { this.setState({addbook_price_error: ""}) }
            else { this.setState({addbook_price_error: ""}) }
         })
}

changeHandlerRRP(e) {
    this.setState({rrp: e.target.value},

        function validatePrice() {
            
            let rrpMatch = /[0-9]+.?[0-9]?/;

            if (!this.state.rrp.match(rrpMatch)) { this.setState({addbook_rrp_error: "RRP is not valid!"}) }
            else if (this.state.rrp.length !== 0) { this.setState({addbook_rrp_error: ""}) }
            else { this.setState({addbook_rrp_error: ""}) }
         })
}

changeHandlerFeatured(e) {
    this.setState({featured: !this.state.featured});
}

changeHandlerPromo(e) {
    this.setState({promo: !this.state.promo});
}

submitHandler(e) {
    e.preventDefault();

    const { history } = this.props;

    const { title, author, category, short_description, long_description, image, format, pages, year, price, rrp, featured, promo} = this.state;
        
    if(title === '') {
         return this.setState({addbook_title_error: "Title is empty!"});
    };

    if(author === '') {
        return this.setState({addbook_author_error: "Author is empty!"});
    };

    if(category === '') {
        return this.setState({addbook_category_error: "Category is empty!"});
    };

    if(short_description === '') {
        return this.setState({addbook_short_description_error: "Short Description is empty!"});
    };

    if(long_description === '') {
        return this.setState({addbook_long_description_error: "Long Description is empty!"});
    };

    if(image === '') {
        return this.setState({addbook_image_error: "Image is empty!"});
    };

    if(format === '') {
        return this.setState({addbook_format_error: "Format is empty!"});
    };

    if(pages === '') {
        return this.setState({addbook_pages_error: "Pages is empty!"});
    };

    if(year === '') {
        return this.setState({addbook_year_error: "Year is empty!"});
    };

    if(price === '') {
        return this.setState({addbook_price_error: "Price is empty!"});
    };

    bookService.addBook(title, author, category, short_description, long_description, image, format, pages, year, price, rrp, featured, promo);
    
        if (history) { history.push('/user/profile/mybooks') };
    };

    submitClearHandler = () => { 
        this.setState({
            addbook_title_error: '',
            addbook_category_error: '',
            addbook_author_error: '',
            addbook_image_error: '',
            addbook_short_description_error: '',
            addbook_long_description_error: '',
            addbook_format_error: '',
            addbook_pages_error: '',
            addbook_year_error: '',
            addbook_price_error: '',
            addbook_rrp_error: '',
            title: '',
            category: '',
            author: '',
            image: '',
            short_description: '',
            long_description: '',
            format: '',
            pages: '',
            price: '',
            rrp: '',
            year: '',
            featured: false,
            promo: false
    });
      }

      cancelHandler = () => {
        const { history } = this.props;
        if (history) { history.push(`/user/profile/mybooks/`) };
    };



render() {
    return (
       <>
       <h2 className="page-title">ADD NEW BOOK</h2>
       <section className="center">
       <article></article>
     <form id="user-addBook">
                    <div className="row">
                        <div className="form-field-group">
                            <input id="title" type="text" onChange={this.changeHandlerTitle.bind(this)} onBlur={this.changeHandlerTitle.bind(this)} value={this.state.title} className="form-input-field" name="title" placeholder="Title" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.addbook_title_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                    <div className="form-field-group">
                        <input id="author" list="authors-list" type="text" onChange={this.changeHandlerAuthor.bind(this)} onBlur={this.changeHandlerAuthor.bind(this)} value={this.state.author} className="form-input-field" name="author" placeholder="Author" />
                        <datalist id="authors-list">
                            {this.state.authorList.map(x =>
                                <option value={x.author} key={x.author}>{x.author}</option>
                            )}
                        </datalist>
                        <span className="vaidation-error error-text-red">{this.state.addbook_author_error}</span>
                        </div>
                    </div>
                    <div className="row">
                    <div className="form-field-group">
                    <input id="category" list="categories-list" type="text" onChange={this.changeHandlerCategory.bind(this)} onBlur={this.changeHandlerCategory.bind(this)} value={this.state.category} className="form-input-field" name="category" placeholder="Category" />
                    <datalist id="categories-list">
                            {this.state.categoryList.map(x =>
                                <option value={x.category} key={x.category}>{x.category}</option>
                            )}
                    </datalist>
                        <span className="vaidation-error error-text-red">{this.state.addbook_category_error}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="Image" type="text" onChange={this.changeHandlerImage.bind(this)} onBlur={this.changeHandlerImage.bind(this)} value={this.state.image} className="form-input-field" name="Image" placeholder="Image URL" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.addbook_image_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <textarea id="short-description" onChange={this.changeHandlerShortDescription.bind(this)} onBlur={this.changeHandlerShortDescription.bind(this)} value={this.state.short_description} maxLength="200" type="text" className="materialize-textarea form-input-field contact-textarea" name="short-description" placeholder="Short Description"></textarea>
                            <span className="vaidation-error error-text-red">
                                <Debounce ms={1000}>
                                    <span>{this.state.addbook_short_description_error}</span>
                                </Debounce>
                            </span>
                            <span className="addbook-counter">{this.state.short_description_length}/100</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <textarea id="long-description" onChange={this.changeHandlerLongDescription.bind(this)} onBlur={this.changeHandlerLongDescription.bind(this)} value={this.state.long_description} maxLength="2000" type="text" className="materialize-textarea form-input-field contact-textarea" name="long-description" placeholder="Long Description"></textarea>
                            <span className="vaidation-error error-text-red">
                                <Debounce ms={1000}>
                                    <span>{this.state.addbook_long_description_error}</span>
                                </Debounce>
                            </span>
                            <span className="addbook-counter">{this.state.long_description_length}/2000</span>
                        </div>
                    </div>
                    <div className="row">
                    <div className="form-field-group">
                        <input id="format" list="formats-list" type="text" onChange={this.changeHandlerFormat.bind(this)} onBlur={this.changeHandlerFormat.bind(this)} value={this.state.format} className="form-input-field" name="format" placeholder="Format" />
                        <datalist id="formats-list">
                            {this.state.formatList.map(x =>
                                <option value={x.format} key={x.format}>{x.format}</option>
                            )}
                        </datalist>
                        <span className="vaidation-error error-text-red">{this.state.addbook_format_error}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="pages" type="text" onChange={this.changeHandlerPages.bind(this)} onBlur={this.changeHandlerPages.bind(this)} value={this.state.pages} className="form-input-field" name="pages" placeholder="Pages" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.addbook_pages_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="year" type="text" onChange={this.changeHandlerYear.bind(this)} onBlur={this.changeHandlerYear.bind(this)} value={this.state.year} maxLength="4" className="form-input-field" name="year" placeholder="Year" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.addbook_year_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row last">
                        <div className="form-field-group">
                            <input id="price" type="text" onChange={this.changeHandlerPrice.bind(this)} onBlur={this.changeHandlerPrice.bind(this)} value={this.state.price} className="form-input-field" name="price" placeholder="Price" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.addbook_price_error}</span>
                            </Debounce>
                        </div>
                    </div>

                    <div className="row last">
                        <div className="form-field-group">
                            <input id="rrp" type="text" onChange={this.changeHandlerRRP.bind(this)} onBlur={this.changeHandlerRRP.bind(this)} value={this.state.rrp} className="form-input-field" name="rrp" placeholder="RRP" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.addbook_rrp_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    
                    <div className="switch featured-switch">
                        <article className="switch featured-switch-title">Featured</article>
                    <label>
                    No
                    <input type="checkbox" name="userType" onChange={this.changeHandlerFeatured.bind(this)} value={this.state.featured} />
                    <span className="lever"></span>
                    Yes
                    </label>
                    </div>

                    <div className="switch promo-switch">
                    <article className="switch promo-switch-title">Promo</article>
                    <label>
                    No
                    <input type="checkbox" name="userType" onChange={this.changeHandlerPromo.bind(this)} value={this.state.promo} />
                    <span className="lever"></span>
                    Yes
                    </label>
                    </div>
                    {/* <span className="vaidation-error error-text-red form-error">ERROR MESSAGE FROM SERVER</span> */}
                    <div id="addbook-buttons">
                        <button onClick={this.submitHandler.bind(this)} className="btn waves-effect waves-light addbook-btn" name="action"><i className="material-icons left">create</i>Add Book</button>
                        <button onClick={this.submitClearHandler.bind(this)} className="btn waves-effect waves-light addbook-btn" name="action" type="reset"><i className="material-icons left">restore</i>Reset</button>
                        <button onClick={this.cancelHandler.bind(this)} className="btn waves-effect waves-light addnews-btn" name="action" type="reset"><i className="material-icons left">input</i>Cancel</button>
                    </div>
                </form>
                <article></article>
                </section>
    </>
  );
}
}

export default AddBook;