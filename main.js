const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter(){
    const [countNum,setCountNum]= React.useState(0)
    // const incCount = ()=>{
    //     setCountNum(countNum+1)
    // }
    // const incCount1 = ()=>{
    //     setCountNum(Math.max(0, countNum - 1)) 
    // }
    // const resetCount = () => {
    //     setCountNum(0)
    // }
  // return(
    //     <div className='counter'>
    //         <button onClick = {incCount1}>-</button>
    //         <h3>{countNum}</h3>
    //         <button onClick = {incCount}>+</button>
    //         <button onClick = {resetCount}>C</button>
            
    //     </div>
    // )
    const undateCounter = (n)=>{
        if(countNum+n<0){
            return
        }
        // setCountNum((prv)=>{
        //     console.log(prv)
        //     return prv+n
        // })
        // setCountNum(prv =>prv +n)
        setCountNum(countNum +n)
        console.log(countNum)
    }
    return(
        <div className='counter'>
            <button onClick = {()=>undateCounter(-1)}>-</button>
            <h3>{countNum}</h3>
            <button onClick = {()=>undateCounter(1)}>+</button>
            <button onClick = {()=>undateCounter(-countNum)}>C</button>
            
        </div>
    ) 
}
function SumInfo(props){
    console.log(props)
    const stTitle = {
        color : props.color,
        fontSize : props.size==='big' ? '50px' : '40px'
    }
    return(
        <div className = 'numInfo'>
            {/* {<h1 style={stTitle}>Sum = 0<h1/>} */}
            <h1 style={{color: props.color,fontSize:'50px'}}>Sum = 0</h1>
        </div>
    )
}

function App(){
    return(
        <>
        <h1>Codecamp Academy 01</h1>
        <SumInfo color="blue" size="big"/>
        <Counter/>
        {/* {Counter()} */}
        </>
    )
}