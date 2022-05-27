import cartpole1 from "../../../images/CartPole/cartpole1.png";
import cartpole2 from "../../../images/CartPole/cartpole2.png";
import cartpoleResultsv1 from "../../../images/CartPole/CartPoleResultsv1.png";
import cartpoleResultsv2 from "../../../images/CartPole/CartPoleResultsv2.png";
import cartpoleResultsv3 from "../../../images/CartPole/CartPoleResultsv3.png";

import mountaincar1 from "../../../images/MountainCar/mountaincar1.png";
import mountaincar2 from "../../../images/MountainCar/mountaincar2.png";
import mountaincarResultsv16 from "../../../images/MountainCar/MountainCarAgentv16.png";

import nnNoHiddenCart from "../../../images/CartPole/NNnoHiddenLayers.png";
import nnNoHiddenMountain from "../../../images/MountainCar/NNnoHiddenLayers.png"

function ClassicControl() {
    const openLinkInNewWindow = (link) => {
        window.open(link)
    };

    const adamLink = "https://machinelearningmastery.com/adam-optimization-algorithm-for-deep-learning/";
    const rmsPLink = "https://towardsdatascience.com/understanding-rmsprop-faster-neural-network-learning-62e116fcf29a"
    const seaborn = "https://seaborn.pydata.org/"
    const github = "https://github.com/Tangerine2001"

    return (
        <div className="project-content">
            <div className="center">
                <h1>Classic Control</h1>
            </div>
            <p id="CartPole">
                Without a doubt the easiest problems provided by OpenAI Gym, the classic controls games
                are a set of continuous environments with a well-defined output and a small range of available
                inputs. This page will go over my thought process and thinking behind each scenario I tackled.
            </p>
            <h2>
                CartPole
            </h2>
            <p>
                If you've taken a look at the OpenAI Gym problems yourself, then you likely started with
                the CartPole problem, just as I did. Here is what a cart pole look like:
            </p>
            <div className="center">
                <img className="project-content-image" src={ cartpole1 } alt="CartPole static"/>
            </div>
            <p>
                The objective of this game is simple:
                <span className="crimson-text"> balance the pole on the cart.</span>
                <p>
                    Most humans are capable of performing this task fairly well. Assuredly, many who
                    attempt this game will see improvement after only a few tries.
                </p>
                Before we start, we must first look at what we are given. Looking at the OpenAI documentation,
                we have 4 <span className="var env-var">outputs</span> we get from an instance of the game:
                <ul>
                    <li className="project-content-li">
                        X-Position: <norm>
                                        The horizontal position of the cart. Middle is 0. Positive positions are on
                                        the right, negative positions on the left.
                                    </norm>
                    </li>
                    <br />
                    <li className="project-content-li">
                        X-Velocity: <norm>
                                        The horizontal velocity at any given moment. Not moving is 0.
                                        Moving right is positive, moving left is negative.
                                    </norm>
                    </li>
                    <br />
                    <li className="project-content-li">
                        Angular Velocity: <norm>
                                                The velocity at which the angle of the pole with the cart is falling.
                                                Falling right is positive, left is negative
                                          </norm>
                    </li>
                    <br />
                    <li className="project-content-li">
                        Angular Acceleration: <norm>
                                                The rate of change of the angular velocity. Positive values mean that
                                                the angular velocity is increasing. Vice versa for negative values. 0
                                                is rare, but it means that the angular velocity is not changing.
                                              </norm>
                    </li>
                </ul>
            </p>
            <div className="center">
                <img className="project-content-image-1-25x" src={ cartpole2 } alt="Cartpole labeled" />
            </div>
            <p>
                These <span className="var env-var">outputs</span> from the environment will be our
                <span className="var nn-var"> inputs</span> to the neural network. Now, we need to decide
                what the <span className="var nn-var"> output</span> of the neural network needs to be to match the
                <span className="var env-var"> inputs</span> of the environment. Here are
                the <span className="var env-var"> inputs</span> to the environment:
            </p>
            <div className="center">
                <table>
                    <thead>
                        <tr>
                            <th><p>Num</p></th>
                            <th><p>Action</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>0</p></td>
                            <td><p>Push cart to the left</p></td>
                        </tr>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>Push cart to the right</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                Now that we have the size of the inputs and outputs of the environment, that means that
                we have the input and output size of our neural network. Here is what the neural network
                would look like without any hidden layers:
            </p>
            <div className="center">
                <img className="project-content-image-1-25x" src={ nnNoHiddenCart } alt="NN with no hidden layers" />
            </div>
            <p>
                This is a <span style={{color: "olive", margin: "0 0 0 0"}}>continuous</span> neural network.
                In other words, the green output nodes that represent "0" and "1" are both continuous (decimal
                values), not discrete. To choose which one to pass into the program, we only need to select
                the higher of the two. Now all we need to do is to select how many hidden layers we want, and
                how many nodes are on each level.
            </p>
            <p>
                Note: I use the word "nodes" to reference what are actually called "Perceptrons" in the AI world.
                I avoid the use of Perceptron for the sake of simplicity and not wanting to sound like a snob.
            </p>
            <p>
                I decided on the following layouts for my neural networks:
            </p>
            <div className="center-table">
                <div className="no-margin">
                    <div className="center no-margin">
                        <h3 className="agent-header">CartPole Agents v1</h3>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th><p>Version</p></th> <th><p>Layers</p></th> <th><p>Node Count</p></th>
                            <th><p>Optimizer</p></th> <th><p>Win Condition</p></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><p>1.0</p></td> <td><p>1</p></td> <td><p>128</p></td> <td><p>Adam</p></td> <td><p>1 total</p></td>
                        </tr>
                        <tr>
                            <td><p>1.1</p></td> <td><p>1</p></td> <td><p>128</p></td> <td><p>RMSProp</p></td> <td><p>1 total</p></td>
                        </tr>
                        <tr>
                            <td><p>1.2</p></td> <td><p>3</p></td> <td><p>256, 128, 64</p></td> <td><p>Adam</p></td> <td><p>1 total</p></td>
                        </tr>
                        <tr>
                            <td><p>1.3</p></td> <td><p>3</p></td> <td><p>256, 128, 64</p></td> <td><p>RMSProp</p></td> <td><p>1 total</p></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="no-margin">
                    <div className="center no-margin">
                        <h3 className="agent-header">CartPole Agents v2</h3>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th><p>Version</p></th> <th><p>Layers</p></th> <th><p>Node Count</p></th>
                            <th><p>Optimizer</p></th> <th><p>Win Condition</p></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><p>2.0</p></td> <td><p>1</p></td> <td><p>128</p></td> <td><p>Adam</p></td> <td><p>2 consecutive</p></td>
                        </tr>
                        <tr>
                            <td><p>2.1</p></td> <td><p>1</p></td> <td><p>128</p></td> <td><p>RMSProp</p></td> <td><p>2 consecutive</p></td>
                        </tr>
                        <tr>
                            <td><p>2.2</p></td> <td><p>3</p></td> <td><p>256, 128, 64</p></td> <td><p>Adam</p></td> <td><p>2 consecutive</p></td>
                        </tr>
                        <tr>
                            <td><p>2.3</p></td> <td><p>3</p></td> <td><p>256, 128, 64</p></td> <td><p>RMSProp</p></td> <td><p>2 consecutive</p></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="center-table">
                <div className="no-margin">
                    <div className="center no-margin">
                        <h3 className="agent-header">CartPole Agents v3</h3>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th><p>Version</p></th> <th><p>Layers</p></th> <th><p>Node Count</p></th>
                            <th><p>Optimizer</p></th> <th><p>Win Condition</p></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><p>3.0</p></td> <td><p>1</p></td> <td><p>128</p></td> <td><p>Adam</p></td> <td><p>5 total</p></td>
                        </tr>
                        <tr>
                            <td><p>3.1</p></td> <td><p>1</p></td> <td><p>128</p></td> <td><p>RMSProp</p></td> <td><p>5 total</p></td>
                        </tr>
                        <tr>
                            <td><p>3.2</p></td> <td><p>3</p></td> <td><p>256, 128, 64</p></td> <td><p>Adam</p></td> <td><p>5 total</p></td>
                        </tr>
                        <tr>
                            <td><p>3.3</p></td> <td><p>3</p></td> <td><p>256, 128, 64</p></td> <td><p>RMSProp</p></td> <td><p>5 total</p></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>
                To explain the content of the tables in further detail:
                <ul className="gap">
                    <li className="project-content-li-orange">
                        x.0 <norm>and</norm> x.1 <norm>had</norm> 1 layer <norm>and exactly</norm> 128 nodes<norm>.</norm>
                    </li>
                    <li className="project-content-li-orange">
                        x.2 <norm>and</norm> x.3 <norm>had</norm> 3 layers <norm>and exactly</norm> 256
                        <norm>,</norm> 128<norm>,</norm> 64 nodes<norm>,</norm> <norm>correspondingly.</norm>
                    </li>
                    <li className="project-content-li-orange">
                        <span className="link" onClick={() => openLinkInNewWindow(adamLink)}>Adam</span>
                        <norm> and </norm> <span className="link" onClick={() => openLinkInNewWindow(rmsPLink)}> RMSProp </span>
                        <norm>are neural network optimization methods. They differ in
                        how they take the derivative of the activation function. Click on each one to read further.</norm>
                    </li>
                    <li className="project-content-li-orange">
                        <norm>A</norm> win condition <norm>in CartPole is defined as the agent staying alive for 500 frames. Their </norm>
                        score <norm>is the number of frames they survived</norm>
                    </li>
                    <li className="project-content-li-orange">
                        v1 <norm>agents' win condition is</norm> 1 win<norm>. This means the agent would stop playing
                        as soon as they "win". The state of the agent's neural network at that point would get saved</norm>
                    </li>
                    <li className="project-content-li-orange">
                        v2 <norm>agents' win condition is</norm> 2 consecutive wins<norm>. This means the agent would stop playing
                        as soon as they "win" 2 games in a row.</norm>
                    </li>
                    <li className="project-content-li-orange">
                        v3 <norm>agents' win condition is</norm> 5 wins<norm>. This means the agent would stop playing
                        as soon as they "win" 5 times. The state of the agent's neural network at that point would get saved</norm>
                    </li>
                </ul>
                The models were trained using the above architectures. Each agent was given a maximum of 3000 games to
                reach their win condition before being sent to testing.
            </p>
            <p className="bigger">
                Testing
            </p>
            <p>
                In the testing phase, each agent was asked to play 200 games.
                The results were graphed using <span className="link env-var" onClick={() => openLinkInNewWindow(seaborn)}>seaborn.</span>
            </p>
            <div className="center-image">
                <div className="center-vertically no-margin">
                    <h3 className="agent-header">CartPole Agents v1</h3>
                    <img className="project-content-image-1-5x" src={ cartpoleResultsv1 } alt="Results of the v1 agents."/>
                </div>
                <div className="center-vertically">
                    <h3 className="agent-header">CartPole Agents v2</h3>
                    <img className="project-content-image-1-5x" src={ cartpoleResultsv2 } alt="Results of the v2 agents."/>
                </div>
            </div>
            <div className="center-image">
                <div className="center-vertically">
                    <h3 className="agent-header">CartPole Agents v3</h3>
                    <img className="project-content-image-1-5x" src={ cartpoleResultsv3 } alt="Results of the v3 agents."/>
                </div>
            </div>
            <p id="Mountain Car">
                Each point on the graph indicates the final score of an agent in a particular game session during testing.
                From these graphs, it is clear that there are two perfect winners:
                <div className="center-image">
                    <ul className="no-dot">
                        <li className="project-content-li-orange">
                            v2.3
                        </li>
                    </ul>
                    <ul className="no-dot">
                        <li className="project-content-li-orange">
                            v3.2
                        </li>
                    </ul>
                </div>
                These two agents were trained to perform perfectly in this environment. You can see my code for how I generated
                them in my <span className="link" onClick={() => openLinkInNewWindow(github)}>Github</span> page under "RLAgents".
            </p>

            {/* Separation between CartPole and Mountain Car */}
            <h2>Mountain Car</h2>
            <p>
                The next problem I worked on was the Mountain Car problem. Here is what it looks like:
            </p>
            <div className="center">
                <img className="project-content-image-1-25x" src={ mountaincar1 } alt="Mountain car static"/>
            </div>
            <p>
                The objective of this game is a bit more difficult:
                <span className="crimson-text"> get the car to the flag.</span>
                <p>
                    This game is arguably easier for humans than CartPole was. However, it is a bit
                    more difficult for AI systems as it is harder for them to determine what a good
                    game state is. We cannot use the "the longer it stays alive the better it is" strategy
                    since the car would then have no motivation to move. So the question here is, how do
                    we determine what a good game state is?
                </p>
                Again, we must first look at what we are given. Looking at the OpenAI documentation,
                we have 2 <span className="var env-var">outputs</span> we get from an instance of the game:
                <ul>
                    <li className="project-content-li">
                        X-Position: <norm>
                        The horizontal position of the cart. Middle is 0. Positive positions are on
                        the right, negative positions on the left.
                    </norm>
                    </li>
                    <br />
                    <li className="project-content-li">
                        X-Velocity: <norm>
                        The horizontal velocity at any given moment. Not moving is 0.
                        Moving right is positive, moving left is negative.
                    </norm>
                    </li>
                </ul>
            </p>
            <div className="center">
                <img className="project-content-image-1-25x" src={ mountaincar2 } alt="mountain car labeled" />
            </div>
            <p>
                Here are the <span className="var env-var"> inputs</span> we need to provide to the environment:
            </p>
            <div className="center">
                <table>
                    <thead>
                    <tr>
                        <th><p>Num</p></th>
                        <th><p>Action</p></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><p>0</p></td>
                        <td><p>Accelerate to the left</p></td>
                    </tr>
                    <tr>
                        <td><p>1</p></td>
                        <td><p>Don't accelerate</p></td>
                    </tr>
                    <tr>
                        <td><p>2</p></td>
                        <td><p>Accelerate to the right</p></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p>
                With the input and output size of the network determined, here is what the neural network
                would look like without any hidden layers:
            </p>
            <div className="center">
                <img className="project-content-image-1-25x" src={ nnNoHiddenMountain } alt="NN with no hidden layers" />
            </div>
            <p>
                I did not do good record keeping here as I had 16 different iterations of Mountain Car agents. I
                will just show the architecture of my latest iteration.
            </p>
            <div className="center-table">
                <div className="no-margin">
                    <div className="center no-margin">
                        <h3 className="agent-header">Mountain Car Agents v16</h3>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th><p>Version</p></th> <th><p>Layers</p></th> <th><p>Node Count</p></th>
                            <th><p>Optimizer</p></th> <th><p>Win Condition</p></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><p>16.0</p></td> <td><p>2</p></td> <td><p>256, 128</p></td> <td><p>Adam</p></td> <td><p>2 consecutive</p></td>
                        </tr>
                        <tr>
                            <td><p>16.1</p></td> <td><p>2</p></td> <td><p>512, 256</p></td> <td><p>Adam</p></td> <td><p>2 consecutive</p></td>
                        </tr>
                        <tr>
                            <td><p>16.2</p></td> <td><p>2</p></td> <td><p>512, 256</p></td> <td><p>Adam</p></td> <td><p>2 consecutive</p></td>
                        </tr>
                        <tr>
                            <td><p>16.3</p></td> <td><p>2</p></td> <td><p>1024, 512</p></td> <td><p>Adam</p></td> <td><p>2 consecutive</p></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>
                I only used the <span className="link" onClick={() => openLinkInNewWindow(adamLink)}>Adam</span> optimizer
                for this problem since it performed better on average for each of the previous iterations.
            </p>
            <p className="bigger">
                Testing
            </p>
            <p>
                In the testing phase, each agent was asked to play 200 games.
                The results were graphed using <span className="link env-var" onClick={() => openLinkInNewWindow(seaborn)}>seaborn.</span>
                A "successful" agent is defined as an agent that has an average score of -110 across all of its epochs
                (game sessions).
            </p>
            <div className="center-image">
                <div className="center-vertically">
                    <h3 className="agent-header">Mountain Car Agents v16</h3>
                    <img className="project-content-image-1-5x" src={ mountaincarResultsv16 } alt="Results of the v16 agents."/>
                </div>
            </div>
            <p>
                It is clear that there is only one perfect winner:
                <div className="center-image">
                    <ul className="no-dot">
                        <li className="project-content-li-orange">
                            v16.3
                        </li>
                    </ul>
                </div>
                Over 16 iterations, only one agent was "successful". That means 1/64 agents that can pass.
            </p>
        </div>
    )
}

export default ClassicControl;