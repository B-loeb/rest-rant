const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Sorry, we can not find this page!</p>
                <div>
                   <img src="../public/images/errorCream.jpg" alt="404: Page not found."/>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404