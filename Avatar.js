import React, { Component } from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';


class Avatar extends Component{
    constructor(){
super();
this.state = {
    name : "Welcome to Good Avatar world"
}
    }
    namechange(){
        this.setState({
            name: "Please like my Effort"
        })
    }

   
render(){
    const avatarlistarray = [
        {
        id:1,
        name:"Abhinav",
        work:"web developer"
        
        },
        {
            id:2,
            name:'Yadav',
            work:' developer'
            
            },
            {
                id:3,
                name:'Anurag',
                work:'me developer'
                
                },
                {
                    id:4,
                    name:'Yadav',
                    work:'hum developer'   
                }
        ]
    const arrayavatarcard =     avatarlistarray.map((avatarcard,i) =>{
return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name}
                                                work={avatarlistarray[i].work} />

}
)


    return (
        <div className="mainpage">
        <h1> {this.state.name} </h1>
{arrayavatarcard}

<button onClick= {() => this.namechange()  }> LIKE</button>
</div>
    )
}

}


export default Avatar;