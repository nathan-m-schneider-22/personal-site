import React from 'react';
import '../styles/engs.scss';
import collected from '../media/valorant/data_collected.png';
import comp from '../media/valorant/win_rate_comp.png';

class Valorant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          <h1> Comfort Pick: A statistical study of Valorant matches</h1>
        </div>
        <div className="engs">

          <div className="engs-section">
            <div className="engs-text">
              <h2>Background</h2>
              <p>
                Valorant is a free-to-play tactical shooter game for the PC. To win, you&apos;ll need quick reflexes,
                strategic planning, and strong teamwork. At the start of the game, each team of five picks their &quot;agents&quot;, their player characters.
                <br />
                Each agent has different abilities, and they are grouped into &quot;roles&quot;.
                The Controller role agents use their abilities to obscure sightlines, denying their opponents information
                and shaping the battlefield. These agents are optimal for a team to have, and pro teams always have at least one, however many people
                find them boring to play.
                <br />
                <br />
                Often your whole team will choose to play non-controllers, leaving you with a choice:
                <ol>
                  <li>&quot;Fill&quot; this essential role, and empower the team</li>
                  <li>Pick a role you&apos;re more comfortable with, and play with a worse team composition</li>
                </ol>
                If you do not mainly play controller (&quot;main&quot; controller), your decision here can impact your team&apos;s chance of winning.
                <br />
                <br />
                Or does it?
              </p>
            </div>
          </div>
          <div className="engs-section">
            <div className="engs-text">
              <h2>Data Collection</h2>
              <p>
                I used the <a href="https://docs.henrikdev.xyz/valorant.html">Henrik Dev</a> unofficial API to collect match data.
                <br />
                Specifically, I used the match history for player endpoint, and started with myself.
                After receiving match data for my last 5 matches, I then queued and requested the last 5 matches for every other player in that game. Then repeated, in the crawler-like fashion.
                <br />
                Check out my <a href="https://github.com/nathan-m-schneider-22/playground/tree/main"> Playground Repository </a>
                for the code I wrote, and also for other mini-projects I make in my spare time.
                <br />
                This method would provide me with a significant amount of duplicate match data, however it had one benefit.
                It would allow me to see the match history for all players for the greatest number of matches.
                I needed this to see if a player who picked a controller was a &quot;main&quot; or a &quot;fill&quot;
                <br />
                <br />
                I collected ~200GB of player match history, focused mainly on the ranks that me and my friends play in (Silver-Diamond).
                This included over 78 thousand unique matches, which should be enough to settle the matter.
              </p>
            </div>
            <img src={collected} className="val-pic" alt="a graph of data collected, showing a lot of platinum and diamond games" />

          </div>
          <div className="engs-section">
            <img src={comp} className="val-pic" alt="a graph of win rates, showing there's no difference between fill and no controller" />
            <div className="engs-text">
              <h2>Results</h2>
              <p>
                Controllers are undoubtedly important. If you don&apos;t have a controller main on your team, your average win rate will be 1-3% lower (p&lt;0.00084) than teams that do.
                However, your choice to fill or ignore team composition doesn&apos;t matter.
                <br />
                <br />

                After 78 thousand games, there is no statistical difference in win rates for teams with no controller when compared to teams with a filled controller.
                <br />
                This can be seen in the overlapping 95% confidence intervals.
                <br />
                <br />
                However, we can be more specific. The difference in win rate between no controller and fill controller is less than half a percent (p&lt;0.042).
              </p>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Valorant;
