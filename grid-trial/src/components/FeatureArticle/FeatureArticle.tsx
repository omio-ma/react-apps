interface FeatureArticleProps {
  imageSource: string;
  imageAltMessage: string;
  imageTitle: string;
  imageDescription?: string;
}

const FeatureArticle = ({
  imageSource,
  imageAltMessage,
  imageTitle,
  imageDescription
}: FeatureArticleProps) => (
  <article className="featured">
    <img src={imageSource} alt={imageAltMessage} />
    <div>
      <h2>{imageTitle}</h2>
      <p>{imageDescription}</p>
    </div>
  </article>
);

export default FeatureArticle;
