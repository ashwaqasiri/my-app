import React from 'react';

export default class Characters extends React.Component {

    constructor(props){
    super(props);
    this.state = {
        users: []
    }
    }
    
    componentDidMount() {
        fetch('https://hp-api.herokuapp.com/api/characters')
        .then((response) => response.json())
        .then(characters => {
            this.setState({ users: characters });
           
        })
        .catch(e => console.log(e.message))
    }

    componentDidUpdate(){
        console.log('updated')
    }

    
    render() {
        return (
                <div>
                    {this.state.users.map((user)=>(
                        <div>
                            <p>{user.name}</p>
                            <img src={user.image}/>
                        </div>
                    ))}
                </div>

        )
    }
}









    {/* <button onClick={()=> this.setState({name:'Ahmad'})}>  {this.state.name} </button> */}