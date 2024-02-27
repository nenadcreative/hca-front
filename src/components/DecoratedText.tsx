const accentKey = "$accent";
const secAccentKey = "$secondary";

const accentStyle = "text-brand-blue";
const secAccentStyle = "text-brand-blue2";

const getStyle = (value) => {
  if (value.includes(accentKey)) {
    return { key: accentKey, style: accentStyle };
  } else if (value.includes(secAccentKey)) {
    return { key: secAccentKey, style: secAccentStyle };
  } else {
    return { key: "", style: "" };
  }
};

const DecoratedText = ({ content }) => {
  if (content && typeof content === "string") {
    const { key, style } = getStyle(content);
    if (key) {
      return (
        <>
          {content.split(key).map((text, i) => {
            return i % 2 === 0 ? (
              text
            ) : (
              <span key={text} className={style}>
                {text}
              </span>
            );
          })}
        </>
      );
    } else {
      return <>{content}</>;
    }
  }
  return <></>;
};

export default DecoratedText;
