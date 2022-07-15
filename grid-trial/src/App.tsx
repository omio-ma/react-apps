import "./App.css";
import FeatureArticle from "./components/FeatureArticle/FeatureArticle";
import MainImage from "./assets/images/tower_bridge.jpg";
import CornwallImage from "./assets/images/cornwall_beach.jpg";
import CookiesImage from "./assets/images/cookies.jpg";
import SkyGardenImage from "./assets/images/sky_garden.jpg";
import BlackPuddingImage from "./assets/images/black_pudding.jpg";
import Article from "./components/Articles/Article";

const App = () => (
  <>
    <header>
      <h1>Why uk you ask?</h1>
    </header>
    <div className="container">
      <FeatureArticle
        imageSource={MainImage}
        imageTitle="There is a bridge"
        imageAltMessage="tower bridge image"
        imageDescription="It has a bridge lasting over hundreds of years so you know its safe to make that cross!"
      />
      <Article
        imageSource={CornwallImage}
        imageTitle="Chill at the beach"
        imageAltMessage="cornwall image"
        imageDescription="I  mean sure its not the longest uninterrupted beach, but there is just so much varities of them!"
      />
      <Article
        imageSource={CookiesImage}
        imageTitle="Them cookies"
        imageAltMessage="cookies image"
        imageDescription="You know a damn good cookie goes well with a cup of chai!"
      />
      <Article
        imageSource={SkyGardenImage}
        imageTitle="Sky Garden"
        imageAltMessage="sky garden image"
        imageDescription="There is an actual garden in the sky!"
      />
      <FeatureArticle
        imageSource={BlackPuddingImage}
        imageTitle="Black pudding!"
        imageAltMessage="black pudding image"
        imageDescription="Just to wrap it up with black pudding to make the case of how 'bloody' amazing it is here!"
      />
    </div>
  </>
);

export default App;
