import "./About.css";


function About() {
  return (
   <>
     <h2 className="page-title">ABOUT BOOK STORE</h2>
     <article className="about-us about-us">
       <article className="about-us-header-image">
         <img src={process.env.PUBLIC_URL + '/essential-books.jpg'} alt="payments" />
         </article>
     
     <p>Book Store began in `1997`. Over the decades that have followed, we have grown to become an icon of the British cultural landscape, employing over 3000 superb booksellers across over 280 bookshops.</p>

     <p>As the last surviving national bookshop chain, we are proud to have fought off the perceived threat of e-readers and online competition to begin a programme of active expansion. Recent years have seen fresh shops open around the country and sites either move or be upgraded.</p>

     <p>Perhaps unusually for a national retailer, our branch managers enjoy a high degree of individual autonomy, running their shops to best please their local customers, with only the lightest of central suggested direction. We take enormous pleasure in championing simply good (but sometimes relatively overlooked) books, a principle that began most famously with John Williams’ Stoner, a quiet, intense novel that we turned into a bestseller forty years after its original publication.</p>

     <p>Working closely with our bookshops are our efforts online, where at Book Store we are working to bring the very essence of Book Store to every home and smartphone in Britain. With hugely popular endeavours such as our regular reading update Book Store Weekly and an ever-increasing offering of exclusive reader offers and signed editions, Book Store.com is the perfect online companion to our High Street bookshops. Click & Collect – the service that links the two – has grown in tandem with our success, allowing our customers to experience the best of both worlds.</p>

     <p>Through our own coffee shops, range of books, our array of gifts and booksellers who genuinely love what they sell, we welcome you to Book Store.</p>
     </article>
     <article className="about-us-footer-image">
     <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="Book Store" />
     </article>
   </>
  );
}

export default About;