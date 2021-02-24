import React, { Component } from 'react'

class API extends Component {
    constructor(){
        super();

        this.state ={
            items:[]
        }
    } //end of constractor
    componentDidMount = async()=>{
        let url = "https://api.openei.org/utility_rates?version=3&format=json&api_key=QEt2azfFn2WpwzMIync2gK4DFSGkelvLTwV1nbJi"
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        
        this.setState({
            items: data.items
        },()=>{
            console.log(this.state.items);
        })
    } //end of componentDidMount

    render() {
        const {items}= this.state
        let item = items.map((obj)=>{
            return <li key={obj.lable}>
                
                Name: {obj.name} <br />

                Utility: {obj.utility}
                <br />

                Sector: {obj.sector}
                <br />
                <a href={obj.uri} target="_blank">More Information</a>
            </li>

        })

        // const {items}= this.state
        // let item = items.map((obj)=>{
        //     return <div className="card" style="width: 18rem;" key={obj.lable}>
        //                 <div className="card-body">
        //                 <h5 className="card-title">Name: {obj.name}</h5>
        //                 <h6 className="card-subtitle mb-2 text-muted"> Utility: {obj.utility}</h6>
        //                 <p className="card-text">Sector: {obj.sector}</p>
        //                 <a href={obj.uri} target="_blank">More Information</a>

        //                 </div>
        //             </div>
        // })
        return (
        <>
            {item}
        </>
        )
    }
    }

export default API
