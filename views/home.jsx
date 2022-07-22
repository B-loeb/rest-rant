const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="public/css/images/sushi.jpg" alt="Rainbow Roll Sushi"/>
                    <div>
                        Photo by Israel-albornoz on <a href="https://unsplash.com/images">unsplash</a>
                    </div>
                </div>
                <a href="/places">
                 <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home