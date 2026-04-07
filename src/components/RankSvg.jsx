const RankSvg = ({ svgString }) => (
  <div
    style={{ position: 'absolute', inset: 0 }}
    dangerouslySetInnerHTML={{ __html: svgString }}
  />
);

export default RankSvg;
