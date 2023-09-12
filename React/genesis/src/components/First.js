
function First(props){
return <div>
      <h1>{props.my} app</h1>
      <p>my application</p>
      <button onClick={props.toggle}>my button</button>
     </div>
}
export default First;