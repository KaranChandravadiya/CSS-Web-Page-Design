import './App.css'
import CurrentCompany from './Components/CurrentComponay'
import GradeCard from './Components/GradeCard'
import Header from './Components/Header'
import LiveJobs from './Components/LiveJobs'
import PreviousCompany from './Components/PreviousCompany'
import JobApplication from './Components/JobApplication'
import RecommendedJobs from './Components/RecommendedJobs'

function App() {

  return (
    <>
      <div className='container bg-blue'>
          <Header />
          <CurrentCompany />
          <PreviousCompany />
          <GradeCard />
          <JobApplication />
          <RecommendedJobs />
          <LiveJobs />
      </div>
    </>
  )
}

export default App
