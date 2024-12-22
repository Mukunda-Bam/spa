import { FaDumbbell } from "react-icons/fa6";
import Girls from './assets/girls.jpg';
import { IoBarChartOutline } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import './App.css'

function App() {


  return (
    <>
      <div className='App'>
        <div className='spa-1'>
          <div className='spa-3'>
            <div className='spa-4'><FaDumbbell /></div>
            <div className='spa-5'>FITNESXIA</div>
            <div className='spa-6'>Home</div>
            <div className='spa-7'>About Us</div>
            <div className='spa-8'>Program</div>
            <div className='spa-9'>Membership</div>
            <div className='spa-10'>Testimonials</div>
            <div className='spa-11'>Sign Up</div>
          </div>

          <div className='spa-12'>
            <div className='spa-13'>
              <div className='spa-15'>GET HEALTHY BODY <br />WITH THE PERFECT </div>
                <div className='spa-16'>EXERCISES</div>
                <div className='spa-19'>We are always there to help you to make a healthy body </div>
                <div className='spa-20'>and mind through power of fitness</div>
             <div className='spa-21'>
               <div className='spa-22'>Get Started</div>
               <div className='spa-23'><div className='spa-24'><FaPlayCircle /></div><div className='spa-25'>Watch Video</div></div>
             </div>

             <div className='spa-26'>
              <div className='spa-27'>
                <div className='spa-28'>150+</div>
                <div className='spa-29'>Expert Trainers</div>
              </div>
              <div className='spa-30'>|</div>
              <div className='spa-31'>
                <div className='spa-32'>970+</div>
                <div className='spa-33'>Members Joined</div>
              </div>
              <div className='spa-30'>|</div>
              <div className='spa-34'>
                <div className='spa-35'>135+</div>
                <div className='spa-36'>Fitness Programs</div>
              </div>
             </div>

              </div>
                <div className='spa-14'><img className='spa-17'src={Girls} width='600px' height='490px' alt='img not available' />
                <div className='spa-18'>150 Cal<IoBarChartOutline /></div>
                </div>
          
          </div>
        </div>

        <div className='spa-2'>
          
        </div>

      </div>
    </>
  )
}

export default App
