//CSS import not working.
//Image import not working, image pathing is obiviously not correct, Searching for a fix.

//Component function
function navBar() {
    //Navbar Function
    function collapse() {
        const navbarCollapse = document.getElementById('navbar-collapse');
        //Add event listener
        navbarCollapse.addEventListener('toggle', (e) => {
           //If funtion to check if toggle is open with a new state
           if (e.newState === 'open') {
            //Log info to terminal
            console.log("Collapsing Navbar is open"); 
           }else {
            console.log("Collpasing Navbar was not able to open");
           }
        });
    }
//Add function to button for it to be used




    return(
        <>
        <div className="navbar-bg-container">
            <nav>
                {/**Navbar function added to the navbar collapse div (Test function to understand what's broken) */}
                <div className="" id="navbar-collapse" onClick={collapse()}>
                    {/**Add a hamburger icon to the button svg or regular icon using tailwind */}
                    <button className="navbar-toggler" id="navbar-toggler"></button>
                    <ul>
                        <li>Home</li>
                        <li>Feed</li>
                        <li>Post</li>
                    </ul>
                </div>
                <img src='' alt="" />
                <h1 className="brand-name">Mystery Mansion</h1>
            </nav>
        </div>
        </>
    )
}

//export function
export default navBar