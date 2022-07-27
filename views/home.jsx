
const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-rant</h1>
                <div>
                    <img class='sushi' src="./images/sushi.jpg" alt="Rainbow Roll"/>
                    <div>
                        Photo by Israel-albornoz on <a href="https://unsplash.com/images">unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home