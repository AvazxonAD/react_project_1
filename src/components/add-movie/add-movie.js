import './add-movie.css'

const AddMovie = () => {
    return (
        <div className='add-movie'>
            <h3> Yangi kino qoshish</h3>
            <form className='add-form d-flex'>
                <input type='text' className='form-control new-post-label' placeholder='Qandat kino ?' />
                <input type='number' className='form-control new-post-label' placeholder='Nechi marotaba ko`rilgan ?' />
                <button type='button' className=' btn btn-outline-dark' > Qo'shish </button>
            </form>
        </div>
    )
}

export default AddMovie
