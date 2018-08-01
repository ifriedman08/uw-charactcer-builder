import React, { Component } from 'react';

class BackstoryModal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Narrative Backstory</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                In the year 2718, Earth became uninhabitable and the human race was desperate to find a new system to call home. Luckily, the discovery of Chronitrons (aka the time particle), allowed for a dramatic leap in technological capabilities: faster than light (FTL) travel, advanced AI and machine learning processors, biochemical synthesis and terraforming infrastructure were among the principle advancements.
                                <br/>
                                <br/>
                                And so, bidding farewell to the Sol system we had known for tens of thousands of years, humanity divided into four colonial expeditions, each setting off in a different direction, blindly diving into the void, hoping to find a floating rock or two on which to begin anew.
                                <br/>
                                <br/>
                                One expedition, after floating across space for 150 years, found and founded this solar system in the year 2868. And now, in 3141, we have settled across the system and made it our own.
                                <br/>
                                <br/>
                                <h3>Factions:</h3>
                                <br/>
                                <strong><u>The Commonwealth</u></strong> - This is the central authority of the star system, an evolution of the UN once all nations became one after the Exodus. They control the enforcers (military and the local police) and all branches of government on all colonies within the system. They are in a silent war with the Raidernet and in constant negotiations with the Union.
                                <br/>
                                <br/>
                                <strong><u>ISAC</u></strong> - The Initiative for Scientific Advancement and Conservation formed shortly after the Exodus as a result of the scientific minds insisting that their research and practice be completely independent of any governing body. Occasionally they will contract with the Commonwealth but for the most part, they have successfully kept a separation between science and state. Their mission is pure science for the sake of knowledge and beauty, not war or personal gain, as well as the preservation of all life-forms, both flora and fauna.
                                <br/>
                                <br/>
                                <strong><u>Raidernet</u></strong> - In this technologically advanced star system, information is the most valuable commodity. It can also be a powerful weapon. A network of space-pirates, spies, extortionists, hackers and oligarchs has formed across the system, “trading” goods and information to the highest bidder. Beware when dealing with these cut-throats. If they don’t try to kill or rob you, you always run the risk of getting caught or implicated by Commonwealth enforcers out to shut down this network of contraband smugglers and thieves. 
                                <br/>
                                <br/>
                                <strong><u>The Stargazers</u></strong> - Leaving our original home and venturing out into the unknown caused a surge in fear and spiritual unrest throughout humanity. Surprisingly, droids and bots, sensing the unrest and built with powerful AI, designed the religious structure that now permeates the system: the Stargazers. They constructed a haven, a gargantuan station called “The Leviathan”, inviting all who seek peace of mind and body in this life and the next. Unsurprisingly, only the super rich can afford to by a spot and passage to the Leviathan.
                                <br/>
                                <br/>
                                <strong><u>The Union</u></strong> - Needless to say, colonizing and surviving on a new solar system requires immense amounts of infrastructure, time and labor. Obviously, there are many jobs that the “haves” are leaving to the “have-nots”. Interplanetary shippers, miners, terraformers, these are some of the dangerous and back-breaking jobs without which humanity would surely vanish. Recognizing this, the workers formed a system-wide Union to fight for their rights. Sometimes, literally. In the early days of the new system, much blood was shed during the Hopper Wars until finally the CW allowed for the Union to be formed and to have a seat at the table. (“Hoppers” is a slang term for the system’s laborers, blue collar workers and citizens on the outskirts, shortened from “rock-hoppers”.)
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BackstoryModal;