import '../../stylesheets/fonts.css'
import '../../stylesheets/MainPage.css';

import ProjectNavbar from "../../Components/ProjectNavbar";
import MainPageLinks from "./MainPageLinks";
import MainPageDownloads from "./MainPageDownloads";
import MainPageAbout from "./MainPageAbout";
import MainPageProjects from "./MainPageProjects";
import MainPageSplashScreen from "./MainPageSplashScreen";

function MainPage() {
    return (
            <div>
                <ProjectNavbar />
                <MainPageSplashScreen />
                <MainPageProjects />
                {/*<MainPageAbout />*/}
                {/*<MainPageDownloads />*/}
                {/*<MainPageLinks />*/}
            </div>
    );
}

export default MainPage;