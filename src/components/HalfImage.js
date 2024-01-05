// Allows to add an half width image to a web-page, helps with sign-in and sign-up
export default function HalfImage({ imageLink }) {
  console.log(`[HalfImage] Trying to show image: ${imageLink}`);
  return (
    <div style={styleSheet.body}>
      <img
        src={imageLink}
        width="100%"
        height="100%"
        alt="some issue occured"
      />
    </div>
  );
}

const styleSheet = {
  body: {
    width: "70vw",
    height: "100vh",
  },
};
