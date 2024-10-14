import FirstAmericanLogo from '/src/assets/FirstAmericanLogo.png'
import ThemeToggle from './ThemeToggle'
import {Link} from 'react-router-dom'

function HeaderHomePage({username = 'Unknown User'}){

    return(
      <div>
        <div className='absolute top-0 right-1 h-16 w-16 mt-2 mr-4'>
        <ThemeToggle />
        </div>
        <div className='content flex py-2 gap-4 items-center'>
          <img className = "w-24 h-24 rounded-full object-left-top" src= {FirstAmericanLogo} alt="" width= "384" height="512"/>
          <h1 className='text-lg text-blue-300 p-2 rousnded-md'>First American App</h1>
        </div>
         
          <div>
            <h2 className='text-black dark:text-white'>Welcome {username}</h2>
            <p className='text-black dark:text-white'>Select the service you would like to use:</p>
          </div>
     
          <div className='flex mt-5 gap-2 items-center'>
            <button className='w-96 ml-64 text-white dark:text-white ' >View Metrics</button>
            <button className='w-96 text-white dark:text-white'>Submit A Request</button>
          </div>

          <div className='flex mt-5 gap-2 items-center'>
            <Link to ="/documentation">
            <button className='w-96 ml-64 text-white dark:text-white ' >Check Documentation</button>
            </Link>
            <button className='w-96 text-white dark:text-white '>View 3 Dimensional Systems</button>
          </div>
        </div>
    )
}



export default HeaderHomePage