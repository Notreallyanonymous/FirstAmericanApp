import FirstAmericanLogo from '/src/assets/FirstAmericanLogo.png'

function HeaderHomePage({username = 'Unknown User'}){

    return(
      <>
        <div className='content flex py-2 gap-4 items-center'>
          <img className = "w-24 h-24 rounded-full object-left-top" src= {FirstAmericanLogo} alt="" width= "384" height="512"/>
          <h1 className='text-lg text-blue-300 p-2 rounded-md'>First American App</h1>
        </div>
         
          <div>
            <h2>Welcome {username}</h2>
            <p>Select the service you would like to use:</p>
          </div>
     
          <div className='flex mt-5 gap-2 items-center'>
            <button className='w-96 ml-64' >View Metrics</button>
            <button className='w-96'>Submit A Request</button>
          </div>

          <div className='flex mt-5 gap-2 items-center'>
            <button className='w-96 ml-64' >Check Documentation</button>
            <button className='w-96'>Submit A Request</button>
          </div>
        </>
    )
}



export default HeaderHomePage