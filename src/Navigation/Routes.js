//detta gör så att det första man ser är projects, åkallas index.js

function initRoutes() {
//    if (
//        !["#projects"].find(
//            knownRoute => window.location.hash === knownRoute
//        )
//    )
    window.location.hash = "#mainpage";    
}

export default initRoutes;
