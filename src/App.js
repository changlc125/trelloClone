function App() {
  return (
    <div className="trello-master">
      <nav className="navbar app">App bar </nav>
      <nav className="navbar board">Board bar </nav>
      <div className="board-columns">
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png" />
              Design & Research
            </li>
            <li>second</li>
            <li>third</li>
            <li>second</li>
            <li>third</li>
            <li>second</li>
            <li>third</li>
            <li>third</li>
            <li>second</li>
            <li>third</li>
          </ul>
          <footer>Add another card</footer>
        </div>

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png" />
              Design & Research
            </li>
            <li>second</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
