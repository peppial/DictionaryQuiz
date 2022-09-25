import { Link } from "react-router-dom";

function GetStartedPage() {
    return (

        <div>
            <nav className="fh5co-nav " role="navigation">
                <div className="top-menu container margined">
                <div id="fh5co-logo"><a href="index.html">Duo Words<span>.</span></a></div>
                </div>
            </nav>
            <div className="container margined">
                <h3>Get Started</h3>

                <div className="blog-text">
                    Want to improve your language skills?
               
                <div>Here is a simple and proven way!
                </div>


                <p> <div>Duo Words is a totally free word quiz that will help you memorize other language words.</div>
                <div>Language experts have proven that everyday practice will help you most to advance in any language and
                    to reach proficiency.</div>
                </p>
                <p>How to start?
                </p>
                <div>Select <strong>"The Language you speak"</strong> - quiz words will be shown on this language.
                </div>
                <div>Then select <strong>"The Language you want to learn"</strong> - you need to guess how the word is translated to this language.
                
                For every 50 words you receive a new star <span className='word' style={{color:'#ff6600'}}>&#9733;</span></div>
                <p>When you click "Start" the quiz begins!
                </p>
                <p>
                <Link to="/words" className="active">Start Today</Link>
                </p>
                </div>
            </div>
        </div>
   

    );
}


export default GetStartedPage;