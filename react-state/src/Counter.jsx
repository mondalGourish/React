let count = 0;

function incCount(){
    count+=1;
    console.log(count);
}
function Counter(){
    return(
        <div>
            <h4>Increase count implemented normally</h4>
            <p>Count = {count}</p>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}
export default Counter;