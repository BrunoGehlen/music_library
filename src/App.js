import { Component } from 'react';
import './App.css';
import Album from './Album'


class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state ={
      albums: null,
      loading: true,
      searchValue: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleSubmit(event) {
    this.setState({searchValue:event.target.value})
    this.makeRequest()
    event.preventDefault();
  }

  async componentDidMount(){
    // this.makeRequest()
  }

  async makeRequest(){
    let params = this.state.searchValue

    const api_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${params}&api_key=f94d5b07fba72d6e014d0844423a1fd4&format=json`
    const response = await fetch(api_URL)
    const data = await response.json()
    const albums = await data.topalbums.album
        
     this.setState({albums: albums})
     this.setState({loading: false})
  }

  render(){
    const { loading } = this.state
    const { albums } = this.state
    const { searchValue } = this.state 
    

    return (
      <div className="App" refresh={this.state.searchValue}>
        <header className="App-header">
            <div className='Search'>
              <form onSubmit={this.handleSubmit} className='Search-Form'>
                <label className='Search-label'>
                  <input className='Search-text-input' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Find a band' />
                </label>
                <input className='Search-button-input' type="submit" value="Search" />
              </form>
            </div>
            {console.log(this.state.searchValue)}
          {albums ? 
          albums.map((album,index) => <Album key={index} album={album} loading={loading} />):
          <div></div>}
        </header>
      </div>
    )
    }
  }
  

export default App;
