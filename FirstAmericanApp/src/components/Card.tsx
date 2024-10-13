import FirstAmericanLogo from '/src/assets/FirstAmericanLogo.png'

function Card(){

    return(
        <div className='content flex py-2 gap-4 items-center'>
          <img className = "w-24 h-24 rounded-full object-left-top" src= {FirstAmericanLogo} alt="" width= "384" height="512"/>
          <h1 className='text-lg text-blue-300 p-2 rounded-md'>First American App</h1>
        </div>
    )
}



export default Card