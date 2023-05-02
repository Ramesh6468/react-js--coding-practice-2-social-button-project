const Button = (props) => {
  const { className, text } = props;
  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="tittle">Social Buttons</h1>
    <div class="buttons-container">
      <Button className="button1" text="Like" />
      <Button className="button2" text="Comment" />
      <Button className="button3" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
