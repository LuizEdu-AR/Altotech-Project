import './styles.css'

const News = () => {
  return (
    <div className='news-container'>
        <h3>RECEBA NOVIDADES</h3>
        <div className="form-containter">
            <form>
                <input type="text" name='Nome' placeholder='Nome*' />
                <input type="text" name="Email" placeholder='Email*' />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    </div>
  )
}

export default News