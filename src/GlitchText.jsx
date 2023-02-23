import React from "react";

class GlitchText extends React.Component {
  componentDidMount = () => {
    this.glitch();
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeout1);
    clearTimeout(this.timeout2);
  };

  state = {
    titles: ["Work hard", "Play hard",],
    currentTitle: 0,
    gltiching: false,
    delayTimer: 3000,
    glitchTimer: 1000,
  };

  glitch = () => {
    let { currentTitle, titles, gltiching, glitchTimer, delayTimer } =
      this.state;
    currentTitle = currentTitle + 1 < titles.length ? currentTitle + 1 : 0;

    this.setState(
      {
        currentTitle: currentTitle,
        gltiching: false,
      },
      () => {
        this.timeout1 = setTimeout(() => {
          this.setState(
            {
              gltiching: true,
            },
            () => {
              this.timeout2 = setTimeout(() => {
                this.glitch();
              }, glitchTimer);
            }
          );
        }, delayTimer);
      }
    );
  };

  render() {
    let { titles, currentTitle, gltiching } = this.state;

    let titleClasses = ["glitch", gltiching ? "glitching" : null];

    return (
      <div className="App">
        <h1 className={titleClasses.join(" ")} data-text={titles[currentTitle]}>
          {titles[currentTitle]}
        </h1>
      </div>
    );
  }
}

export default GlitchText;
