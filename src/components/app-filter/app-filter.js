import './app-filter.css'
const AppFilter = () => {
  return (
    <div className='app-filter'>
      <button type='button' className='btn btn-dark'>
        <i>Barcha kinolar</i>
      </button>
      <button type='button' className='btn btn-outline-dark'>
        <i>Mashhur kinolar</i>
      </button>
      <button type='button' className='btn btn-outline-dark'>
        <i>Eng kop korilgan kinolar</i>
      </button>
    </div>
  )
}

export default AppFilter
