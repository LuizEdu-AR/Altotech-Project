import './styles.css'

const News = () => {
  return (
    <div className='news-container'>
        <h3>RECEBA NOVIDADES</h3>
        <div className="form-containter">
            <form>
                <input type="text" name='Nome' placeholder='Nome*' className='news-input'/>
                <input type="text" name="Email" placeholder='Email*' className='news-input'/>
                <input type="submit" value="Cadastrar" className='submit-news'/>
            </form>
        </div>
    </div>
  )
}

export default News