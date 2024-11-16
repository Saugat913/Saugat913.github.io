import './App.css'

import NavigationBar from "./components/NavBar.jsx";
import SocialBar from "./components/SocialBar.jsx";
import HomePage from "./Pages/HomePage.jsx"
import ProjectPage from "./Pages/ProjectPage.jsx"
import AboutMePage from './Pages/AboutMePage.jsx';

function App() {


  return (
    <div className='overflow-y-scroll h-full w-full'>
      {/* Navigation Section */}
      <NavigationBar></NavigationBar>
      <SocialBar></SocialBar>


      <div class="flex h-full">
        <div className=' pl-10 flex left-20 w-full'>
          <div className='flex  flex-col h-full w-full'>
            {/* Home Main Section */}
            <div className='min-h-[98%]'>
              <HomePage />
            </div>
            <ProjectPage />
            <AboutMePage />
          </div>
        </div>
      </div>
    </div>

  )
}

export default App


//{/* <div className='flex flex-1 flex-col h-full'>
//{/* Home Main Section */}
//<HomePage></HomePage>
//<ProjectPage></ProjectPage>
//<AboutMePage></AboutMePage>
//</div> */}


