interface ArticleProps {
  imageSource: string;
  imageAltMessage: string;
  imageTitle: string;
  imageDescription?: string;
}

const Article = ({
  imageSource,
  imageAltMessage,
  imageTitle,
  imageDescription
}: ArticleProps) => (
  <article className="normal-articles">
    <img src={imageSource} alt={imageAltMessage} />
    <div>
      <h3>{imageTitle}</h3>
      <p>{imageDescription}</p>
    </div>
  </article>
);

export default Article;
