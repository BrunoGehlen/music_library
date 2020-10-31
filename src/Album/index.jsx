import {Component}from 'react'
import './Album.css'

class Album extends Component{

    state = {
        
    }

    render(){
        // {console.log(this.props)}
        const { loading } = this.props
        const { album } = this.props

        // {console.log(loading)}
        return(
        <div>
            { loading ? 
             <div> 
                 Loading.. 
             </div>: 
             <div className='Album-card'> 
                 <img src={album.image[3]['#text']} className="Album-photo" alt="logo" />
                 <div className='Album-content'> 
                     <div className='Album-name'>{album.name}</div> 
                     <div className='Artist-name'>{album.artist.name}</div> 
                 </div> 
             </div> }
        </div>
        )
    }
}

export default Album