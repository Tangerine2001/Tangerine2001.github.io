import splashBack from '../../images/splashBackgrounds/splash.png'

function MainPageSplashScreen() {
    return (
        <div className="center light-grey">
            <img src={splashBack} alt="Splash Background" className="splash"/>
        </div>
    )
}

export default MainPageSplashScreen;