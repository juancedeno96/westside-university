import React, { Component } from "react";
import { Link } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";
import { Switch, Route } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="box">
          <Switch>
            <Route component={History} path="/about/history" />
            <Route component={Contact} path="/about/contact" />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>
                    Pokem ipsum dolor sit amet Ponyta Axew Mr. Mime Buneary
                    Munna Tentacruel. Fire Red Butterfree oh, you're my best
                    friend Klink Bellsprout Eelektross Brock. Earthquake
                    Musharna Soul Badge Kirlia duis aute irure dolor in
                    reprehenderit Dragon Rage Conkeldurr. Anim id est laborum
                    Vanillite Clefairy Azurill Onix Lileep Carnivine. Growl
                    Kecleon Snorlax Dratini MysteryBerry I'm on the road to
                    Viridian City Palpitoad. Mineral Badge Jesse Magmar Gothita
                    Mantyke Palpitoad Eelektrik. Ut labore et dolore magna
                    aliqua Marsh Badge Slash Flareon Dragon Nidorina consectetur
                    adipisicing elit. Rainbow Badge Brock Froslass Conkeldurr
                    Seadra Scizor Ursaring. Squirtle Eelektross Cryogonal Flying
                    Turtwig Gold Elite Four. Sed do eiusmod tempor incididunt
                    fishing rod Regigigas Psychic bicycle Lillipup surrender now
                    or prepare to fight. Blastoise Kricketot Carvanha Weedle
                    Remoraid Yanmega Zapdos. Harden Manaphy Magnemite Shieldon
                    Gurdurr Gothorita Sableye. Hive Badge Chansey Maractus
                    Mawile Tentacruel in a world we must defend Lopunny. Mirror
                    Move to protect the world from devastation Chatot to
                    denounce the evils of truth and love Red Junichi Masuda
                    Umbreon. Swift Exploud Pansage Starly Walrein Ruby Graveler.
                    Pewter City Slugma a wild Pokemon appeared Kecleon Shiftry
                    Delibird Hitmontop. Psychic Lilligant Vullaby Celadon City
                    Burnt Berry the enemy Pokemon fainted Houndour. The Power Of
                    One Purugly Pallet Town Diglett Minun Munchlax the power
                    that's inside. Blizzard Musharna Sawk Croconaw Gible
                    Vaporeon Smoochum. Blastoise Articuno Pallet Town Luxio
                    Samurott Abomasnow Yanma. Splash Tauros Sudowoodo Camerupt
                    Weepinbell Misdreavus Diglett. Duis aute irure dolor in
                    reprehenderit in voluptate Delcatty Palpitoad Zorua Mystery
                    Gift Clefairy Dark. Gold Seel Turtwig Primeape Natu Gorebyss
                    Deino. Strength Elekid Nincada Huntail Grumpig Staryu
                    Moltres. Bubble Jellicent Emboar Rattata Solosis Hoppip
                    Charmander.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
