import React, { Component } from 'react';
import Block from "./blocks";
import "./css/maingame.css";


export default class Maingame extends Component {
    constructor(props){
        super(props);
        this.state={
            playerX:"its X turn",
            playerO:"its O turn",
            isX:false,
            value:"O",
            array:Array(9).fill(null),
            winner:false,
            winnername:""
        }
    }
    handlevalue=(i)=>{
        let arr=this.state.array;
        if(arr[i]===null&&this.state.winner===false){
             arr[i]=this.state.isX?"X":"O";
            this.setState({
                isX:!this.state.isX,
                array:arr
            })  
            this.winner() 
        }   
    }
   winner=()=>{
       const samplearray=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        let data=this.state.array;
        let playerx=this.state.isX;
        if(!this.state.array.includes(null)&&this.state.winner===false){
            this.setState({
                winnername:"its a DRAW",
                playerO:"",
                playerX:""

            })
         }
            for(let i=0;i<samplearray.length;i++){
                const [a,b,c]=samplearray[i];
                if(data[a]&&data[a]===data[b]&&data[b]===data[c]){
                 if(playerx){
                     this.setState({
                         winnername:"X is a Winner",
                         playerO:"",
                         playerX:""
     
                     })
                 } else{
                     this.setState({
                         winnername:"O is a Winner",
                         playerO:"",
                         playerX:""
     
                     })
                 }
                 this.setState({
                     winner:true
                 })
             }
          
             }
    }
    playagain=()=>{
   
        this.setState({
            playerX:"its X turn",
            playerO:"its O turn",
            isX:this.state.isX,
            value:"O",
            array:Array(9).fill(null),
            winner:false,
            winnername:""
        })
    }
    render() {
        return (
            <div className="blockset">
                <div className="set">
                <Block onClick={()=>this.handlevalue(0)}> {this.state.array[0]}</Block>
                <Block onClick={()=>this.handlevalue(1)}> {this.state.array[1]} </Block>
                <Block onClick={()=>this.handlevalue(2)}> {this.state.array[2]} </Block>
                </div>
                <div className="set">
                <Block onClick={()=>this.handlevalue(3)}> {this.state.array[3]} </Block>
                <Block onClick={()=>this.handlevalue(4)}> {this.state.array[4]} </Block>
                <Block onClick={()=>this.handlevalue(5)}> {this.state.array[5]} </Block>
                </div>
                <div className="set">
                <Block onClick={()=>this.handlevalue(6)}> {this.state.array[6]} </Block>
                <Block onClick={()=>this.handlevalue(7)}> {this.state.array[7]} </Block>
                <Block onClick={()=>this.handlevalue(8)}> {this.state.array[8]} </Block>
                </div>
                <h1>{this.state.isX?this.state.playerX:this.state.playerO}{this.state.winnername}</h1>
                <button className="btn" onClick={this.playagain}>PLAY AGAIN</button>
            </div>
        )
    }
}
