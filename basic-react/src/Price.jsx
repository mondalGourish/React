function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecoration : "line-through",
        color:"black",
    };
    let newStyles = {
        fontWeight : "bold",
        color:"black",
    };
    let styles = {
        backgroundColor : "pink",
        height : "30px",
        borderBottomLeftRadius : "15px",
        borderBottomRightRadius : "15px",

    };
  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
export default Price;
