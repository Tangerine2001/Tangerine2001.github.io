import '../stylesheets/fonts.css'
import '../stylesheets/MainPage.css';

import MainPageLinks from "../misc/MainPageComponents/MainPageLinks";
import MainPageDownloads from "../misc/MainPageComponents/MainPageDownloads";
import MainPageAbout from "../misc/MainPageComponents/MainPageAbout";
import MainPageProjects from "../misc/MainPageComponents/MainPageProjects";
import MainPageSplashScreen from "../misc/MainPageComponents/MainPageSplashScreen";

function MainPage() {
    return (
            <div>
                <MainPageSplashScreen />
                <MainPageProjects />
                <MainPageAbout />
                <MainPageDownloads />
                <MainPageLinks />
            </div>
    );
}

export default MainPage;